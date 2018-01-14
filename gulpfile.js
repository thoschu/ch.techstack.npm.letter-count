const gulp = require('gulp'),
    shell = require('shelljs');


const tar = require('gulp-tar');
const gzip = require('gulp-gzip');

gulp.task('default', defaultTask);

function defaultTask(done) {
    shell.rm('-rf', 'build');

    gulp.src([
        'README.md',
        'package.json',
        'npm-shrinkwrap.json',
        'LICENSE',
    ]).pipe(gulp.dest('./build'));

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

    gulp.src('build/*')
        .pipe(tar('letter-count.tgz'))
        //.pipe(gzip())
        .pipe(gulp.dest('build'));

    done();
};



