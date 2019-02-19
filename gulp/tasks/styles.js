var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins');

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
    .on('error', function(errorInfo) { // if there's an error, do something
      console.log(errorInfo.toString()) // prints the error
;      this.emit('end'); // prevents it from closing gulp [watch]
    })
    .pipe(gulp.dest('./app/temp/styles'));
});
