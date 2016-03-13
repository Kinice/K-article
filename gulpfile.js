var gulp = require('gulp'),
    less = require('gulp-less'),
    uglify = require('gulp-uglify'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename');


gulp.task('less', function(){
    gulp.src('src/less/*.less')
        .pipe(less())
        .pipe(minifycss())
        .pipe(gulp.dest('src/static/css'));
});
gulp.task('script', function(){
    gulp.src('src/js/karticle.js')
        .pipe(rename({suffix:'.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('src/static/js'));
});
gulp.task('default',['less','script'], function(){
    console.log('Mission Complete');
});
