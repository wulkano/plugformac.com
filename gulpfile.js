var gulp       = require('gulp');
var watch      = require('gulp-watch');
var sass       = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var webserver  = require('gulp-webserver');
var awspublish = require('gulp-awspublish');
var merge      = require('merge-stream');
var rename     = require("gulp-rename");
var fs         = require('fs');


gulp.task('watch', function() {
  gulp.watch('./**/*.scss', ['sass']);
});

gulp.task('sass', function () {
  gulp.src('./sass/*.scss')
    .pipe(sourcemaps.init())
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./'));
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

  var gzip = gulp.src(['./*.html', './*.css', './*.css.map']).pipe(awspublish.gzip());
  var plain = gulp.src(['./images/*.png']);

  return merge(gzip, plain)
    .pipe(rename(function (path) {
      path.dirname += '/plug2sitetest';
    }))

    // publisher will add Content-Length, Content-Type and headers specified above
    // If not specified it will set x-amz-acl to public-read by default
    .pipe(publisher.publish(headers))

    // create a cache file to speed up consecutive uploads
    .pipe(publisher.cache())

     // print upload updates to console
    .pipe(awspublish.reporter());
});

gulp.task('build', ['sass']);
gulp.task('default', ['sass', 'watch', 'webserver']);
