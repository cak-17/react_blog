from . import *
import os
SECRET_KEY = os.environ.get("DJANGO_SECRET_KEY")

DEBUG = True

ALLOWED_HOSTS = [
    "api",
    "localhost",
    "127.0.0.1",
    "0.0.0.0",
    "fracat-think.local",
    "fra-srv.mywire.org",
]


CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",
    "http://localhost:8000",
    "http://api",
    "http://fracat-think.local",
    "http://fra-srv.mywire.org",
]

CSRF_TRUSTED_ORIGINS = [
    "http://localhost:5173",
    "http://localhost:8000",
    "http://api",
    "http://fracat-think.local",
    "http://fra-srv.mywire.org",
]

LOG_LEVEL = "INFO"

# DATABASES = {
#     "default": {
#         "ENGINE": "django.db.backends.postgresql",
#         "USER": os.environ.get("PG_USER", "postgres"),
#         "PASSWORD": os.environ.get("PG_PASSWORD", "postgres"),
#         "NAME": os.environ.get("PG_DB", "postgres"),
#         "PORT": os.environ.get("PG_PORT", "5432"),
#         "HOST": os.environ.get(
#             "PG_HOST", "localhost"
#         ),  # uses the container if set, otherwise it runs locally
#         "ATOMIC_REQUESTS": True,
#     }
# }

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "dev_db.sqlite3",
    }
}


REST_FRAMEWORK = {
    # "DEFAULT_PERMISSION_CLASSES": (
    #     "rest_framework.permissions.IsAuthenticated", #CHECK THIS MOTHERFUCKER
    # ),
    "DEFAULT_AUTHENTICATION_CLASSES": (
        "rest_framework.authentication.SessionAuthentication",
    ),
}
