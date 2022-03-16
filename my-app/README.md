# My todo app

Backend is Python Rest API and frontend is a React app (create-react-app)

## Dev env setup:

``` 
docker compose -f docker-compose.dev.yml up --build
```

## Prod setup:

The prod setup uses different dockerfiles for both backend and frontend.

Backend uses gunicorn to serve the flask app. And frontend uses nginx to serve the react app.

``` 
docker compose up --build
```