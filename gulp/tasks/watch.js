var gulp = require('gulp'),
watch = require('gulp-watch');
browserSync = require('browser-sync').create();

gulp.task('watch', function() {

  browserSync.init({
    notify: false, // to prevent popups on the top right corner
    // injectChanges: true,
    server: {
      baseDir: "app"
    }
  });

// automatically refresh browser
  watch('./app/index.html', function() {
    browserSync.reload();
  });

// ** future hypothetical folders
  watch('./app/assets/styles/**/*.css', function() {
      gulp.series('styles', 'cssInject')();
  });

  // runs webpack to bundle js files
  watch('./app/assets/scripts/**/*.js', function() {
    gulp.series('scripts', 'scriptsRefresh')();
  });
});

// Every time css changed
gulp.task('cssInject', function() {
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.reload());
    //.pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', function() {
  browserSync.reload();
});
