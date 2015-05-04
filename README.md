postcss-single-charset
======================

Pop first @charset rule in CSS file.


SYNOPSIS
--------

Sometimes concatenated CSS file has `@charset` directive in the middle or has
many `@charset` directives:

    .foo {
      color: red;
    }
    
    @charset 'Shift_JIS';
    
    .bar {
      color: green;
    }
    
    @charset 'Shift_JIS';
    
    .baz {
      color: blue;
    }

This PostCSS plugin fixes these invalid `@charset` like this:

    @charset 'Shift_JIS';
    
    .foo {
      color: red;
    }
    
    .bar {
      color: green;
    }
    
    .baz {
      color: blue;
    }


INSTALL
-------

    $ npm install postcss-single-charset


USAGE
-----

    var fs = require('fs');
    var postcss = require('postcss');
    
    var input = fs.readFileSync('input.css', 'utf8');
    var output = postcss().use(
      require('postcss-single-charset')()
    ).process(input).css;
    fs.writeFileSync('output.css', output);


### As Grunt plugin

This package also includes Grunt plugin. You can load like that:

    grunt.loadNpmTasks('postcss-single-charset');

And configure like that:

    grunt.initConfig({
      single_charset: {
        basic: {
          files: {
            'dest/basic.css': ['src/basic.css']
          }
        },
    
        with_options: {
          options: {
            map: {
              inline: false
            }
          },
    
          files: {
            'dest/with_options.css': ['src/with_options.css']
          }
        }
      }
    });

`options` are mainly for Source Maps. See [PostCSS document][1] for more
information.


LICENSE
-------

MIT: http://hail2u.mit-license.org/2015


[1]: https://github.com/postcss/postcss#source-map-1
