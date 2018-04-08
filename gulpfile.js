const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    pug = require('gulp-pug');

let challenge = 'dailyui1';

// PUG
gulp.task('pug', ()=> {
    gulp.src(`./dev/pug/${challenge}.pug`)
        .pipe(pug())
        .pipe(gulp.dest('./dist/'));
});

// SASS
gulp.task('sass', ()=>{
    gulp.src(`./dev/scss/${challenge}.scss`)
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer({
            versions: 'last 2 browsers'
        }))
        .pipe(gulp.dest('./dist/css/'));
});

// JS
gulp.task('js', ()=> {
    gulp.src(`./dev/js/${challenge}.js`)
        .pipe(gulp.dest('./dist/js'));
});
