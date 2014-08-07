
/*
 * jeolok
 * https://github.com/leny/jeolok
 *
 * Copyright (c) 2014 leny
 * Licensed under the MIT license.
 */
"use strict";
(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports === "object") {
    module.exports = factory();
  } else {
    root.jeolok = factory();
  }
})(this, function() {});
