Design system + documentation. Basé sur Bootstrap.

## Design system
La base Bootstrap provient de `node_modules/bootstrap`
Cette base est importée dans `scss/custom.scss`, avant les imports locaux — `_fonts.scss`, `_variables.scss`, etc.
Tout cela est ensuite compilé dans `dist/css/all.min.css`

La compilation est effectuée à partir de fichiers scss, via Gulp.

#### Installation
```bash
$ npm install
```

#### Compilation SCSS + JS (production)
```bash
$ npm start

> design-system@0.1.0 start /Library/WebServer/www/design-system-documentation
> gulp

[13:59:51] Using gulpfile /Library/WebServer/www/design-system-documentation/gulpfile.js
[13:59:51] Starting 'watch'...
[13:59:51] Watching scss files for modifications
[13:59:51] Finished 'watch' after 9.67 ms
[13:59:51] Starting 'clean'...
[13:59:51] Starting 'sass'...
[13:59:51] Generate CSS files Wed Feb 07 2018 13:59:51 GMT+0100 (CET)
```

## Documentation
La documentation est un site basé sur Jekyll

#### Installation
```bash
$ cd docs
$ gem install jekyll bundler
```
#### Lancement
```bash
$ bundle exec jekyll serve
# La documentation est accessible à http://localhost:4000
```

#### Style
Deux feuilles de style sont intégrées au site de documentation :
+ le style du Design System
+ le style de la documentation

Tout cela se passe dans `_includes/head.html` :
```html
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link rel="stylesheet" href="http://localhost/design-system-documentation/dist/css/all.css">
```

On intègre ensuite le style de la documentation
```html
<link rel="stylesheet" href="{{ "/assets/css/main.css" | relative_url }}">
```

Fin du fichier `head.html`
```html
<link rel="alternate" type="application/rss+xml" title="{{ site.title | escape }}" href="{{ "/feed.xml" | relative_url }}">
{% if jekyll.environment == 'production' and site.google_analytics %}
  {% include google-analytics.html %}
{% endif %}
</head>
```

Le style de la documentation est compilé à partir des fichiers .scss situés dans `assets/sass/`. Ceux-ci sont compilés dans `_site/assets/css/main.css`

## Exemples
Les exemples sont situés dans `examples/`. On peut les construire en partant de la base suivante.
```html
<html>
    <head>
        <link href="../dist/css/all.min.css" rel="stylesheet" type="text/css"/>
        <script src="../dist/js/all.min.js"></script>
    </head>
    <body>
        ...
    </body>
</html>

```

## Plus
+ [Bootstrap 4.0](http://getbootstrap.com/docs/4.0/)
+ [Gulp documentation](https://gulpjs.com)
+ [Jekyll documentation](https://jekyllrb.com/docs)
