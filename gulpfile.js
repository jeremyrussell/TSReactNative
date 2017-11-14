var gulp = require('gulp');
var webpack = require('webpack-stream');
var del = require('del');
var ts = require('gulp-typescript');


gulp.task('default', function() {
  return gulp.src('src/web/App.js')
    .pipe( webpack(require('./webpack.config.js')) )
    .pipe(gulp.dest('./artifacts/web'));
});

gulp.task('clean-native', function() {
    return del('lib');
});

// gulp.task('compile-native', function() {
//     var tsProject = ts.createProject('tsconfig.json');
//     return tsProject.src() // or tsProject.src()
//         .pipe(tsProject());
// });

