from django.contrib import admin
from .models import LadiesCategory, GentsCategory, Product

class LadiesCategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'image')  # Fields to display in the list view
    search_fields = ('name',)  # Add a search bar to search by name
    list_filter = ('name',)  # Add filter options for the name

class GentsCategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'image')
    search_fields = ('name',)
    list_filter = ('name',)

class ProductAdmin(admin.ModelAdmin):
    list_display = ('title', 'gender', 'category', 'image', 'is_soldout')  # Added is_soldout to the display
    search_fields = ('title', 'information')  # Add a search bar to search by title or information
    list_filter = ('gender', 'category', 'is_soldout')  # Add filter options for gender, category, and soldout status

    def get_queryset(self, request):
        qs = super().get_queryset(request)
        # Customize the queryset if needed (e.g., filtering based on user or condition)
        return qs

# Register the models with custom admin classes
admin.site.register(LadiesCategory, LadiesCategoryAdmin)
admin.site.register(GentsCategory, GentsCategoryAdmin)
admin.site.register(Product, ProductAdmin)
