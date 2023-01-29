from rest_framework import serializers
from main.models import Point

class PointSerializer(serializers.ModelSerializer):
    class Meta:
        model = Point
        fields = ('__all__')