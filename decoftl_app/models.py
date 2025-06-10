from django.db import models

# Create your models here.
class Admin(models.Model):
    username = models.CharField(max_length=100, unique=True)
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=15, unique=True)
    password = models.CharField(max_length=100)

    def __str__(self):
        return f'{self.username} {self.email} {self.phone_number} {self.password}'
    
class Rider(models.Model):
    username = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=15, unique=True)
    address = models.CharField(max_length=255)
    age = models.PositiveIntegerField()
    
    def __str__(self):
        return f'{self.username} {self.phone_number} {self.email} {self.address} {self.age}'