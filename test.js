/* eslint no-console: 0 */
"use strict";

const assert = require("assert");
const postcss = require("postcss");

const fixture = '.foo{color:red;}@charset "UTF-8";.bar{color:green;}@charset "EUC-JP";.baz{color:blue}';
const expected = '@charset "UTF-8";.foo{color:red;}.bar{color:green;}.baz{color:blue}';

assert.strictEqual(
  postcss().use(require("./index")()).process(fixture).css,
  expected,
  "should pop 1st @charset, and remove else."
);

console.log("Ok");
