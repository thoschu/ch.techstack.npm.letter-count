const gulp = require('gulp');

gulp.task('default', defaultTask);

function defaultTask(done) {
    gulp.src([
        './README.md',
        './package.json',
        './npm-shrinkwrap.json',
        'LICENSE',
        'gulpfile.js',
        '.npmignore',
        '.gitignore',
        './test/*',
        './spec/**/*',
        './lib'
    ]).pipe(gulp.dest('./dest'));

    done();
};