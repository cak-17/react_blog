from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('api/admin/', admin.site.urls),
    path('api/auth/', include('rest_framework.urls')),
    path('api/core/', include("core.urls")),
    path('api/posts/', include("api.urls")),
]
