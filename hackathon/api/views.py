from rest_framework import generics
from django.shortcuts import render
from .models import User
from .serializers import UserSerializer

# Create your views here.
class UserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
