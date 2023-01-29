from django.db import models

# Create your models here.
class Point(models.Model):
    correctAnswers = models.IntegerField()
    percentage = models.IntegerField()