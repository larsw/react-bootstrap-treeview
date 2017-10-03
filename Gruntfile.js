module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'), // the package file to use

    react: {
      single_file_output: {
        files: {
          'public/js/react-bootstrap-treeview.js': 'src/react-bootstrap-treeview.jsx'
        }
      }
    },

    watch: {
      files: ['src/**'],
      tasks: ['default']
    },

    babel: {
      dist: {
        files: {
          'dist/index.js': 'src/index.js'
        }
      }
    },
    copy: {
      main: {
        files: [
          { expand: true, cwd: 'src/', src: '*.css', dest: 'dist/' }
        ]
      }
    }
  })

  // load up your plugins
  grunt.loadNpmTasks('grunt-babel')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-copy')

  // register one or more task lists (you should ALWAYS have a "default" task list)
  grunt.registerTask('build', ['babel', 'copy'])
  grunt.registerTask('default', ['build', 'watch'])
}
