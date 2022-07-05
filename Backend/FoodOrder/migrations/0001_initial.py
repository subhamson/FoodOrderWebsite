# Generated by Django 3.2.5 on 2022-06-29 17:04

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='FoodList',
            fields=[
                ('FoodId', models.AutoField(primary_key=True, serialize=False)),
                ('Price', models.IntegerField()),
                ('Name', models.CharField(max_length=200)),
                ('Favourite', models.BooleanField(default=False)),
                ('Stars', models.FloatField()),
                ('ImageUrl', models.URLField()),
                ('Cooktime', models.CharField(max_length=100)),
                ('Tags', models.CharField(max_length=200)),
            ],
        ),
    ]