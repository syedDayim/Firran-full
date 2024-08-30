from django.contrib import admin
from .models import LadiesCategory, GentsCategory

class LadiesCategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'image')  # Fields to display in the list view
    search_fields = ('name',)  # Add a search bar to search by name
    list_filter = ('name',)  # Add filter options for the name

class GentsCategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'image')
    search_fields = ('name',)
    list_filter = ('name',)

# Register the models with custom admin classes
admin.site.register(LadiesCategory, LadiesCategoryAdmin)
admin.site.register(GentsCategory, GentsCategoryAdmin)
