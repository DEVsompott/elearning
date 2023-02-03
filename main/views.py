from django.shortcuts import render, redirect
from .models import User
from django.http import JsonResponse
from api.serializers import UserSerializer
from rest_framework.decorators import api_view
# Create your views here.
def index(request):
    percentage = User.objects.all()
    return render(request, 'User-page.html', {'percentage': percentage})

def quiz(request):
    correctAnswers = User.objects.all()
    return render(request,'quiz.html',{'correctAnswers': correctAnswers})

def admin(request):
    return render(request,'admin-page.html')



@api_view(['GET']) 
def Userlist(request):
    if request.method == 'GET':
        User = User.objects.all()
        serializer=UserSerializer(User, many=True)
        return JsonResponse({'Usertest':serializer.data},safe=False)
        