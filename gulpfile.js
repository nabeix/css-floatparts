var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var pleeease = require("gulp-pleeease");

gulp.task('sass', function() {
  return sass('src/', { style: 'expanded' })
    .on('error', function (err) {
      console.error('Error!', err.message);
    })
    .pipe(pleeease({
      minifier: false
    }))
    .pipe(gulp.dest('./build'));
});

gulp.task('default', ['sass']);
