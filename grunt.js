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
      vendor: {
        src: [
          "components/underscore/underscore-min.js",
          "components/jquery/jquery.min.js",
          "components/enchant/enchant.min.js",
          "components/handlebars/handlebars.js",
          "components/rot/rot.js"
        ],
        dest: "dist/vendor.js"
      },

      app: {
        src: [
          "lib/util/*.js",
          "lib/initialize.js",
          "lib/skills/base.js",
          "lib/ui/domt.js",
          "lib/entities/uditor_sprite.js",
          "lib/entities/mover.js",
          "lib/entities/monster.js",
          "lib/shapes/*.js",
          "lib/entities/mover.js",
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
