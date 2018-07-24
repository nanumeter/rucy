from rest_api.models import SankeyChart
from rest_framework import serializers

class NodeSerializer(serializers.Serializer):
    id = serializers.CharField()

class LinkSerializer(serializers.Serializer):
    source = serializers.CharField()
    target = serializers.CharField()
    value = serializers.IntegerField()

class SankeyChartSerializer(serializers.Serializer):
    nodes = NodeSerializer(many=True)
    links = LinkSerializer(many=True)