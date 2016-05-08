var gulp = require('gulp'),
    tsc = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    gls = require('gulp-live-server');

gulp.task('tsc', function () {
    'use strict';
    var proj = tsc.createProject('tsconfig.json');
    gulp.src('app/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(tsc(proj))
        .js
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['tsc']);

gulp.task('serve', function () {
    var server = gls.static('./', 3000);
    server.start();
    
    gulp.watch(['./**/*.css', './**/*.js', './**/*.html'], function (file) {
        server.notify.apply(server, [file]);
    });
});

gulp.task('dev', function () {
    gulp.watch('app/**/*.ts', function () {
       gulp.start('tsc');
    });
    gulp.start('serve');
});