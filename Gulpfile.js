var gulp = require('gulp');
var path = require('path');
var jade = require('gulp-jade');
var less = require('gulp-less');
 
gulp.task('compile', function() {
  gulp.src('./index.jade')
    .pipe(jade())
    .pipe(gulp.dest('.'));
});

gulp.task('less', function () {
  return gulp.src('./css/custom.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./css'));
});
