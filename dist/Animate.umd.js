(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Animate = factory());
}(this, (function () { 'use strict';

  /*
   * @Description:
   * @Author: dingxuejin
   * @Date: 2020-04-22 09:52:53
   * @LastEditTime: 2020-04-22 10:21:57
   * @LastEditors: dingxuejin
   */
  var tween = {
    linear: function (t, b, c, d) {
      return (c * t) / d + b;
    },
    easeIn: function (t, b, c, d) {
      return c * (t /= d) * t + b;
    },
    strongEaseIn: function (t, b, c, d) {
      return c * (t /= d) * t * t * t * t + b;
    },
    strongEaseOut: function (t, b, c, d) {
      return c * (t /= d) * t * t + b;
    },
    sineasein: function (t, b, c, d) {
      return c * (t / d) * t * t + b;
    },
    sineaseOut: function (t, b, c, d) {
      return c * ((t = t / d - 1) * t * t + 1) + b;
    },
  };

  var Animate = function (dom) {
    this.dom = dom;
    this.startTime = 0;
    this.startPos = 0;
    this.endPos = 0;
    this.propertyName = null;
    this.easing = null;
    this.duration = null;
  };

  Animate.prototype.start = function (propertyName, endPos, duration, easing) {
    this.startTime = +new Date();
    this.startPos = this.dom.getBoundingClientRect()[propertyName];
    this.propertyName = propertyName;
    this.endPos = endPos;
    this.easing = tween[easing];
    this.duration = duration;

    var self = this;
    var timeId = setInterval(function () {
      if (self.step() === false) {
        clearInterval(timeId);
      }
    }, 19);
  };

  Animate.prototype.step = function () {
    var t = +new Date();
    if (t >= this.startTime + this.duration) {
      this.update(this.endPos);
      return false;
    }
    var pos = this.easing(
      t - this.startTime,
      this.startPos,
      this.endPos - this.startPos,
      this.duration
    );
    console.log(pos);

    this.update(pos);
  };

  Animate.prototype.update = function (pos) {
    this.dom.style[this.propertyName] = pos + "px";
  };

  return Animate;

})));
