const gulp = require('gulp'),
    shell = require('shelljs'),
    tar = require('gulp-tar'),
    gzip = require('gulp-gzip');

function clearTask(done) {
    shell.rm('-rf', 'build');

    done();
}

function copyTask1(done) {
    gulp.src([
        'README.md',
        'package.json',
        'LICENSE',
    ]).pipe(gulp.dest('build'));

    done();
}

function copyTask2(done) {
    gulp.src([
        'bin/letter-count.js'
    ]).pipe(gulp.dest('./build/bin'));

    done();
}

function copyTask3(done) {
    gulp.src([
        'lib/src/tasks.js',
        'lib/src/index.js'
    ]).pipe(gulp.dest('build/lib'));

    done();
}

function copyTask4(done) {
    gulp.src([
        'test/input.txt',
        'test/testrunner.js'
    ]).pipe(gulp.dest('./build/test'));

    done();
}

function copyTask5(done) {
    gulp.src('spec/**/*').pipe(gulp.dest('build/spec'));

    done();
}

function zipTask(done) {
    setTimeout(function () {
        gulp.src('build/**/*')
            .pipe(tar('package.tgz'))
            //.pipe(gzip())
            .pipe(gulp.dest('build'));
    }, 3000);

    done();
}

gulp.task('clear', clearTask);

gulp.task('copy1', copyTask1);
gulp.task('copy2', copyTask2);
gulp.task('copy3', copyTask3);
gulp.task('copy4', copyTask4);
gulp.task('copy5', copyTask5);

gulp.task('copy', gulp.series('copy1', 'copy2', 'copy3', 'copy4', 'copy5'));

gulp.task('do', gulp.series('clear', 'copy'));

gulp.task('zip', zipTask);

gulp.task('default', gulp.series('do', 'zip'), (done) => {
    console.log('gulp tasks done...');

    done();
});
