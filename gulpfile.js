var gulp = require('gulp'),
    less = require('gulp-less'),
    browserSync = require('browser-sync').create(),
    minifycss = require('gulp-minify-css'),
    reload = browserSync.reload;


gulp.task('less', function(){
    gulp.src('src/less/*.less')
        .pipe(less())
        .pipe(minifycss())
        .pipe(gulp.dest('src/static/css'))
        .pipe(reload({stream:true}));
});
gulp.task('browser-sync',['less'],function(){
    browserSync.init({
            proxy: 'http://localhost:63342/K-article/views/demo.html',
            baseDir: './',
            port: 62342,
            uiPort: 63343
    });
    gulp.watch('src/less/*.less',['less']);
    gulp.watch('../views/*.html').on('change',reload);
});
gulp.task('default',['browser-sync'], function(){
    console.log('Mission Complete');
});