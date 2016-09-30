'use strict';

var gulp      = require('gulp');
var connect   = require('gulp-connect');
var sass      = require('gulp-sass');
var prefix    = require('gulp-autoprefixer');
var scsslint  = require('gulp-scss-lint');
var csscomb   = require('gulp-csscomb');
var path      = require('../paths.js');
var error     = require('../error-handler.js');

// == Task SASS
// ============

gulp.task('sass', function() {
  return gulp.src(path.to.sass.main)
    .pipe(sass({
      includePaths: path.to.sass.includes,
      outputStyle: 'expanded',
      sourceComments: true
    }))
    .pipe(prefix('last 2 version', { cascade: true }))
    .on('error', error.handler)
    .pipe(gulp.dest('./.tmp/css'))
    .pipe(csscomb())
    .on('error', error.handler)
    .pipe(gulp.dest('./.tmp/css'))
    .on('error', error.handler)
    .pipe(connect.reload());
});
