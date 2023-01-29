from django.shortcuts import render
from .models import Point
from django.http import JsonResponse
from api.serializers import PointSerializer
from rest_framework.decorators import api_view
# Create your views here.
def index(request):
    percentage = Point.objects.all()
    return render(request, 'User-page.html', {'percentage': percentage})

def quiz(request):
    correctAnswers = Point.objects.all()
    return render(request,'quiz.html',{'correctAnswers': correctAnswers})

@api_view(['GET']) 
def pointlist(request):
    if request.method == 'GET':
        point = Point.objects.all()
        serializer=PointSerializer(point, many=True)
        return JsonResponse({'pointtest':serializer.data},safe=False)