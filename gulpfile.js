var gulp = require('gulp');
var webpack = require('webpack');

gulp.task('default', function() {
  return gulp.src('src/web/index.js')
    .pipe( require('./webpack.config.js') )
    .pipe(gulp.dest('./artifacts/web'));
});