from django.contrib.auth import login, models
from django.http import JsonResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_protect, ensure_csrf_cookie
from rest_framework import permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import LoginSerializer, UserSerializer


@ensure_csrf_cookie
def set_csrf_token(request):
    """
    This will be `/api/set-csrf-cookie/` on `urls.py`
    """
    return JsonResponse({"details": "CSRF cookie set"})

csrf_protected_method = method_decorator(csrf_protect)
class LoginView(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    @csrf_protected_method
    def post(self, request):

        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        username = serializer.validated_data['user']

        login(request, username)

        user = UserSerializer(models.User.objects.get(username=username))
        return Response(user.data, status=status.HTTP_200_OK)