#!/bin/bash

LINE="================================="
ENDLINE="\n"

insert_line() {
    echo -e "===== [$1] ${LINE}"
}

insert_line "System Check"
python manage.py check
echo -e "${ENDLINE}"
insert_line "Make Migrations"
python manage.py makemigrations
echo -e "${ENDLINE}"
insert_line "Migrate"
python manage.py migrate
echo -e "${ENDLINE}"
insert_line "Collect Static Files"
python manage.py collectstatic --no-input
echo -e "${ENDLINE}"

insert_line "\e[1;32mRun Gunicorn Server\e[0m"
gunicorn backend.wsgi -c /backend/gunicorn.conf.py
