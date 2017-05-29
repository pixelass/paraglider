(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";var _helloWorld=require("../src/hello-world");require("./main.css");var headline=document.createElement("h3");headline.innerHTML=(0,_helloWorld.helloSpan)(),document.getElementById("app").appendChild(headline);

},{"../src/hello-world":3,"./main.css":2}],2:[function(require,module,exports){
module.exports = {"flexbox":"a"}
},{}],3:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.helloSpan=void 0;var _style=require("./style.css"),_style2=_interopRequireDefault(_style),hello=function(){return"Hello "+(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"World")},helloSpan=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"World";return'<span class="'+_style2.default.hello+'">'+hello(e)+"</span>"};exports.helloSpan=helloSpan,exports.default=hello;

},{"./style.css":4}],4:[function(require,module,exports){
module.exports = {"hello":"b"}
},{}]},{},[1]);
