from django.conf.urls import url
from UserDetails import views

urlpatterns = [
    url(r'^signup/$', views.SignUpApi),
    url(r'^signup/([0-9]+)$', views.SignUpApi),
]