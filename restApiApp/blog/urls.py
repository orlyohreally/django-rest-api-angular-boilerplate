from django.conf.urls import url
from . import views


from django.urls import include, path
from rest_framework import routers
from blog import views
from django.contrib import admin

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)
router.register(r'posts', views.PostViewSet)
