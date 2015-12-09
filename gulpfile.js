var gulp = require('gulp'),
    less = require('gulp-less'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync').create(),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    reload = browserSync.reload;


gulp.task('less', function(){
    gulp.src('src/less/*.less')
        .pipe(less())
        .pipe(minifycss())
        .pipe(gulp.dest('src/static/css'))
        .pipe(reload({stream:true}));
});
gulp.task('script', function(){
    gulp.src('src/js/karticle.js')
        .pipe(rename({suffix:'.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('src/static/js'));
});
gulp.task('browser-sync',['script','less'],function(){
    browserSync.init({
            proxy: 'http://localhost:63342/K-article/views/demo.html',
            baseDir: './',
            port: 63342,
            uiPort: 63343
    });
    gulp.watch('src/less/*.less',['less']);
    gulp.watch('src/js/*.js',['script']);
    gulp.watch('src/static/js/*.js').on('change',reload);
    gulp.watch('views/*.html').on('change',reload);
});
gulp.task('default',['browser-sync'], function(){
    console.log('Mission Complete');
});