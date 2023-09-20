from . import *
from django.core.management.utils import get_random_secret_key

DEBUG = True

SECRET_KEY = get_random_secret_key()

ALLOWED_HOSTS = ["*"]

CORS_ALLOW_ALL_ORIGINS = True
CSRF_TRUSTED_ORIGINS = [
    "http://localhost:8000",
    "http://localhost:5173"
]
LOG_LEVEL = "DEBUG"

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "dev_db.sqlite3",
    }
}


REST_FRAMEWORK = {
    "DEFAULT_AUTHENTICATION_CLASSES": (
        "rest_framework.authentication.SessionAuthentication",
    )
}
