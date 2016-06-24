'use strict';

var gulp = require('gulp');
var sass = require('./gulp/sass');
var server = require('./gulp/server');
var deploy = require('./gulp/deploy');
var svgSprite = require('./gulp/svg-sprite');

gulp.task('default', ['sass', 'svg-sprite', 'watch:sass', 'watch:svg-sprite', 'server']);