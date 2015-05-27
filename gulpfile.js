var gulp = require('gulp');
var concat = require('gulp-concat');
var notify = require('gulp-notify');

gulp.task('js', function () {
    gulp.src(['gistter/**/*.module.js', 'gistter/**/*.js'])
        .pipe(concat('build/gistter.js'))
        .pipe(gulp.dest('.'))
        .pipe(notify('Compilado JS'))
});

gulp.task('watch', ['js'], function () {
    gulp.watch('gistter/**/*.js', ['js'])
});

gulp.task('default', ['watch']);
