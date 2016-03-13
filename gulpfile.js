var gulp = require('gulp'),
    tsc = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    gls = require('gulp-live-server');

gulp.task('ts:app', function () {
    var tsResult = gulp.src('app/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(tsc({
            "target": "es5",
            "module": "system",
            "moduleResolution": "node",
            "sourceMap": true,
            "inlineSourceMap": false,
            "emitDecoratorMetadata": true,
            "experimentalDecorators": true,
            "removeComments": false,
            "noImplicitAny": false
        }));
    //console.log(tsResult);
    return tsResult.js.pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist'));
});

gulp.task('serve', function () {
    var server = gls.static('./', 3000);
    server.start();
    
    gulp.watch(['./**/*.css', './**/*.js', './**/*.html'], function (file) {
        server.notify.apply(server, [file]);
    });
});

gulp.task('dev', function () {
    gulp.watch('app/**/*.ts', function () {
       gulp.start('ts:app');
    });
    gulp.start('serve');
});