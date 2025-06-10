from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.response import Response
from rest_framework.decorators import action
from ..models import Admin, Rider
from .serializers import AdminSerializer, RiderSerializer


class AdminViewSet(ModelViewSet):
    queryset = Admin.objects.all()
    serializer_class = AdminSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]

    @action(detail=False, methods=['get'])
    def list_admins(self, request):
        admins = self.get_queryset()
        serializer = self.get_serializer(admins, many=True)
        return Response(serializer.data)
    
class RiderViewSet(ModelViewSet):
    queryset = Rider.objects.all()
    serializer_class = RiderSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]
    
    @action(detail=False, methods=['get'])  
    def list_riders(self, request):
        riders = self.get_queryset()
        serializer = self.get_serializer(riders, many=True)
        return Response(serializer.data)