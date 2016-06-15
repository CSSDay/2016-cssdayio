'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var del = require('del');

gulp.task('clean:css', function (cb) {
    del('./public/css/*');
    cb();
});

gulp.task('sass', ['clean:css'], function () {
    return gulp.src('./scss/*.scss')
        .pipe(sass({
            includePaths: ['scss']
        }).on('error', sass.logError))
        .pipe(prefix(['last 10 versions', '> 1%', 'ie 8']))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('watch:sass', function () {
    return gulp.watch('./scss/**/*', ['sass']);
});
