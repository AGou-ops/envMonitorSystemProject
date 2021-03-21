from django.contrib import admin
from django.urls import path, include
# from ..auth_app import views
from auth_app import views

from django.contrib.auth import views as auth_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth_app/', include('auth_app.urls')),
    path('auth_app/', include('django.contrib.auth.urls')),
    path('', views.index, name='index'),

]
