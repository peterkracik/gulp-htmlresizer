var gulp         = require('gulp'),
    resize       = require('./index')
    ;

gulp.task('rename', function () {
    return gulp
        .src('./example/*.html')
        .pipe(resize({
            'destPath' : './dist'
        }))
        .pipe(gulp.dest('', { cwd: './dist' }));
});