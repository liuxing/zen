/*!
* Zen.js 0.1.0
* (c) 2018 Liu Xing
* Released under the MIT License.
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.zen = factory());
}(this, (function () { 'use strict';

  /**
   * Produces a random integer between the inclusive `lower` and `upper` bounds.
   *
   * @param {number} [lower=0] The lower bound.
   * @param {number} [upper=1] The upper bound.
   * @returns {number} Returns the random number.
   */
  function random(lower, upper) {
    if (lower === undefined && upper === undefined) {
      lower = 0;
      upper = 1;
    }
    if (upper === undefined) {
      upper = lower;
      lower = 0;
    }
    if (lower > upper) {
      var _ref = [lower, upper];
      upper = _ref[0];
      lower = _ref[1];
    }
    return lower + Math.floor(Math.random() * (upper - lower + 1));
  }

  var index = {
    version: '0.1.0',
    random: random
  };

  return index;

})));
