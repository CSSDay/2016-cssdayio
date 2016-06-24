'use strict';

var gulp = require('gulp');
var svgmin = require('gulp-svgmin');
var svgstore = require('gulp-svgstore');
var rename = require('gulp-rename');
var path = require('path');

gulp.task('svg-sprite', function() {
    return gulp.src('./svg/*.svg')
        .pipe(svgmin(file => {
            var prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix + '-',
                        minify: true
                    }
                }]
            }
        }))
        .pipe(svgstore())
        .pipe(rename('svg-sprite.svg'))
        .pipe(gulp.dest('./public/images'))
});

gulp.task('watch:svg-sprite', function () {
    return gulp.watch('./svg/*.svg', ['svg-sprite']);
});