'use strict';

/*
 Including Gulp and plugins
 */
var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var jade = require('gulp-jade');
var beautify = require('gulp-jsbeautifier');
var nano = require('gulp-cssnano');
var rename = require('gulp-rename');
var postcss = require('gulp-postcss');
var mqpacker = require('css-mqpacker');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

/*
 Directory variables
 */
var lessSrcDir = './client/src/less/';
var jadeSrcDir = './client/src/jade/';
var assetsDir = './client/public/';
var compiledStylesDir = assetsDir + 'stylesheets/';
var libsDir = './client/libs/';

/*
 Compiling less, using sourcemaps
 */
gulp.task('less', function () {
    gulp.src([
        lessSrcDir + 'style.less'
    ])
        .pipe(sourcemaps.init())
        .pipe(less({
          outputStyle: 'expanded'
      }))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(compiledStylesDir));
});

/*
 Creating a styles build file consisted of all files specified in gulp.src
 */

gulp.task('build:css', function () {
    return gulp.src([
        libsDir + '*.css'
    ])
        .pipe(concat('build.css'))
        .pipe(postcss([mqpacker]))
        .pipe(nano({
            safe: true
        }))
        .pipe(rename('build.min.css'))
        .pipe(gulp.dest(assetsDir + 'stylesheets'));
});


/*
 Building compile jade, beautifying the output
 */
gulp.task('jade', function () {
    gulp.src(
        [
          jadeSrcDir + 'next-distro-fe/index.jade',
          jadeSrcDir + 'next-distro-fe/test.jade',
        ]
    )
        .pipe(jade())
        .pipe(beautify({
            html: {
                indent_char: ' ',
                indent_size: 4,
                selector_separator_newline: true,
                preserveNewlines: false,
                indent_inner_html: true,
                unformatted: ['span'],
                extra_liners: ['section', 'footer'],
                wrap_line_length: 0
            }
        }))
        .pipe(gulp.dest('./client/public/'));
});

/*
 Watching src files changes and running appropriate commands to compile them
 */
gulp.task('watch', function () {
    gulp.watch([
        lessSrcDir + '*.less'
    ], ['less']);
    gulp.watch([
      jadeSrcDir + '*.jade',
      jadeSrcDir + '**.jade',
      jadeSrcDir + '**/**/*.jade'
    ], ['jade']);
});

/*
 Creating a JavaScript build consisted of all the files specified in gulp.src
 */
gulp.task('build:scripts', function () {
    return gulp.src([
        libsDir + 'jquery-2.1.1.min.js'
    ])
        .pipe(concat('build.js'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(assetsDir + 'build'));
});

/*
 Optimising the images
 */
gulp.task('imagemin', function () {
    return gulp.src('./client/public/images/**/*')
        .pipe(imagemin({
            progressive: true,
            use: [pngquant()]
        }))
        .pipe(gulp.dest('./client/public/images'));
});