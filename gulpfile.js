const gulp = require('gulp'),
    shell = require('shelljs'),

    tar = require('gulp-tar'),
    gzip = require('gulp-gzip');

function clearTask(done) {
    shell.rm('-rf', 'build');

    done();
};

function copyTask(done) {
    gulp.src([
        'README.md',
        'package.json',
        'npm-shrinkwrap.json',
        'LICENSE',
    ]).pipe(gulp.dest('build'));

    gulp.src([
        'bin/letter-count',
        'bin/letter-count.js'
    ]).pipe(gulp.dest('./build/bin'));

    gulp.src('lib/app.js').pipe(gulp.dest('build/lib'));

    gulp.src([
        'test/input.txt',
        'test/testrunner.js'
    ]).pipe(gulp.dest('./build/test'));

    gulp.src('spec/**/*').pipe(gulp.dest('build/spec'));

    done();
};

function zipTask(done) {
    gulp.src('build/*')
        .pipe(tar('letter-count.tgz'))
        //.pipe(gzip())
        .pipe(gulp.dest('build'));

    done();
};

gulp.task('clear', clearTask);
gulp.task('copy', copyTask);
gulp.task('zip', zipTask);

gulp.task('default', gulp.series( 'zip', function (done) {
    // do more stuff
    done();
}));