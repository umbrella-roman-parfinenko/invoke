'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglifyjs'),
    cssnano     = require('gulp-cssnano'),
    rename      = require('gulp-rename'),
    del         = require('del'),
    cache       = require('gulp-cache');



gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

/* Default gulp ctask*/
gulp.task('default', ['watch']);

/* Task for cleaning gulp cache*/
gulp.task('clear', function () {
    return cache.clearAll();
});

/* Minify js files*/
gulp.task('scripts', function() {
    return gulp.src([
        'app/libs/jquery/dist/jquery.min.js'
    ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'));
});

/* Minify style files*/
gulp.task('css-libs', [], function() {
    return gulp.src('app/css/libs.css')
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app/css'));
});

gulp.task('watch', ['browser-sync', 'css-libs', 'scripts'], function() {
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/inbox/*.html', browserSync.reload);
    gulp.watch('app/css/*.css', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});

/* Delete dist directory before building the project*/
gulp.task('clean', function() {
    return del.sync('dist');
});

/* Build the project*/
gulp.task('build', ['scripts'], function() {

    var buildCss = gulp.src([
        'app/css/app.css',
        'app/css/libs.min.css'
    ])
        .pipe(gulp.dest('dist/css'));

    var buildRoute = gulp.src('app/invoke/**/*')
        .pipe(gulp.dest('dist/invoke'));

    var buildJs = gulp.src('app/js/**/*')
        .pipe(gulp.dest('dist/js'));

    var buildHtml = gulp.src('app/*.html')
        .pipe(gulp.dest('dist'));
});