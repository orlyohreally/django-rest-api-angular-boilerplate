from django.urls import include, path
from rest_framework import routers
from blog import views
from django.contrib import admin
from django.conf.urls import url
from blog.urls import router as blog

urlpatterns = [
    url(r'^api/', include(blog.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^admin/', admin.site.urls),
    url(r'^(?P<path>.*)$', views.index, name='index'),
]
