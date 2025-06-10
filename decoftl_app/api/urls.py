from rest_framework.urls import path
from .views import AdminViewSet, RiderViewSet
from rest_framework.routers import DefaultRouter
router = DefaultRouter()

router.register(r'admins', AdminViewSet, basename='admin')
router.register(r'riders', RiderViewSet, basename='rider')
urlpatterns = router.urls
# This code sets up the URL routing for the API, allowing access to the Admin and Rider viewsets.