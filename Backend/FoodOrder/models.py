from django.db import models

# Create your models here.
class FoodList(models.Model):
    FoodId=models.AutoField(primary_key=True)
    Price=models.IntegerField()
    Name=models.CharField(max_length=200)
    Favourite=models.BooleanField(default=False)
    Stars=models.FloatField()
    ImageUrl=models.URLField()
    Cooktime=models.CharField(max_length=100)
    Tags=models.CharField(max_length=200)

