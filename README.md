# Blog

## React|Vite + ReactRedux|ReduxJS/Toolkit + Axios + Docker(nginx)

Clone the repo, create an `.env` and add the following variables:

```bash
    DJANGO_ALLOWED_HOSTS=*
    DJANGO_SECRET_KEY=*
    DJANGO_DEBUG=0 # 0 for False, 1 for True
    CORS_ALLOWED_ORIGINS=http://localhost:5173 http://localhost:8000 http://api # add your own domains
    CSRF_TRUSTED_ORIGINS=http://localhost:5173 http://localhost:8000 http://api # add your own domains
```

to build and start the containers in detached mode use `make dup d` and `make ddown` to stop the containers.

You can find a list of useful commands using `make help`

### To add

- React Router
- Auth
