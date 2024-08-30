from django.db import models

# Create your models here.
from django.db import models

class LadiesCategory(models.Model):
    name = models.CharField(max_length=100, unique=True)
    image = models.ImageField(upload_to='ladies_images/')

    def __str__(self):
        return self.name

class GentsCategory(models.Model):
    name = models.CharField(max_length=100, unique=True)
    image = models.ImageField(upload_to='gents_images/')

    def __str__(self):
        return self.name
