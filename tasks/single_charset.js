'use strict';

module.exports = function (grunt) {
  var taskName = 'single_charset';
  var taskDescription = 'Pop first `@charset` rule in each CSS file.';

  grunt.registerMultiTask(taskName, taskDescription, function () {
    var fs = require('fs');
    var postcss = require('postcss');

    var options = this.options({});

    this.files.forEach(function (file) {
      var fixed = postcss().use(
        require('../index')()
      ).process(
        fs.readFileSync(file.src[0], 'utf8'), options
      );

      fs.writeFileSync(file.dest, fixed.css);
      grunt.log.writeln('File "' + file.dest + '" created.');

      if (fixed.map) {
        fs.writeFileSync(file.dest + '.map', fixed.map);
        grunt.log.writeln('File "' + file.dest + '.map" created.');
      }
    });
  });
};
