from django.urls import path, include
from . import views

urlpatterns = [
    path('set-token/', views.set_csrf_token),
    path('login/', views.LoginView.as_view()),
]