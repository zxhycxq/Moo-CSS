/*!
 * 
 *   MoocssDemo
 *   @version: 1.0.0
 *   @description: a typical Moo-css demo.
 *   @author: MichealWayne
 *   @task: test
 *   @build time: 2019/03/29 14:27:34
 * 
 */!function(e){function n(n){for(var o,u,i=n[0],a=n[1],l=n[2],s=0,p=[];s<i.length;s++)u=i[s],r[u]&&p.push(r[u][0]),r[u]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);for(f&&f(n);p.length;)p.shift()();return c.push.apply(c,l||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],o=!0,i=1;i<t.length;i++){var a=t[i];0!==r[a]&&(o=!1)}o&&(c.splice(n--,1),e=u(u.s=t[0]))}return e}var o={},r={1:0},c=[];function u(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=e,u.c=o,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)u.d(t,o,function(n){return e[n]}.bind(null,o));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="";var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=n,i=i.slice();for(var l=0;l<i.length;l++)n(i[l]);var f=a;c.push([20,0]),t()}({20:function(e,n,t){"use strict";t(18),t(21),$(function(){var e=$("#app"),n=$(".j-mask"),t=$("#search");$(".j-change_theme").on("click",function(){var n=e.attr("s-type");e.attr("s-type","black"===n?"default":"black")});var o=$(".m-menu__ctn");$(".j-open_menu").on("click",function(){o.addClass("g-menu_in"),n.removeClass("z-hide")}),$(".j-close_menu").add(n).on("click",function(){o.removeClass("g-menu_in"),n.addClass("z-hide")}),$(".j-to_nav").click(function(){location.href="mobileNavs.html?"+e.attr("s-type")}),$(".j-jump").click(function(){location.href="https://www.baidu.com/s?wd="+t.val()}),$(".j-to_home").click(function(){location.href="https://github.com/MichealWayne/Moo-CSS"})})},21:function(e,n,t){}});