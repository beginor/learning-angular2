var gulp = require('gulp'),
    tsc = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps');

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
    console.log(tsResult);
    return tsResult.js.pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist'));
});

gulp.task('dev', function () {
    gulp.watch('app/**/*.ts', function () {
       gulp.start('ts:app');
    });
});