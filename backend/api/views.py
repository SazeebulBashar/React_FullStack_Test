from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .stock_market_data import data

# Create your views here.
@api_view(['GET'])
def getData(request):
    return Response({"data": data})


