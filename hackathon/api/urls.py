from django.contrib import admin
from django.urls import include, path
from .views import UserView

urlpatterns = [path("", UserView.as_view())]
