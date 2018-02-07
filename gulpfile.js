var gulp = require('gulp');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var inline = require('gulp-inline-fonts');
var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del'),
    util = require("gulp-util"),//https://github.com/gulpjs/gulp-util
    sass = require("gulp-sass"),//https://www.npmjs.org/package/gulp-sass
    autoprefixer = require('gulp-autoprefixer'),//https://www.npmjs.org/package/gulp-autoprefixer
    minifycss = require('gulp-minify-css'),//https://www.npmjs.org/package/gulp-minify-css
    rename = require('gulp-rename'),//https://www.npmjs.org/package/gulp-rename
    flatten = require('gulp-flatten'),
    merge  = require('merge-stream'),
	  log = util.log;
var plumber = require('gulp-plumber');

// Path for gulp compilation
var paths = {
  scripts: ['./js/**/*.js'],
  sass: ['./scss/**/*.scss'],
};
var fontStyles = ['mono', 'sans', 'serif']; // With this, fonts task grab fonts files in paths.fonts like this : mono-400.woff, sans-200.woff, sans-400/woff, etc.

// Not all tasks need to use streams
// A gulpfile is just another node program and you can use any package available on npm
gulp.task('clean', function() {
  // You can use multiple globbing patterns as you would with `gulp.src`
  return del(['build']);
});

gulp.task("sass", function(){
	log("Generate CSS files " + (new Date()).toString());
    gulp.src(paths.sass)
      .pipe(plumber())
      .pipe(sass({ style: 'expanded' }))
      			.pipe(autoprefixer("last 3 version","safari 5", "ie 8", "ie 9"))
      .pipe(concat('all.css'))
      .pipe(gulp.dest("./dist/css"))
      .pipe(rename({suffix: '.min'}))
      .pipe(minifycss())
      .pipe(gulp.dest('./dist/css'));
});

gulp.task('scripts', ['clean'], function() {
  // Minify and copy all JavaScript (except vendor scripts)
  // with sourcemaps all the way down
  return gulp.src(paths.scripts)
    .pipe(plumber())
    .pipe(sourcemaps.init())
      // .pipe(coffee())
      .pipe(uglify())
      .pipe(concat('all.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/js'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  log("Watching scss files for modifications");
  gulp.watch(paths.sass, ["sass"]);
  gulp.watch(paths.scripts, ['scripts']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'scripts', 'sass']);
