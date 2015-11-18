module.exports = function nodemon(grunt){
  // Load task
  grunt.loadNpmTasks('grunt-nodemon');

  return {
    dev: {
      script: './server.js',
      ignore: ['node_modules/**'],
      ext: '.js, .jsx',
      callback: function (nodemon) {
        nodemon.on('log', function (event) {
          console.log(event.colour);
        });
      },
      watch:['./router/*','./modules/*']
    }
  }
};