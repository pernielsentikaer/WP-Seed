'use strict';

var
gulp        = require('gulp'),
gulpif      = require('gulp-if'),
watch       = require('gulp-watch'),
sass        = require('gulp-sass'),
cleanCSS    = require('gulp-clean-css')
;

//
// TASKS
// -------------------------------------------------------------

gulp.task('plugins', function() {
  gulp.src('plugins/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('../wp-content/plugins'));
  gulp.src(['plugins/**/*', '!plugins/**/*.scss', '!plugins/**/.anchor'])
    .pipe(gulp.dest('../wp-content/plugins'));
})
gulp.task('themes', function() {
  gulp.src('themes/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('../wp-content/themes'));
  gulp.src(['themes/**/*', '!themes/**/*.scss', '!themes/**/.anchor'])
    .pipe(gulp.dest('../wp-content/themes'));
})

gulp.task('watch-only', function() {
  gulp.watch('plugins/**/*', ['plugins']);
  gulp.watch('themes/**/*', ['themes']);
});

gulp.task('watch', ['plugins', 'themes', 'watch-only'])
gulp.task('default', ['plugins', 'themes'])