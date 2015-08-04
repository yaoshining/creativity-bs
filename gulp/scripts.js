'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

function webpack(watch, filename,sourceDir, destDir,callback) {
  var webpackOptions = {
    watch: watch,
    module: {
      preLoaders: [{ test: /\.js$/, exclude: /node_modules/, loader: 'jshint-loader'}],
      loaders: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}]
    },
    output: { filename: filename}
  };

  if(watch) {
    webpackOptions.devtool = 'inline-source-map';
  }

  var webpackChangeHandler = function(err, stats) {
    if(err) {
      conf.errorHandler('Webpack')(err);
    }
    $.util.log(stats.toString({
      colors: $.util.colors.supportsColor,
      chunks: false,
      hash: false,
      version: false
    }));
    browserSync.reload();
    if(watch) {
      watch = false;
      callback();
    }
  };

  return gulp.src(path.join(conf.paths.src, sourceDir+'/'+filename))
    .pipe($.webpack(webpackOptions, null, webpackChangeHandler))
    .pipe(gulp.dest(path.join(conf.paths.tmp, destDir)));
}

gulp.task('scripts', function () {
  return webpack(false,'index.module.js','/app','/serve/app');
});

gulp.task('scripts:watch', ['scripts'], function (callback) {
  return webpack(true, 'index.module.js','/app','/serve/app', callback);
});

gulp.task('login:scripts', function () {
  return webpack(false,'login.js','/app/login','/serve/app/login');
});

gulp.task('login:scripts:watch', ['login:scripts'], function (callback) {
  return webpack(true, 'login.js','/app/login','/serve/app/login', callback);
});
