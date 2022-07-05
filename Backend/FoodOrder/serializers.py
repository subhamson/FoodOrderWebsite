from rest_framework import serializers
from FoodOrder.models import FoodList

class FoodListSerializer(serializers.ModelSerializer):
    class Meta:
        model=FoodList
        fields=('FoodId','Price','Name','Favourite',
        'Stars','ImageUrl','Cooktime','Tags')
