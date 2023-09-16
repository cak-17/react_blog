import os

ACCESS_LOG = "access.log"
ERROR_LOG = "error.log"

LOGS_DIR = "/backend/logs/gunicorn"

bind = "0.0.0.0:8000"
workers = 3

# TODO: #1 FIX LOGGING
# accesslog = "/backend/logs/gunicorn/access.log"
# errorlog = "/backend/logs/gunicorn/error.log"

capture_output = True
loglevel = "debug" if os.environ.get("DJANGO_DEBUG") else "info"
