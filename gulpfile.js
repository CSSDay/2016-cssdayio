'use strict';

var gulp = require('gulp');
var sass = require('./gulp/sass');
var server = require('./gulp/server');
var deploy = require('./gulp/deploy');

gulp.task('default', ['sass', 'watch:sass', 'server']);