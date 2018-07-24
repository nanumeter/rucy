from django.conf.urls import url, include
from rest_framework import routers
from rest_api import views

router = routers.DefaultRouter()
router.register(r'sankeychart', views.SankeyChartViewSet, base_name="sankeychart")

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
