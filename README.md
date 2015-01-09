postcss-single-charset
======================

Pop first @charset rule in CSS file.


INSTALL
-------

    $ npm install postcss-single-charset


USAGE
-----

    var fs = require('fs');
    var postcss = require('postcss');
    
    var input = fs.readFileSync('input.css', 'utf8');
    var output = postcss().use(require('postcss-single-charset')()).process(input).css;
    fs.writeFileSync('output.css', output);


LICENSE
-------

MIT: http://hail2u.mit-license.org/2015
