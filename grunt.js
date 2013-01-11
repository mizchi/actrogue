module.exports = function( grunt ) {
  grunt.loadNpmTasks('grunt-coffee');

  grunt.initConfig({
    coffee: {
      app: {
        src: ["src/**/*.coffee"],
        dest: "lib",
        options: {
          preserve_dirs: true,
          base_path: 'src'
        }
      }
    },

    concat: {
      app: {
        src: [
          "lib/util/*.js",
          "lib/initialize.js",
          "lib/**/*.js"
        ],
        dest: "dist/all.js"
      }
    },

    mocha: {
      all: ['test/**/*.html']
    },

    watch: {
      files: "src/**/*.coffee",
      tasks: ["coffee", "concat"]
    },

    jam: {
      dist: {
        dest: 'dist/all.js'
      }
    }
  });

  grunt.registerTask("run", "coffee concat server watch");
};
