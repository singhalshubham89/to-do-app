from django.db import models

# Create your models here.


class Todo(models.Model):
    task = models.CharField(max_length=256)
    iscompleted = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.task
