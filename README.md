# Blog

## React|Vite + ReactRedux|ReduxJS/Toolkit + Axios + Docker(nginx)

Clone the repo, create an `.env` and add the following variables:

```bash
    DJANGO_SETTINGS_MODULE=backend.settings.prod # or backend.settings.dev for development build
    DJANGO_SECRET_KEY="<insert your key here>"

```

to build and start the containers in detached mode use `make dup d` and `make ddown` to stop the containers.

You can find a list of useful commands using `make help`

### To add

- React Router
- Auth
