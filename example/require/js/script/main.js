/*
 * @Description: 
 * @Author: dingxuejin
 * @Date: 2020-04-22 12:22:06
 * @LastEditTime: 2020-04-22 12:38:28
 * @LastEditors: dingxuejin
 */
require(['../../../../dist/Animate.amd.js'], function (Animate){
    var div = document.getElementById("animate");
    var animate = new Animate(div);
    animate.start("left", 500, 10000, "sineaseOut");
});