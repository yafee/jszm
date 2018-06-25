var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

gulp.task('minifyjs', function () {
   gulp.src('script.js')
      .pipe(uglify())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('build'))
});
gulp.task('minifycss', function () {
   gulp.src('style.css')
      .pipe(minifycss())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('build'))
});


gulp.task('default', ['minifyjs','minifycss']);