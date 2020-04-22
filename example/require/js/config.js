/*
 * @Description: 
 * @Author: dingxuejin
 * @Date: 2020-04-22 12:23:13
 * @LastEditTime: 2020-04-22 12:26:18
 * @LastEditors: dingxuejin
 */
requirejs.config({
    baseUrl:'js/'
});
require(['script/main']); //根据baseUrl + paths + require值来查找文件
//上面这句可替换为require('js/main.js')，根据index.html所在目录 + require值来查找文件
