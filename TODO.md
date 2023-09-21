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

- add non-root user to webserver
- add non-root user to backend and fix file permissions
- add postgresql image
- manage logging files

## Git

- refactor Workflows

## Tests

- make Tests

## Backend

- startapp auth && cp -r core/ auth/
- add dashboard info:
  - stats for users
- fix logging in backend
- authorization middleware
- add createsuperuser with .env vars
- move prod database to postgresql image

## Frontend

- remove `src/*`  content
- admin authorizations
- dashboard
- double check and refactor API calls
