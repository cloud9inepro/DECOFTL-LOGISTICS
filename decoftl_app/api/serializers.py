from rest_framework.serializers import ModelSerializer, SerializerMethodField
from ..models import Admin, Rider, Tracker

class AdminSerializer(ModelSerializer):
    class Meta:
        model = Admin
        fields = ['id', 'username', 'email', 'phone_number', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        admin = Admin.objects.create(**validated_data)
        return admin
    
class RiderSerializer(ModelSerializer):
    age = SerializerMethodField()

    class Meta:
        model = Rider
        fields = ['id', 'username', 'email', 'phone_number', 'address', 'age', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        rider = Rider.objects.create(**validated_data)
        return rider

    def get_age(self, obj):
        return obj.age
    
class TrackerSerializer(ModelSerializer):
    class Meta:
        model = Tracker
        fields = '__all__' 