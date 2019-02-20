var gulp = require('gulp');
var concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var livereload = require('gulp-livereload');
var sourcemaps = require('gulp-sourcemaps');


// html pug 

gulp.task('html',function(){
    return gulp.src('project/*.pug')
            .pipe(pug({pretty:true}))
            .pipe(gulp.dest('dist'))
            .pipe(livereload());
})

// concat css files
gulp.task("css",function(){
    return gulp.src(['project/css/**/*.scss'])
            .pipe(sourcemaps.init())
            .pipe(sass({outputStyle: 'compressed'},{pretty:true}))
            .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
            .pipe(concat('home.css'))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('dist/css'))
            .pipe(livereload());
})

gulp.task("js",function(){
    return gulp.src(['project/js/**/*.js'])
            .pipe(sourcemaps.init())
            .pipe(concat('main.js'))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('dist/js'))
            .pipe(livereload());
})

gulp.task("scripts",function(){
    return gulp.src(['project/healper/js/*.js'])
            .pipe(concat('libraries.js'))
            .pipe(gulp.dest('dist/js'))
})


gulp.task('watch', function() {
    require('./server.js');
    livereload.listen();
    gulp.watch('project/*.pug',gulp.series('html'));
    gulp.watch(['project/css/**/*.scss'],gulp.series('css'));
    gulp.watch(['project/js/**/*.js'],gulp.series('js'))
});