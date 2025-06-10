from django.contrib import admin
from .models import Admin, Rider

# Register your models here.
admin.site.register(Admin)
admin.site.register(Rider)
# This code registers the Admin and Rider models with the Django admin site, allowing them to be managed through the admin interface.