"""hack URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from hackapp import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home_view),
    path('patient/', views.login_view),
    path('patient/patient1/', views.patient1),
    path('patient/patient1/patient2/', views.patient2),
    path('patient/patient1/patient2/patient3', views.patient3),
    path('patient/patient1/patient2/patient3/my_def_in_view', views.my_def_in_view)

]
