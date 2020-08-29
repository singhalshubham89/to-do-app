from rest_framework import viewsets
from .serializers import TodSerializer
from backend.models import Todo


class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodSerializer
