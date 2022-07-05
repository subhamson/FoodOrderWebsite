from django.db import models

# Create your models here.
class SignUp(models.Model):
    Id=models.AutoField(primary_key=True)
    Name=models.CharField(max_length=200)
    Email=models.EmailField(max_length = 254)
    Mobile=models.CharField(max_length=100)
    Pass=models.CharField(max_length=100)