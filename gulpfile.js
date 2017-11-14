var gulp = require('gulp');
var webpack = require('webpack-stream');

gulp.task('default', function() {
  return gulp.src('src/web/App.js')
    .pipe( webpack(require('./webpack.config.js')) )
    .pipe(gulp.dest('./artifacts/web'));
});