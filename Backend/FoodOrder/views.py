from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from FoodOrder.models import FoodList
from FoodOrder.serializers import FoodListSerializer


# Create your views here.
@csrf_exempt
def FoodListApi(request,id=0):
    if request.method=='GET':
        foodList = FoodList.objects.all()
        foodList_serializer = FoodListSerializer(foodList, many=True)
        return JsonResponse(foodList_serializer.data, safe=False)
    elif request.method=='POST':
        foodList_data=JSONParser.parse(request)
        foodLists_serializer = FoodListSerializer(data=foodList_data)
        if foodLists_serializer.is_valid():
            foodLists_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        else:
            return JsonResponse("Failed to Add", safe=False)
    elif request.method=='PUT':
        foodList_data = JSONParser.parse(request)
        foodLists= FoodList.objects.get(FoodId=foodList_data['FoodId'])
        foodLists_serializer = FoodListSerializer(foodLists, data=foodList_data)
        if foodLists_serializer.is_valid():
            foodLists_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        else:
            return JsonResponse("Failed to Update", safe=False)
    elif request.method=='DELETE': 
        foodlist= FoodList.objects.get(FoodId=id)       
        foodlist.delete()
        return JsonResponse("Deleted Successfully", safe=False)
