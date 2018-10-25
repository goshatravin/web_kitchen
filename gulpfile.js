'use strict';

var gulp = require('gulp'),
    gp   = require('gulp-load-plugins')(),
    browserSync = require('browser-sync').create();


gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
});


// sass

gulp.task('sass',function(){

    var onError = function(err) {
        gp.notify.onError({
                    title:    "Gulp",
                    subtitle: "Failure!",
                    message:  "Error: <%= error.message %>",
                    sound:    "Beep"
                })(err);

        this.emit('end');
    };

   return gulp.src('source/scss/*.scss')
    .pipe(gp.plumber({errorHandler: onError}))
      .pipe(gp.sourcemaps.init())
      .pipe(gp.sass({}))
      .pipe(gp.csso())
      .pipe(gp.autoprefixer({
        browsers: ['last 3 versions']

    }))
      .pipe(gp.sourcemaps.write())
      .pipe(gulp.dest('build/assets/css/'))
      .pipe(browserSync.reload({
            stream: true
      }));
      
      
      
});

// html

gulp.task('html', function() {
    return gulp.src('source/html/*.html')
      .pipe(gp.htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest('build'))
      .on('end', browserSync.reload);
  });
  
//font

gulp.task('fonts', function() {
    return gulp.src('source/fonts/*.ttf')
      .pipe(gulp.dest('build/assets/fonts'))
      .on('end', browserSync.reload);
  });


// js


gulp.task('scripts',function(){
    return gulp.src(['node_modules/jquery/dist/jquery.slim.min.js','node_modules/slick-carousel/slick/slick.js'])
      .pipe(gp.plumber())
      .pipe(gp.concat('libs.min.js'))
      .pipe(gulp.dest('build/assets/js'))
      .pipe(browserSync.reload({
            stream: true
      }));
});


gulp.task('scripts:main',function(){
    return gulp.src('source/js/main.js')
      .pipe(gp.plumber())
      .pipe(gulp.dest('build/assets/js'))
      .pipe(browserSync.reload({
            stream: true
      }));
});

// img 

gulp.task('img:dev',function(){
    return gulp.src('source/img/*.{png,jpg,gif}')
    .pipe(gulp.dest('build/assets/img/'));

})

gulp.task('img:build',function(){
    return gulp.src('source/img/*.{png,jpg,gif}')
    .pipe(gp.tinypng('TiOzhXUPEiJxKclh6OgzYeyNH5nZROn1'))
    .pipe(gulp.dest('build/assets/img'));

})

// watch

gulp.task('watch', function(){
    gulp.watch('source/html/*.html',  gulp.series('html'))
    gulp.watch('source/scss/*.scss', gulp.series('sass'))
    gulp.watch('source/js/main.js', gulp.series('scripts:main'))
    gulp.watch('source/img/*', gulp.series('img:dev'))
});


// default 

gulp.task('default',gulp.series(
    gulp.parallel('sass', 'html','fonts','scripts','scripts:main','img:dev'),
    gulp.parallel('watch','serve')

));


// img

gulp.task('build',gulp.series(
    gulp.parallel('sass', 'html','scripts','scripts:main','img:build'),
    gulp.parallel('watch','serve')

));