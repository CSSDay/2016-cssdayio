'use strict';

var gulp = require('gulp');
var serve = require('gulp-serve');

gulp.task('server', serve({
    root: ['./public'],
    port: 8000
}));