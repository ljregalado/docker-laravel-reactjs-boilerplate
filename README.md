# Nginx, MySQL, PHP for Docker

## How to use

1. Copy and customize the configuration options

```
cp .env.example .env
```

2. Build the image

```bash
$ docker-compose build;
```

3. Run the image

```bash
$ docker-compose up -d;
```

4. Install the dependencies with composer

```bash
$ cp laravel/.env.example laravel/.env
$ docker-compose exec app composer install
$ docker-compose exec app composer dumpautoload -o
$ docker-compose exec app php artisan key:generate
```

7. Clear the config and generate the cache

```bash
$ docker-compose exec app php artisan config:clear
$ docker-compose exec app php artisan config:cache
```

8. Install all the javascript packages which are required for our project

```bash
$ docker-compose run --rm npm install
```

9. Compile the assets

```bash
$ docker-compose run --rm npm run dev

# Or, to watch the changes done in the assets folder and recompile automatically
$ docker-compose run --rm npm run watch
```

10. Now, you can point your browser to localhost, http://localhost:8000/

Thats it. The boilerplate is running.

Enjoy.
