from django.db import models

# Existing models
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



        
class Product(models.Model):
    GENDER_CHOICES = [
        ('M', 'Male'),
        ('F', 'Female'),
    ]

    SEASON_CHOICES = [
        ('summer', 'Summer'),
        ('winter', 'Winter'),
        ('autumn', 'Autumn'),
        ('spring', 'Spring'),
    ]

    title = models.CharField(max_length=200)
    information = models.TextField()
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    season = models.CharField(max_length=20, choices=SEASON_CHOICES)
    category = models.ForeignKey(
        LadiesCategory, 
        on_delete=models.CASCADE, 
        null=True, 
        blank=True
    )
    image = models.ImageField(upload_to='product_images/')
    is_soldout = models.BooleanField(default=False)  # New field

    def __str__(self):
        return self.title
