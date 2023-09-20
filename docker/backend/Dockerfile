FROM python:3-slim

ARG DJANGO_SETTINGS_MODULE \
    DJANGO_SECRET_KEY



ENV DJANGO_SECRET_KEY=$DJANGO_SECRET_KEY \
    DJANGO_SETTINGS_MODULE=$DJANGO_SETTINGS_MODULE \
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

# USER appuser

ENTRYPOINT [ "/backend/entrypoint.sh" ]

