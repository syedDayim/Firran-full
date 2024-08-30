from django.http import JsonResponse
from .models import LadiesCategory, GentsCategory

def ladies_category_list(request):
    ladies = LadiesCategory.objects.all()
    ladies_list = [{'name': lady.name, 'image': request.build_absolute_uri(lady.image.url)} for lady in ladies]
    return JsonResponse(ladies_list, safe=False)

def gents_category_list(request):
    gents = GentsCategory.objects.all()
    gents_list = [{'name': gent.name, 'image': request.build_absolute_uri(gent.image.url)} for gent in gents]
    return JsonResponse(gents_list, safe=False)
    