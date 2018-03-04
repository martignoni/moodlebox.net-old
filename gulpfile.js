var gulp      = require('gulp'),
    concat    = require('gulp-concat'),
    minify    = require('gulp-clean-css'),
    uglify    = require('gulp-uglify'),
    beautify  = require('gulp-html-prettify'),
    trim      = require('gulp-remove-empty-lines'),
    rename    = require('gulp-rename-plus'),
    gulpif    = require('gulp-if'),
    exec      = require('child_process').exec,
    del       = require('del');

gulp.task('default', [ 'reset', 'css', 'js', 'hugo', 'html', 'clean' ]);

gulp.task('reset', function(){
  return del([
      'public/**/*',
      'static/css/**/*',
      'static/js/**/*'
  ]);
});

gulp.task('css', function(){
  return gulp.src('./static-src/css/**/*.css')
//     .pipe(concat('main.css'))
    .pipe(gulpif(file => !(file.path.includes('.min.css')), rename({suffix:'min.css'})))
    .pipe(minify())
    .pipe(gulp.dest('static/css'))
});

gulp.task('js', function(){
  return gulp.src('./static-src/js/**/*.js')
//     .pipe(concat('main.js'))
//     .pipe(uglify())
    .pipe(gulp.dest('static/js'))
});

gulp.task('hugo', ['reset', 'css', 'js'], function (fetch) {
  return exec('hugo -b https://moodlebox.net/', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    fetch(err);
  });
})

gulp.task('html', ['hugo'], function() {
  return gulp.src('public/**/*.html')
    .pipe(beautify({indent_char: ' ', indent_size: 2}))
    .pipe(trim())
    .pipe(gulp.dest('public'))
});

gulp.task('clean', ['html'], function () {
  return del([
//       'static/css/**/*',
//       'static/js/**/*',
      ''
  ]);
});
