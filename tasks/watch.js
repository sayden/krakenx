'use strict';

module.exports = function watch(grunt){
  grunt.loadNpmTasks('grunt-contrib-watch');

  return {
    gruntfile: {
      files: 'Gruntfile.js',
      tasks: ['jshint:gruntfile']
    },
    src: {
      files: ['./public/**/*.js', './public/**/*.jsx', 'css/**/*.scss'],
      tasks: ['browserify']
    }
  }
};