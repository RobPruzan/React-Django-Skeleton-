from rest_framework import generics
from django.shortcuts import render
from .models import User
from .serializers import UserSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
class UserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class ReactView(APIView):
    def get(self, request):
        # output = [{"name": "John", "age": 27}, {"name": "Mary", "age": 25}]
        return Response("THIS IS A TEST")

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)