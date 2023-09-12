// webpack.mix.js

let mix = require('laravel-mix');

mix
.js('src/scripts/main.js', 'dist').setPublicPath('dist')
.sass('src/styles/main.scss', 'dist').setPublicPath('dist')