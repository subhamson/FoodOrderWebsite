from pyexpat import model
from rest_framework import serializers
from UserDetails.models import SignUp

class UserDetailsSerializers(serializers.ModelSerializer):
    class Meta:
        model=SignUp
        fields=('Id','Name','Email','Mobile','Pass')