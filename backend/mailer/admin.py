from django.contrib import admin

from .models import MailLog


@admin.register(MailLog)
class MailLogAdmin(admin.ModelAdmin):
	list_display = ("created_at", "to_email", "subject", "status", "sent_at")
	list_filter = ("status", "created_at")
	search_fields = ("to_email", "subject", "body")
	readonly_fields = ("created_at", "sent_at", "status", "error_message")
