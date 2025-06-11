from django.contrib import admin
from .models import Admin, Rider, Tracker

# Register your models here.
admin.site.register(Admin)
admin.site.register(Rider)
admin.site.register(Tracker)
# This code registers the Admin and Rider models with the Django admin site, allowing them to be managed through the admin interface.