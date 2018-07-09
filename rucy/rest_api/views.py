from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework.response import Response
from rest_api.serializers import SankeyChartSerializer
from rest_api.models import SankeyChart
from rest_framework.renderers import JSONRenderer
from rest_api.models import Node, Link
from rest_api.search import search
# Create your views here.

class SankeyChartViewSet(viewsets.ViewSet):

    def list(self, request):
        #sankeyChart = SankeyChart(nodes=[Node('a'),Node('b')],links=[Link('a', 'b', 1)])
        #serializer = SankeyChartSerializer(sankeyChart)
        
        #query = my_search.query("match", title="logstash*")
        #response = query.execute()
        #print(response)
        return Response(search())

    def retrieve(self, request, pk=None):
        sankeyChart = SankeyChart(nodes=Node('a'),links=Link('a', 'b', 1))
        serializer = SankeyChartSerializer(sankeyChart)
        return Response(serializer.data)
