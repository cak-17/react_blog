FROM python:3-slim

ARG DJANGO_ALLOWED_HOSTS \
    DJANGO_SECRET_KEY \
    DJANGO_DEBUG \
    CORS_ALLOWED_ORIGINS \
    CSRF_TRUSTED_ORIGINS \
    PROJECT_STAGE

ENV DJANGO_ALLOWED_HOSTS=$DJANGO_ALLOWED_HOSTS \
    DJANGO_SECRET_KEY=$DJANGO_SECRET_KEY \
    DJANGO_DEBUG=$DJANGO_DEBUG \
    CORS_ALLOWED_ORIGINS=$CORS_ALLOWED_ORIGINS \
    CSRF_TRUSTED_ORIGINS=$CSRF_TRUSTED_ORIGINS \
    PROJECT_STAGE=$PROJECT_STAGE \
    PYTHONUNBUFFERED=1

WORKDIR /backend

COPY requirements.txt .

RUN set -ex \
    && addgroup --system --gid 1000 appgroup \
    && useradd -rs /bin/bash -u 1000 --no-create-home appuser \
    && apt-get update \
    && apt-get upgrade -y \
    && pip install -r requirements.txt \
    && apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/* \
    && rm -f /var/cache/debconf/templates.dat-old \
    && rm -f /var/cache/debconf/config.dat-old \
    && rm -f /var/log/apt/term.log

COPY . .

RUN python manage.py collectstatic --no-input

EXPOSE 8000

USER appuser

ENTRYPOINT [ "/backend/entrypoint.sh" ]

