
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
})(this, function() {
  var Jeolok;
  Jeolok = (function() {
    var _fill, _oGeolocation, _perform;

    _oGeolocation = null;

    function Jeolok() {
      var _ref;
      if ((typeof window !== "undefined" && window !== null ? (_ref = window.navigator) != null ? _ref.geolocation : void 0 : void 0) != null) {
        _oGeolocation = window.navigator.geolocation;
      }
      this.position = null;
      return;
    }

    Jeolok.prototype.getCurrentPosition = function(oOptions, fNext) {
      return _perform.call(this, "getCurrentPosition", oOptions, fNext);
    };

    Jeolok.prototype.get = function(oOptions, fNext) {
      return _perform.call(this, "getCurrentPosition", oOptions, fNext);
    };

    Jeolok.prototype.watchPosition = function(oOptions, fNext) {
      return _perform.call(this, "watchPosition", oOptions, fNext);
    };

    Jeolok.prototype.watch = function(oOptions, fNext) {
      return _perform.call(this, "watchPosition", oOptions, fNext);
    };

    Jeolok.prototype.clearWatch = function(iWatcherID) {
      return _oGeolocation.clearWatch(iWatcherID);
    };

    _perform = function(sOperation, oOptions, fNext) {
      var fPositionError, fPositionSuccess;
      if (oOptions == null) {
        oOptions = {};
      }
      if (fNext == null) {
        fNext = null;
      }
      if (!_oGeolocation) {
        return typeof fNext === "function" ? fNext(new Error("navigator.geolocation isn't available!")) : void 0;
      }
      if ((oOptions instanceof Function) && fNext === null) {
        fNext = oOptions;
        oOptions = {};
      }
      fPositionSuccess = (function(_this) {
        return function(oPosition) {
          _fill.call(_this, oPosition);
          return typeof fNext === "function" ? fNext(null, _this.position) : void 0;
        };
      })(this);
      fPositionError = function(oError) {
        return typeof fNext === "function" ? fNext(oError) : void 0;
      };
      return _oGeolocation[sOperation](fPositionSuccess, fPositionError, oOptions);
    };

    _fill = function(oPosition) {
      this.position = oPosition;
      return this.position.date = new Date(oPosition.timestamp);
    };

    return Jeolok;

  })();
  return new Jeolok();
});
