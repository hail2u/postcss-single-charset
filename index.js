"use strict";

module.exports = require("postcss").plugin("single-charset", () => {
  return (c) => {
    let met = false;

    c.walkAtRules("charset", (a) => {
      if (!met) {
        met = true;
        a.parent.prepend(a.clone());
      }

      a.remove();
    });
  };
});
