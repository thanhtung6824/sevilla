const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: './',
            index: './html/index.html'
        }
    });
});

gulp.task('sass', function() {
    return gulp.src("./assets/scss/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./assets/css"))
        .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'browser-sync'], function() {
    gulp.watch("./assets/scss/**/*.scss", ['sass']);
    gulp.watch("./assets/scss/**/*.scss").on('change', browserSync.reload);
    gulp.watch("./html/*.html").on('change', browserSync.reload);
});