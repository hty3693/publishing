

var gulp = require('gulp');
var express = require('express');
var browserSync = require('browser-sync').create();
var gsass = require('gulp-sass');
var gutil = require('gulp-util');

let server = null;

gulp.task('server', function () {
    //server on port 8080
    server = express();
    server.use(express.static(__dirname + '/'));
    server.listen(8080);
    //browser Sync
    browserSync.init({
       proxy : 'localhost:8080'
    });
});


function reload() {
    if(server) {
        return browserSync.reload({
            stream: true
        });
    }
    return gulp.noop();
}


// gulp.task('reload', function () {
//    gulp.src(['./*', './js/*', './css/*'])
//        .pipe(reload());
// });

gulp.task('sass-reload', function () {
    gulp.src('./scss/*.scss')
        .pipe(gsass())
        .pipe(gulp.dest('./css'))
        .pipe(reload());
});



gulp.task('watch', function () {

    gulp.watch(['./js/*.js']).on('change',browserSync.reload);
    gulp.watch('./css/*.css').on('change',browserSync.reload);
    gulp.watch('./*.html').on('change',browserSync.reload);
    gulp.watch('./scss/*', ['sass-reload']);
});

gulp.task('default',['server', 'watch']);