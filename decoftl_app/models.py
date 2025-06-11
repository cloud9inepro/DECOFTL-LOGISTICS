from django.db import models

# Create your models here.)
class Admin(models.Model):
    username = models.CharField(max_length=200)
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=15, unique=True)
    password = models.CharField(max_length=100)

    def __str__(self):
        return f'{self.username}'
    
class Rider(models.Model):
    username = models.CharField(max_length=200, unique=True)
    password = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=15, unique=True)
    address = models.CharField(max_length=255)
    age = models.PositiveIntegerField()
    
    def __str__(self):
        return f'{self.username}'
    
    
class Tracker(models.Model):
    tracker_id = models.ForeignKey(Admin, on_delete=models.CASCADE)
    admin_tracker = models.ForeignKey(Rider, on_delete=models.CASCADE)
    Rider_tracker = models.CharField(max_length=200, unique=True)
    
    def __str__(self):
        return f'{self.tracker_id} {self.admin_tracker} {self.Rider_tracker}'

