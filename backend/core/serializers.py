from django.contrib.auth import authenticate
from rest_framework import serializers
from django.contrib.auth.models import User

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()
    def validate(self, attrs):
        user = authenticate(username=attrs['username'],
        password=attrs['password'])
        if not user:
            raise serializers.ValidationError('Incorrect username or password.')
        if not user.is_active:
            raise serializers.ValidationError('User is disabled.')
        return {'user': user}

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            "username",
            "first_name",
            "last_name",
            "email",
            "is_staff",
            "is_active",
            "is_superuser",
            "last_login",
            "date_joined",
        ]