'use strict';

module.exports = function concurrent(grunt){
  grunt.loadNpmTasks('grunt-concurrent');

  return {
    dev: {
      tasks: ['nodemon', 'watch'],
      options: {
        logConcurrentOutput: true
      }
    }
  }
};