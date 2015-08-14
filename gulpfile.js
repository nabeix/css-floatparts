var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
gulp.task('sass', function() {
  return sass('src/', { style: 'expanded' })
    .on('error', function (err) {
      console.error('Error!', err.message);
    })
    .pipe(gulp.dest('./build'));
});

gulp.task('default', ['sass']);
