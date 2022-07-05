from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from UserDetails.models import SignUp
from UserDetails.serializers import UserDetailsSerializers

# Create your views here.
@csrf_exempt
def SignUpApi(request,id=0):
    if request.method=='GET':
        SignUpDetails = SignUp.objects.all()
        SignUpDetails_serializer = UserDetailsSerializers(SignUpDetails, many=True)
        return JsonResponse(SignUpDetails_serializer.data, safe=False)
    elif request.method=='POST':
        SignUp_data=JSONParser().parse(request)
        SignUpDetails_serializer = UserDetailsSerializers(data=SignUp_data)
        if SignUpDetails_serializer.is_valid():
            SignUpDetails_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        else:
            return JsonResponse("Failed to Add", safe=False)
    elif request.method=='PUT':
        SignUp_data = JSONParser.parse(request)
        SignUps= SignUp.objects.get(Id=SignUp_data['Id'])
        SignUpDetails_serializer = UserDetailsSerializers(SignUps, data=SignUp_data)
        if SignUpDetails_serializer.is_valid():
            SignUpDetails_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        else:
            return JsonResponse("Failed to Update", safe=False)
    elif request.method=='DELETE': 
        SignUps= SignUp.objects.get(Id=id)       
        SignUps.delete()
        return JsonResponse("Deleted Successfully", safe=False)

 

