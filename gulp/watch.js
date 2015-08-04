'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

function isOnlyChange(event) {
  return event.type === 'changed';
}

gulp.task('watch', ['scripts:watch', 'inject'], function () {

  gulp.watch([path.join(conf.paths.src, '/index.html'), 'bower.json'], ['inject']);

  gulp.watch([
    path.join(conf.paths.src, '/app/**/*.css'),
    path.join(conf.paths.src, '/app/**/*.scss'),
    path.join(conf.paths.src, '/styles/{,*/}*.scss'),
    path.join('!' + conf.paths.src, '/styles/login/**/*.scss')
  ], function(event) {
    if(isOnlyChange(event)) {
      gulp.start('styles');
    } else {
      gulp.start('inject');
    }
  });


  gulp.watch([
    path.join(conf.paths.src, '/app/**/*.html'),
    path.join(conf.paths.src, '/app/**/*.tpl.html'),
    path.join('!'+conf.paths.src, '/app/login/**/*.html')
  ], function(event) {
    browserSync.reload(event.path);
  });
});

gulp.task('watch:login', ['login:scripts:watch','inject:login'], function () {
  gulp.watch([path.join(conf.paths.src, '/login.html'), conf.paths.login+'/bower.json'], ['inject:login']);

  gulp.watch([
    path.join(conf.paths.src, '/styles/login/**/*.scss')
  ], function(event) {
    if(isOnlyChange(event)) {
      gulp.start("styles:login");
    } else {
      gulp.start('inject:login');
    }
  });

  gulp.watch([
    path.join(conf.paths.src, '/app/login/**/*.html')
  ], function(event) {
    browserSync.reload(event.path);
  });
});
