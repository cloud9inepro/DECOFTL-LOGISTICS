from .views import AdminViewSet, RiderViewSet, TrackerViewset
from rest_framework.routers import DefaultRouter
router = DefaultRouter()

router.register(r'admins', AdminViewSet, basename='admin')
router.register(r'riders', RiderViewSet, basename='rider')
router.register(r'trackers', TrackerViewset, basename='tracker')
urlpatterns = []

urlpatterns += router.urls
# This code sets up the URL routing for the API, allowing access to the Admin and Rider viewsets.