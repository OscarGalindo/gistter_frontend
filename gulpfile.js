var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('js', function () {
    gulp.src(['gistter/**/*.module.js', 'gistter/**/*.js'])
        .pipe(concat('build/gistter.js'))
        .pipe(gulp.dest('.'))
});

gulp.task('watch', ['js'], function () {
    gulp.watch('gistter/**/*.js', ['js'])
});
