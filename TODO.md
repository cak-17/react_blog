# TODO

## Makefile

- refactor Makefile:
  - add separate init and start commands for backend and frontend like

        ```bash
        # python manage.py makemigrations && migrate etc..
        make build backend
        # gunicorn 0.0.0.0:8000 etc... etc...
        make run backend

        make build frontend
        make run frontend
        ```

  - redo docker-compose and dive make commands

        ```bash
        # docker build --tag etc...
        make dock build
        # docker run -r -ti etc...
        make dock run
        # dive --ci $tag:latest
        make image test $tag
        ```

## Docker

- add non-root user to frontend
- manage logging files

## Git

- refactor Workflows

## Tests

- make Tests

## Backend

- rename core.apps in auth.apps
- add dashboard info:
  - stats for users

- write LoginView or def login with LoginSerializer.is_valid and point it to /api/auth/login
- do we still need set-token?

- fix logging in backend
- authorization middleware
- add createsuperuser with .env vars
- maybe... split settings.py:

      ```python
      # backend/settings/__init__.py

      """
            Add all default and basic settings
      """
      import os

      BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
      # backend/settings/prod.py
      from . import *

      DEBUG = False
      ALLOWED_HOSTS = ['example.com']
      DATABASES = {
            'default': {
                  'ENGINE': '...postgresql'
            }
      }

      # backend/settings/dev.py
      from . import *

      DEBUG = True
      ALLOWED_HOSTS = ['*']
      DATABASES = {
            'default': {
                  'ENGINE': '...sqlite3'
            }
      }
      ```

      ```python
      # Select correct settings at entrypoint.sh
      # /backend/utils/
      import os
      PROJECT_STAGE = os.environ.get("PROJECT_STAGE", "Dev").lower()

      # there may be issues if you don't set the PROJECT_STAGE var...
      # let's find a way to work around that...

      os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings.{PROJECT_STAGE}")

      ```

## Frontend

- remove `src/*`  content
- add react-routers
- admin authorizations
- dashboard
- double check and refactor API calls
