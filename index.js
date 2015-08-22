"use strict";

var postcss = require("postcss");

module.exports = postcss.plugin("single-charset", function () {
  return function (css) {
    var metCharset = false;
    css.walkAtRules("charset", function (atRule) {
      if (!metCharset) {
        metCharset = true;
        atRule.parent.prepend(atRule.clone());
      }

      atRule.remove();
    });
  };
});
