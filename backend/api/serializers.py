from rest_framework import serializers
from backend.models import Todo


class TodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = '__all__'
