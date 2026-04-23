'use strict';

/*----------  GULP  ----------*/

var gulp = require('gulp');

/*----------  PLUGINS  ----------*/

var htmlmin     = require('gulp-htmlmin'),
    sass        = require('gulp-sass')(require('sass')),
    autoprefixer= require('gulp-autoprefixer'),
    cleanCSS    = require('gulp-clean-css'),
    include     = require('gulp-include'),
    ngAnnotate  = require('gulp-ng-annotate'),
    uglify      = require('gulp-uglify'),
    sourcemaps  = require('gulp-sourcemaps'),
    del         = require('del'),
    browserSync = require('browser-sync').create();

/*----------  PATHS  ----------*/

var paths = {
    html:   { src: 'src/**/*.html',              dest: 'dist' },
    img:    { src: 'src/assets/img/**/*',        dest: 'dist/assets/img' },
    res:    { src: 'src/assets/res/**/*',        dest: 'dist/assets/res' },
    css:    { entry: 'src/assets/scss/style.scss',
              watch: 'src/assets/scss/**/*.scss',
              dest: 'dist/assets/css' },
    js:     { entry: 'src/assets/js/app.js',
              watch: 'src/assets/js/**/*.js',
              dest: 'dist/assets/js' }
};

/*----------  TASKS  ----------*/

function clean() {
    return del(['dist/**', '!dist']);
}

function html() {
    return gulp.src(paths.html.src)
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest(paths.html.dest));
}

function img() {
    return gulp.src(paths.img.src, { encoding: false })
        .pipe(gulp.dest(paths.img.dest));
}

function res() {
    return gulp.src(paths.res.src, { allowEmpty: true, encoding: false })
        .pipe(gulp.dest(paths.res.dest));
}

function css() {
    return gulp.src(paths.css.entry)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({ cascade: false }))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.css.dest));
}

function js() {
    return gulp.src(paths.js.entry)
        .pipe(sourcemaps.init())
        .pipe(include())
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.js.dest));
}

function reload(done) { browserSync.reload(); done(); }

function serve() {
    browserSync.init({
        server: { baseDir: 'dist', single: true },
        port: 8000,
        open: false,
        notify: false
    });

    gulp.watch(paths.html.src,  gulp.series(html, reload));
    gulp.watch(paths.img.src,   gulp.series(img, reload));
    gulp.watch(paths.res.src,   gulp.series(res, reload));
    gulp.watch(paths.css.watch, gulp.series(css, reload));
    gulp.watch(paths.js.watch,  gulp.series(js, reload));
}

var build = gulp.series(clean, gulp.parallel(res, img, html, css, js));
var dev   = gulp.series(build, serve);

/*----------  EXPORTS  ----------*/

exports.clean = clean;
exports.html  = html;
exports.img   = img;
exports.res   = res;
exports.css   = css;
exports.js    = js;
exports.build = build;
exports.dev   = dev;
exports.default = build;