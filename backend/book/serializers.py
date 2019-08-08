from rest_framework import serializers
from .models import Book

# in order to convert to json

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = '__all__'