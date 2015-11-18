'use strict';

module.exports = function watch(grunt){
  grunt.loadNpmTasks('grunt-contrib-watch');

  return {
    gruntfile: {
      files: 'Gruntfile.js',
      tasks: ['jshint:gruntfile']
    },
    src: {
      files: ['./modules/**/*.js', './modules/**/*.jsx', 'css/**/*.scss'],
      tasks: ['browserify']
    }
  }
};