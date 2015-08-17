var fs               = require('fs');
var gulp             = require('gulp');
var watch            = require('gulp-watch');
var sass             = require('gulp-sass');
var sourcemaps       = require('gulp-sourcemaps');
var webserver        = require('gulp-webserver');
var awspublish       = require('gulp-awspublish');
var awspublishRouter = require("gulp-awspublish-router");
var browserify       = require('browserify');
var source           = require('vinyl-source-stream');
var buffer           = require('vinyl-buffer');
var uglify           = require('gulp-uglify');
var gutil            = require('gulp-util');
var rename           = require('gulp-rename');
var addsrc           = require('gulp-add-src');
var concat           = require('gulp-concat');

gulp.task('watch', function() {
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./js/**/*.js', ['js']);
});

gulp.task('sass', function () {
  gulp.src('./sass/*.scss')
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.init())
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./public/'));
});

gulp.task('js', function() {
  var bundler = browserify({
    entries: ['./js/app.js'],
    debug: true,
  });

  var bundle = function() {
    return bundler
      .bundle()
      .on('error', gutil.log)
      .pipe(source('app.js'))
      .pipe(buffer())
      .pipe(addsrc('./js/vendor/*.js'))  
      .pipe(concat('plug.min.js'))
      .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        .pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./public/'));
  };

  return bundle();
});

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

gulp.task('publish', function() {
  var credentials = JSON.parse(fs.readFileSync('aws-credentials.json', 'utf8'));

  // create a new publisher using S3 options
  // http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#constructor-property
  var publisher = awspublish.create({
    params: {
      Bucket: 'www.plugformac.com'
    },
    accessKeyId: credentials.accessKeyId,
    secretAccessKey: credentials.secretAccessKey
  });

  // define custom headers
  var headers = {
    'Cache-Control': 'max-age=315360000, no-transform, public'
  };

  gulp.src("**/*", { cwd: "./public/" })
    .pipe(awspublishRouter({
      cache: {
        // cache for 5 minutes by default 
        cacheTime: 300
      },

      // todo
      routes: {
      }
    }))
    .pipe(publisher.publish(headers))
    .pipe(publisher.cache())
    .pipe(awspublish.reporter())
});

gulp.task('build', ['sass', 'js']);
gulp.task('default', ['sass', 'js', 'watch', 'webserver']);
