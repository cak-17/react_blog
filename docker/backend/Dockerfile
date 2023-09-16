FROM python:3-slim
ENV PYTHONUNBUFFERED 1

ARG DJANGO_ALLOWED_HOSTS \
    DJANGO_SECRET_KEY \
    DJANGO_DEBUG \
    CORS_ALLOWED_ORIGINS \
    CSRF_TRUSTED_ORIGINS \
    PROJECT_STAGE

ENV DJANGO_ALLOWED_HOSTS=$DJANGO_ALLOWED_HOSTS \
    DJANGO_SECRET_KEY=$DJANGO_SECRET_KEY \
    DJANGO_DEBUG=$DJANGODEBUG \
    CORS_ALLOWED_ORIGINS=$CORS_ALLOWED_ORIGINS \
    CSRF_TRUSTED_ORIGINS=$CSRF_TRUSTED_ORIGINS \
    PROJECT_STAGE=$PROJECT_STAGE

WORKDIR /backend

COPY requirements.txt .

RUN set -ex \
    && addgroup --system --gid 1001 appgroup \
    && useradd -rs /bin/bash -u 1001 --no-create-home appuser \
    && apt-get update \
    && apt-get upgrade -y \
    && pip install -r requirements.txt \
    && apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/* \
    && rm -f /var/cache/debconf/templates.dat-old \
    && rm -f /var/cache/debconf/config.dat-old \
    && rm -f /var/log/apt/term.log

USER appuser

COPY . .

EXPOSE 8000

ENTRYPOINT [ "/backend/entrypoint.sh" ]