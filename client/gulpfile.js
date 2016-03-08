var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('default', function () {
  return browserify('./source/main.js')
    .transform(babelify)
    .bundle()
    .pipe(source('shareyourknowledge.js'))
    .pipe(gulp.dest('../server/public/js/'));
});
