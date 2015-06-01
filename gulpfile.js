var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

gulp.task('js', function () {
    gulp.src(['gistter/**/*.module.js', 'gistter/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('build/gistter.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('.'))
});

gulp.task('watch', ['js'], function () {
    gulp.watch('gistter/**/*.js', ['js'])
});

gulp.task('default', ['watch']);
