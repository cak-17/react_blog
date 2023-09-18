#!/bin/bash

LINE="===================================================================="
ENDLINE="\n"

color() {
    echo -e "\e[$2m$1\e[0m"
}

insert_line() {
    MSG=$1
    if [[ $2 ]]; then
        echo "======== [$(color "$MSG" "$2")] ${LINE:${#MSG}}"
    else
        echo "======== [$MSG] ${LINE:${#MSG}}"
    fi
}
# Give time to Nginx to start
sleep 3

# Perform Django System Check
insert_line "System Check"
python manage.py check --force-color
echo -e "${ENDLINE}"

# Make Django Migrations
insert_line "Make Migrations"
python manage.py makemigrations --force-color
echo -e "${ENDLINE}"

# Apply Django Migrations
insert_line "Migrate"
python manage.py migrate --force-color
echo -e "${ENDLINE}"

# Run Gunicorn Server using custom conf file
GREEN="1;32"
insert_line "Run Gunicorn Server" $GREEN
gunicorn backend.wsgi -c /backend/gunicorn.conf.py
