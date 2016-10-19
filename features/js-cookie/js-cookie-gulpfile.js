'use strict';

module.exports = function($allonsy, $gulp) {
  var sourcemaps = require('gulp-sourcemaps'),
      uglify = require('gulp-uglify'),
      rename = require('gulp-rename');

  $gulp.task('js-cookie', function(done) {

    $gulp
      .src('./node_modules/js-cookie/src/js.cookie.js')
      .pipe($gulp.dist('vendor'))
      .pipe(sourcemaps.init())
      .pipe(uglify().on('error', function(err) {
        $allonsy.logWarning('allons-y-js-cookie', 'js-cookie:uglify', {
          error: err
        });

        this.emit('end');
      }))
      .pipe(rename({
        extname: '.min.js'
      }))
      .pipe(sourcemaps.write('./'))
      .pipe($gulp.dist('vendor'))
      .on('end', done);
  });

  return 'js-cookie';
};
