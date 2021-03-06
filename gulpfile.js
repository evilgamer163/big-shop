'use strict';

const gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync');
const { reload } = require('browser-sync');

const convertCSS = (done) => {
    gulp.src('./scss/**/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'compressed'
        })).on('error', console.error.bind(console))
        .pipe(autoprefixer({
            browsers: ['last 2 version'],
            cascade: false
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./css/'))
        .pipe(browserSync.stream());

        done();
};

const startServer = (done) => {
    browserSync.init({
        server: {
            baseDir: './'
        },
        port: 3000
    });

    done();
};

const reloadPage = (done) => {
    browserSync.reload();
    done();
};

const watchFiles = () => {
    gulp.watch('./scss/**/*.scss', convertCSS);
    gulp.watch('./**/*.html', reloadPage);
    gulp.watch('./js/**/*.js', reloadPage);
};

gulp.task('default', gulp.parallel(startServer, watchFiles));