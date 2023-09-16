import logging
import os

from pathlib import Path

logger = logging.getLogger(__name__)

BASE_DIR = Path(__file__).resolve().parent.parent

LINE = "=" * 20

DEV_DB = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'dev_db.sqlite3',
    }
}

TEST_DB = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'test_db.sqlite3',
    }
}

PROD_DB = {
    'default': {
        'ENGINE': os.environ.get('DB_DRIVER','django.db.backends.postgresql'),
        'USER': os.environ.get('PG_USER','postgres'),
        'PASSWORD':os.environ.get('PG_PASSWORD','postgres'),
        'NAME': os.environ.get('PG_DB','postgres'),
        'PORT': os.environ.get('PG_PORT','5432'),
        'HOST': os.environ.get('PG_HOST','localhost'), # uses the container if set, otherwise it runs locally
        'ATOMIC_REQUESTS': True,
    }
}

def format_db_engine(engine: str) -> str:
    return engine.split(".")[-1].capitalize()

def format_db_name(name: str) -> str:
    return name.split("/")[-1]

def set_database(stage: str = "dev") -> dict:
    db = {}
    match stage.lower():
        case "deploy":
            db = PROD_DB
        case "test":
            db = TEST_DB
        case _:
            db = DEV_DB

    return db