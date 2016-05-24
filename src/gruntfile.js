'use strict';
module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['js/jquery-1.12.3.min.js', 'js/bootstrap.min.js', 'js/main.js'],
        dest: 'tmp/bundle.js',
      },
    },
    uglify: {
      my_target: {
        files: {
          '../public/js/bundle.min.js': ['tmp/bundle.js']
        }
      }
    },
    sass: {
      compile: {
        files: {
          '../public/css/bundle.css': 'scss/main.scss',
        }
      }
    },
		clean: {

			  folder: ['tmp/']

		}
  });

  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['clean', 'sass', 'concat', 'uglify', 'clean']);

};
