from django.urls import include, path
from rest_framework import routers
from blog import views
from django.contrib import admin
from django.conf.urls import url
router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^api/', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^admin/', admin.site.urls),
    url(r'^(?P<path>.*)$', views.index, name='index'),
]

# urlpatterns = [url(r'^$', views.index, name='index'), ]
