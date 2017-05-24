"use strict";

module.exports = require("postcss").plugin("single-charset", () => {
  return (c) => {
    let met = false;

    c.walkAtRules("charset", (a) => {
      if (met) {
        a.remove();

        return;
      }

      met = true;
      a.parent.prepend(a);
    });
  };
});
