postcss-single-charset
======================

[PostCSS][1] plugin for popping first @charset rule up in CSS file.


SYNOPSIS
--------

Sometimes concatenated CSS file has `@charset` directive in the middle or has
many `@charset` directives:

    .foo {
      color: red;
    }
    
    @charset "Shift_JIS";
    
    .bar {
      color: green;
    }
    
    @charset "Shift_JIS";
    
    .baz {
      color: blue;
    }

This PostCSS plugin fixes these invalid `@charset` like this:

    @charset "Shift_JIS";
    
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

    var fs = require("fs");
    var postcss = require("postcss");
    
    var css = fs.readFileSync("input.css", "utf8");
    postcss([
      require("postcss-single-charset")()
    ]).process(css).then(function (result) {
      fs.writeFileSync("output.css", result.css);
    });


LICENSE
-------

MIT: http://hail2u.mit-license.org/2015


[1]: https://github.com/postcss/postcss
