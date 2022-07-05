from django.conf.urls import url
from FoodOrder import views

urlpatterns = [
    url(r'^foodlist/$', views.FoodListApi),
    url(r'^foodlist/([0-9]+)$', views.FoodListApi),
]
