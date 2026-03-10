from django.db import models


class MailLog(models.Model):
	STATUS_QUEUED = "queued"
	STATUS_SENT = "sent"
	STATUS_FAILED = "failed"

	STATUS_CHOICES = [
		(STATUS_QUEUED, "Queued"),
		(STATUS_SENT, "Sent"),
		(STATUS_FAILED, "Failed"),
	]

	created_at = models.DateTimeField(auto_now_add=True)
	sent_at = models.DateTimeField(null=True, blank=True)
	to_email = models.EmailField()
	from_email = models.EmailField(blank=True)
	reply_to = models.EmailField(blank=True)
	subject = models.CharField(max_length=255)
	body = models.TextField()
	status = models.CharField(max_length=16, choices=STATUS_CHOICES, default=STATUS_QUEUED)
	error_message = models.TextField(blank=True)
	meta = models.JSONField(blank=True, default=dict)

	class Meta:
		ordering = ["-created_at"]

	def __str__(self) -> str:
		return f"{self.to_email} | {self.subject} | {self.status}"
