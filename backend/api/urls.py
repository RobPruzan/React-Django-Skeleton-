from django.contrib import admin
from django.urls import include, path
from .views import UserView, ReactView

urlpatterns = [path("", ReactView.as_view())]
