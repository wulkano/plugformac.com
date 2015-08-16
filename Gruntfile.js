var fs = require('fs');
var aws = JSON.parse(fs.readFileSync('s3_config.json', 'utf8'));

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    s3: {
      options: {
        key: aws.key,
        secret: aws.secret,
        bucket: 'www.plugformac.com',
        access: 'public-read'
      },
      dev: {
        // These options override the defaults
        options: {
          encodePaths: true,
          maxOperations: 20
        },
        // Files to be uploaded.
        upload: [
          {
            src: 'index.html',
            dest: 'index.html',
            gzip: true
          },
          {
            src: 'plug.js',
            dest: 'plug.js',
            gzip: true
          },
          {
            src: 'plug.css',
            dest: 'plug.css',
            gzip: true
          },
          {
            src: 'plug-responsive-override.css',
            dest: 'plug-responsive-override.css',
            gzip: true
          },
          {
            src: 'robots.txt',
            dest: 'robots.txt',
          },
          {
            src: 'favicon.ico',
            dest: 'favicon.ico',
          },
          {
            src: 'images/*.png',
            dest: 'images/'
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-s3');

  grunt.registerTask('default', ['s3']);

};
