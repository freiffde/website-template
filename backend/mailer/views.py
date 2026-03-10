import json

from django.conf import settings
from django.core.mail import EmailMessage
from django.http import JsonResponse
from django.utils import timezone
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST

from .models import MailLog


@csrf_exempt
@require_POST
def send_mail_api(request):
	try:
		payload = json.loads(request.body or "{}")
	except json.JSONDecodeError:
		return JsonResponse({"ok": False, "error": "Invalid JSON"}, status=400)

	to_email = payload.get("to") or payload.get("to_email")
	subject = (payload.get("subject") or "").strip()
	body = payload.get("body") or ""
	from_email = payload.get("from_email") or settings.DEFAULT_FROM_EMAIL
	reply_to = payload.get("reply_to")
	meta = payload.get("meta") or {}

	if not to_email or not subject or not body:
		return JsonResponse(
			{
				"ok": False,
				"error": "Missing required fields: to, subject, body",
			},
			status=400,
		)

	log_entry = MailLog.objects.create(
		to_email=to_email,
		from_email=from_email,
		reply_to=reply_to or "",
		subject=subject,
		body=body,
		status=MailLog.STATUS_QUEUED,
		meta=meta,
	)

	try:
		email = EmailMessage(
			subject=subject,
			body=body,
			from_email=from_email,
			to=[to_email],
			reply_to=[reply_to] if reply_to else None,
		)
		email.send(fail_silently=False)
	except Exception as exc:  # noqa: BLE001
		log_entry.status = MailLog.STATUS_FAILED
		log_entry.error_message = str(exc)
		log_entry.save(update_fields=["status", "error_message"])
		return JsonResponse(
			{
				"ok": False,
				"id": log_entry.id,
				"status": log_entry.status,
				"error": str(exc),
			},
			status=500,
		)

	log_entry.status = MailLog.STATUS_SENT
	log_entry.sent_at = timezone.now()
	log_entry.save(update_fields=["status", "sent_at"])

	return JsonResponse({"ok": True, "id": log_entry.id, "status": log_entry.status})
