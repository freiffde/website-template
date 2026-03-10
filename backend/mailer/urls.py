from django.urls import path

from .views import send_mail_api

urlpatterns = [
    path("send-mail/", send_mail_api, name="send_mail_api"),
]
