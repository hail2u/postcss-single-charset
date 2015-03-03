'use strict';

module.exports = function () {
  return function (css) {
    var metCharset = false;
    css.eachAtRule('charset', function (atRule) {
      if (!metCharset) {
        metCharset = true;
        atRule.parent.prepend(atRule.clone());
      }

      atRule.removeSelf();
    });
  };
};
