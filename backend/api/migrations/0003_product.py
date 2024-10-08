# Generated by Django 4.2.10 on 2024-09-02 05:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_rename_gentscollection_gentscategory_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('information', models.TextField()),
                ('gender', models.CharField(choices=[('M', 'Male'), ('F', 'Female')], max_length=1)),
                ('image', models.ImageField(upload_to='product_images/')),
                ('category', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.ladiescategory')),
                ('category_gents', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.gentscategory')),
            ],
        ),
    ]
