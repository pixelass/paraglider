(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var _extends2=require("babel-runtime/helpers/extends"),_extends3=_interopRequireDefault(_extends2),_from=require("babel-runtime/core-js/array/from"),_from2=_interopRequireDefault(_from),_easingUtils=require("easing-utils"),_presets=require("../src/presets"),_wrapper=require("../src/presets/wrapper"),_wrapper2=_interopRequireDefault(_wrapper),_main=require("./main.css"),_main2=_interopRequireDefault(_main),classNames={pluginLoaded:_main2.default.pluginLoaded,current:_main2.default.current,previous:_main2.default.previous,next:_main2.default.next,init:_main2.default.init,active:_main2.default.active,slides:"jsWrapper",slide:"jsHook",dot:"jsDot",prevButton:"jsPrev",nextButton:"jsNext"},ex1=document.querySelector(".ex1"),ex1Logs=(0,_from2.default)(ex1.querySelectorAll(".log")||[]);(0,_presets.belt)(ex1,{classNames:classNames,initialSlide:3,onSlide:function(e,t,r,s){var a=e.left,n=e.right;ex1Logs.forEach(function(e){e.parentNode===t?e.style.transform="translate3d("+(100*(0,_easingUtils.easeOutSine)(n)-100)+"%,0,0)":e.parentNode===r?e.style.transform="translate3d("+(100-100*(0,_easingUtils.easeOutSine)(a))+"%,0,0)":e.parentNode===s&&(e.style.transform="translate3d("+100*(0,_easingUtils.easeOutSine)(n)+"%,0,0)")})},onEnd:function(e,t,r){ex1Logs.forEach(function(e){e.parentNode===r&&(e.style.transform="")})}});var coverRightCustom=function(e,t){return(0,_wrapper2.default)(e,(0,_extends3.default)({},t,{onSlide:function(e,r,s,a){var n=e.left,i=e.right;s?s.style.transform="translate3d("+(100-100*(0,_easingUtils.easeOutSine)(n))+"%,0,0)":r&&(r.style.transform="translate3d("+(100-100*(0,_easingUtils.easeOutSine)(i))+"%,0,0)"),"function"==typeof t.onSlide&&t.onSlide({left:n,right:i},r,s,a)},onEnd:function(e,r,s){"function"==typeof t.onEnd&&t.onEnd(e,r,s)}}))},ex2=document.querySelector(".ex2"),ex2Logs=(0,_from2.default)(ex2.querySelectorAll(".log")||[]);coverRightCustom(ex2,{classNames:classNames,initialSlide:2,speed:600,spring:300,onSlide:function(e,t,r){var s=e.left,a=e.right;ex2Logs.forEach(function(e){e.parentNode===t?e.style.transform="translate3d("+(100-100*(0,_easingUtils.easeInQuad)(a))+"%,0,0)":e.parentNode===r&&(e.style.transform="translate3d("+(100-100*(0,_easingUtils.easeOutQuad)(s))+"%,0,0)")})},onEnd:function(e,t,r){ex2Logs.forEach(function(e){e.parentNode===r&&(e.style.transform="")})}}),(0,_presets.belt)(document.querySelector(".belt"),{classNames:classNames}),(0,_presets.coverLeftRight)(document.querySelector(".coverLeftRight"),{classNames:classNames}),(0,_presets.coverRight)(document.querySelector(".coverRight"),{classNames:classNames}),(0,_presets.coverLeft)(document.querySelector(".coverLeft"),{classNames:classNames});

},{"../src/presets":81,"../src/presets/wrapper":82,"./main.css":2,"babel-runtime/core-js/array/from":3,"babel-runtime/helpers/extends":9,"easing-utils":73}],2:[function(require,module,exports){
module.exports = {"current":"a","previous":"b","next":"c","active":"d","pluginLoaded":"e"}
},{}],3:[function(require,module,exports){
module.exports={default:require("core-js/library/fn/array/from"),__esModule:!0};
},{"core-js/library/fn/array/from":11}],4:[function(require,module,exports){
module.exports={default:require("core-js/library/fn/object/assign"),__esModule:!0};
},{"core-js/library/fn/object/assign":12}],5:[function(require,module,exports){
module.exports={default:require("core-js/library/fn/object/define-property"),__esModule:!0};
},{"core-js/library/fn/object/define-property":13}],6:[function(require,module,exports){
module.exports={default:require("core-js/library/fn/object/keys"),__esModule:!0};
},{"core-js/library/fn/object/keys":14}],7:[function(require,module,exports){
"use strict";exports.__esModule=!0,exports.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};

},{}],8:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}exports.__esModule=!0;var _defineProperty=require("../core-js/object/define-property"),_defineProperty2=_interopRequireDefault(_defineProperty);exports.default=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,_defineProperty2.default)(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}();

},{"../core-js/object/define-property":5}],9:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}exports.__esModule=!0;var _assign=require("../core-js/object/assign"),_assign2=_interopRequireDefault(_assign);exports.default=_assign2.default||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e};
},{"../core-js/object/assign":4}],10:[function(require,module,exports){
"use strict";function _interopRequireDefault(r){return r&&r.__esModule?r:{default:r}}exports.__esModule=!0;var _from=require("../core-js/array/from"),_from2=_interopRequireDefault(_from);exports.default=function(r){if(Array.isArray(r)){for(var e=0,t=Array(r.length);e<r.length;e++)t[e]=r[e];return t}return(0,_from2.default)(r)};
},{"../core-js/array/from":3}],11:[function(require,module,exports){
require("../../modules/es6.string.iterator"),require("../../modules/es6.array.from"),module.exports=require("../../modules/_core").Array.from;
},{"../../modules/_core":20,"../../modules/es6.array.from":68,"../../modules/es6.string.iterator":72}],12:[function(require,module,exports){
require("../../modules/es6.object.assign"),module.exports=require("../../modules/_core").Object.assign;
},{"../../modules/_core":20,"../../modules/es6.object.assign":69}],13:[function(require,module,exports){
require("../../modules/es6.object.define-property");var $Object=require("../../modules/_core").Object;module.exports=function(e,r,o){return $Object.defineProperty(e,r,o)};
},{"../../modules/_core":20,"../../modules/es6.object.define-property":70}],14:[function(require,module,exports){
require("../../modules/es6.object.keys"),module.exports=require("../../modules/_core").Object.keys;
},{"../../modules/_core":20,"../../modules/es6.object.keys":71}],15:[function(require,module,exports){
module.exports=function(o){if("function"!=typeof o)throw TypeError(o+" is not a function!");return o};

},{}],16:[function(require,module,exports){
var isObject=require("./_is-object");module.exports=function(e){if(!isObject(e))throw TypeError(e+" is not an object!");return e};

},{"./_is-object":36}],17:[function(require,module,exports){
var toIObject=require("./_to-iobject"),toLength=require("./_to-length"),toIndex=require("./_to-index");module.exports=function(e){return function(t,r,n){var o,i=toIObject(t),u=toLength(i.length),f=toIndex(n,u);if(e&&r!=r){for(;u>f;)if((o=i[f++])!=o)return!0}else for(;u>f;f++)if((e||f in i)&&i[f]===r)return e||f||0;return!e&&-1}};
},{"./_to-index":59,"./_to-iobject":61,"./_to-length":62}],18:[function(require,module,exports){
var cof=require("./_cof"),TAG=require("./_wks")("toStringTag"),ARG="Arguments"==cof(function(){return arguments}()),tryGet=function(t,e){try{return t[e]}catch(t){}};module.exports=function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=tryGet(e=Object(t),TAG))?r:ARG?cof(e):"Object"==(n=cof(e))&&"function"==typeof e.callee?"Arguments":n};

},{"./_cof":19,"./_wks":66}],19:[function(require,module,exports){
var toString={}.toString;module.exports=function(t){return toString.call(t).slice(8,-1)};

},{}],20:[function(require,module,exports){
var core=module.exports={version:"2.4.0"};"number"==typeof __e&&(__e=core);

},{}],21:[function(require,module,exports){
"use strict";var $defineProperty=require("./_object-dp"),createDesc=require("./_property-desc");module.exports=function(e,r,t){r in e?$defineProperty.f(e,r,createDesc(0,t)):e[r]=t};

},{"./_object-dp":45,"./_property-desc":53}],22:[function(require,module,exports){
var aFunction=require("./_a-function");module.exports=function(n,r,t){if(aFunction(n),void 0===r)return n;switch(t){case 1:return function(t){return n.call(r,t)};case 2:return function(t,u){return n.call(r,t,u)};case 3:return function(t,u,e){return n.call(r,t,u,e)}}return function(){return n.apply(r,arguments)}};

},{"./_a-function":15}],23:[function(require,module,exports){
module.exports=function(o){if(void 0==o)throw TypeError("Can't call method on  "+o);return o};

},{}],24:[function(require,module,exports){
module.exports=!require("./_fails")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a});
},{"./_fails":28}],25:[function(require,module,exports){
var isObject=require("./_is-object"),document=require("./_global").document,is=isObject(document)&&isObject(document.createElement);module.exports=function(e){return is?document.createElement(e):{}};

},{"./_global":29,"./_is-object":36}],26:[function(require,module,exports){
module.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");

},{}],27:[function(require,module,exports){
var global=require("./_global"),core=require("./_core"),ctx=require("./_ctx"),hide=require("./_hide"),PROTOTYPE="prototype",$export=function(e,r,t){var o,n,p,i=e&$export.F,x=e&$export.G,c=e&$export.S,l=e&$export.P,u=e&$export.B,a=e&$export.W,$=x?core:core[r]||(core[r]={}),P=$[PROTOTYPE],f=x?global:c?global[r]:(global[r]||{})[PROTOTYPE];x&&(t=r);for(o in t)(n=!i&&f&&void 0!==f[o])&&o in $||(p=n?f[o]:t[o],$[o]=x&&"function"!=typeof f[o]?t[o]:u&&n?ctx(p,global):a&&f[o]==p?function(e){var r=function(r,t,o){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(r);case 2:return new e(r,t)}return new e(r,t,o)}return e.apply(this,arguments)};return r[PROTOTYPE]=e[PROTOTYPE],r}(p):l&&"function"==typeof p?ctx(Function.call,p):p,l&&(($.virtual||($.virtual={}))[o]=p,e&$export.R&&P&&!P[o]&&hide(P,o,p)))};$export.F=1,$export.G=2,$export.S=4,$export.P=8,$export.B=16,$export.W=32,$export.U=64,$export.R=128,module.exports=$export;
},{"./_core":20,"./_ctx":22,"./_global":29,"./_hide":31}],28:[function(require,module,exports){
module.exports=function(r){try{return!!r()}catch(r){return!0}};

},{}],29:[function(require,module,exports){
var global=module.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=global);
},{}],30:[function(require,module,exports){
var hasOwnProperty={}.hasOwnProperty;module.exports=function(r,e){return hasOwnProperty.call(r,e)};

},{}],31:[function(require,module,exports){
var dP=require("./_object-dp"),createDesc=require("./_property-desc");module.exports=require("./_descriptors")?function(e,r,t){return dP.f(e,r,createDesc(1,t))}:function(e,r,t){return e[r]=t,e};

},{"./_descriptors":24,"./_object-dp":45,"./_property-desc":53}],32:[function(require,module,exports){
module.exports=require("./_global").document&&document.documentElement;

},{"./_global":29}],33:[function(require,module,exports){
module.exports=!require("./_descriptors")&&!require("./_fails")(function(){return 7!=Object.defineProperty(require("./_dom-create")("div"),"a",{get:function(){return 7}}).a});

},{"./_descriptors":24,"./_dom-create":25,"./_fails":28}],34:[function(require,module,exports){
var cof=require("./_cof");module.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==cof(e)?e.split(""):Object(e)};

},{"./_cof":19}],35:[function(require,module,exports){
var Iterators=require("./_iterators"),ITERATOR=require("./_wks")("iterator"),ArrayProto=Array.prototype;module.exports=function(r){return void 0!==r&&(Iterators.Array===r||ArrayProto[ITERATOR]===r)};

},{"./_iterators":41,"./_wks":66}],36:[function(require,module,exports){
module.exports=function(o){return"object"==typeof o?null!==o:"function"==typeof o};

},{}],37:[function(require,module,exports){
var anObject=require("./_an-object");module.exports=function(r,t,e,a){try{return a?t(anObject(e)[0],e[1]):t(e)}catch(t){var c=r.return;throw void 0!==c&&anObject(c.call(r)),t}};

},{"./_an-object":16}],38:[function(require,module,exports){
"use strict";var create=require("./_object-create"),descriptor=require("./_property-desc"),setToStringTag=require("./_set-to-string-tag"),IteratorPrototype={};require("./_hide")(IteratorPrototype,require("./_wks")("iterator"),function(){return this}),module.exports=function(r,t,e){r.prototype=create(IteratorPrototype,{next:descriptor(1,e)}),setToStringTag(r,t+" Iterator")};

},{"./_hide":31,"./_object-create":44,"./_property-desc":53,"./_set-to-string-tag":55,"./_wks":66}],39:[function(require,module,exports){
"use strict";var LIBRARY=require("./_library"),$export=require("./_export"),redefine=require("./_redefine"),hide=require("./_hide"),has=require("./_has"),Iterators=require("./_iterators"),$iterCreate=require("./_iter-create"),setToStringTag=require("./_set-to-string-tag"),getPrototypeOf=require("./_object-gpo"),ITERATOR=require("./_wks")("iterator"),BUGGY=!([].keys&&"next"in[].keys()),FF_ITERATOR="@@iterator",KEYS="keys",VALUES="values",returnThis=function(){return this};module.exports=function(e,r,t,i,n,o,s){$iterCreate(t,r,i);var u,a,T,R=function(e){if(!BUGGY&&e in f)return f[e];switch(e){case KEYS:case VALUES:return function(){return new t(this,e)}}return function(){return new t(this,e)}},A=r+" Iterator",E=n==VALUES,c=!1,f=e.prototype,h=f[ITERATOR]||f[FF_ITERATOR]||n&&f[n],I=h||R(n),p=n?E?R("entries"):I:void 0,_="Array"==r?f.entries||h:h;if(_&&(T=getPrototypeOf(_.call(new e)))!==Object.prototype&&(setToStringTag(T,A,!0),LIBRARY||has(T,ITERATOR)||hide(T,ITERATOR,returnThis)),E&&h&&h.name!==VALUES&&(c=!0,I=function(){return h.call(this)}),LIBRARY&&!s||!BUGGY&&!c&&f[ITERATOR]||hide(f,ITERATOR,I),Iterators[r]=I,Iterators[A]=returnThis,n)if(u={values:E?I:R(VALUES),keys:o?I:R(KEYS),entries:p},s)for(a in u)a in f||redefine(f,a,u[a]);else $export($export.P+$export.F*(BUGGY||c),r,u);return u};

},{"./_export":27,"./_has":30,"./_hide":31,"./_iter-create":38,"./_iterators":41,"./_library":42,"./_object-gpo":48,"./_redefine":54,"./_set-to-string-tag":55,"./_wks":66}],40:[function(require,module,exports){
var ITERATOR=require("./_wks")("iterator"),SAFE_CLOSING=!1;try{var riter=[7][ITERATOR]();riter.return=function(){SAFE_CLOSING=!0},Array.from(riter,function(){throw 2})}catch(r){}module.exports=function(r,t){if(!t&&!SAFE_CLOSING)return!1;var n=!1;try{var e=[7],u=e[ITERATOR]();u.next=function(){return{done:n=!0}},e[ITERATOR]=function(){return u},r(e)}catch(r){}return n};

},{"./_wks":66}],41:[function(require,module,exports){
module.exports={};

},{}],42:[function(require,module,exports){
module.exports=!0;

},{}],43:[function(require,module,exports){
"use strict";var getKeys=require("./_object-keys"),gOPS=require("./_object-gops"),pIE=require("./_object-pie"),toObject=require("./_to-object"),IObject=require("./_iobject"),$assign=Object.assign;module.exports=!$assign||require("./_fails")(function(){var e={},t={},r=Symbol(),s="abcdefghijklmnopqrst";return e[r]=7,s.split("").forEach(function(e){t[e]=e}),7!=$assign({},e)[r]||Object.keys($assign({},t)).join("")!=s})?function(e,t){for(var r=toObject(e),s=arguments.length,i=1,o=gOPS.f,c=pIE.f;s>i;)for(var n,a=IObject(arguments[i++]),g=o?getKeys(a).concat(o(a)):getKeys(a),b=g.length,j=0;b>j;)c.call(a,n=g[j++])&&(r[n]=a[n]);return r}:$assign;
},{"./_fails":28,"./_iobject":34,"./_object-gops":47,"./_object-keys":50,"./_object-pie":51,"./_to-object":63}],44:[function(require,module,exports){
var anObject=require("./_an-object"),dPs=require("./_object-dps"),enumBugKeys=require("./_enum-bug-keys"),IE_PROTO=require("./_shared-key")("IE_PROTO"),Empty=function(){},PROTOTYPE="prototype",createDict=function(){var e,t=require("./_dom-create")("iframe"),r=enumBugKeys.length;for(t.style.display="none",require("./_html").appendChild(t),t.src="javascript:",e=t.contentWindow.document,e.open(),e.write("<script>document.F=Object<\/script>"),e.close(),createDict=e.F;r--;)delete createDict[PROTOTYPE][enumBugKeys[r]];return createDict()};module.exports=Object.create||function(e,t){var r;return null!==e?(Empty[PROTOTYPE]=anObject(e),r=new Empty,Empty[PROTOTYPE]=null,r[IE_PROTO]=e):r=createDict(),void 0===t?r:dPs(r,t)};

},{"./_an-object":16,"./_dom-create":25,"./_enum-bug-keys":26,"./_html":32,"./_object-dps":46,"./_shared-key":56}],45:[function(require,module,exports){
var anObject=require("./_an-object"),IE8_DOM_DEFINE=require("./_ie8-dom-define"),toPrimitive=require("./_to-primitive"),dP=Object.defineProperty;exports.f=require("./_descriptors")?Object.defineProperty:function(e,r,t){if(anObject(e),r=toPrimitive(r,!0),anObject(t),IE8_DOM_DEFINE)try{return dP(e,r,t)}catch(e){}if("get"in t||"set"in t)throw TypeError("Accessors not supported!");return"value"in t&&(e[r]=t.value),e};

},{"./_an-object":16,"./_descriptors":24,"./_ie8-dom-define":33,"./_to-primitive":64}],46:[function(require,module,exports){
var dP=require("./_object-dp"),anObject=require("./_an-object"),getKeys=require("./_object-keys");module.exports=require("./_descriptors")?Object.defineProperties:function(e,r){anObject(e);for(var t,o=getKeys(r),c=o.length,i=0;c>i;)dP.f(e,t=o[i++],r[t]);return e};

},{"./_an-object":16,"./_descriptors":24,"./_object-dp":45,"./_object-keys":50}],47:[function(require,module,exports){
exports.f=Object.getOwnPropertySymbols;
},{}],48:[function(require,module,exports){
var has=require("./_has"),toObject=require("./_to-object"),IE_PROTO=require("./_shared-key")("IE_PROTO"),ObjectProto=Object.prototype;module.exports=Object.getPrototypeOf||function(t){return t=toObject(t),has(t,IE_PROTO)?t[IE_PROTO]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?ObjectProto:null};

},{"./_has":30,"./_shared-key":56,"./_to-object":63}],49:[function(require,module,exports){
var has=require("./_has"),toIObject=require("./_to-iobject"),arrayIndexOf=require("./_array-includes")(!1),IE_PROTO=require("./_shared-key")("IE_PROTO");module.exports=function(r,e){var a,t=toIObject(r),u=0,O=[];for(a in t)a!=IE_PROTO&&has(t,a)&&O.push(a);for(;e.length>u;)has(t,a=e[u++])&&(~arrayIndexOf(O,a)||O.push(a));return O};
},{"./_array-includes":17,"./_has":30,"./_shared-key":56,"./_to-iobject":61}],50:[function(require,module,exports){
var $keys=require("./_object-keys-internal"),enumBugKeys=require("./_enum-bug-keys");module.exports=Object.keys||function(e){return $keys(e,enumBugKeys)};

},{"./_enum-bug-keys":26,"./_object-keys-internal":49}],51:[function(require,module,exports){
exports.f={}.propertyIsEnumerable;

},{}],52:[function(require,module,exports){
var $export=require("./_export"),core=require("./_core"),fails=require("./_fails");module.exports=function(e,r){var o=(core.Object||{})[e]||Object[e],t={};t[e]=r(o),$export($export.S+$export.F*fails(function(){o(1)}),"Object",t)};
},{"./_core":20,"./_export":27,"./_fails":28}],53:[function(require,module,exports){
module.exports=function(e,r){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:r}};

},{}],54:[function(require,module,exports){
module.exports=require("./_hide");

},{"./_hide":31}],55:[function(require,module,exports){
var def=require("./_object-dp").f,has=require("./_has"),TAG=require("./_wks")("toStringTag");module.exports=function(e,r,o){e&&!has(e=o?e:e.prototype,TAG)&&def(e,TAG,{configurable:!0,value:r})};

},{"./_has":30,"./_object-dp":45,"./_wks":66}],56:[function(require,module,exports){
var shared=require("./_shared")("keys"),uid=require("./_uid");module.exports=function(e){return shared[e]||(shared[e]=uid(e))};

},{"./_shared":57,"./_uid":65}],57:[function(require,module,exports){
var global=require("./_global"),SHARED="__core-js_shared__",store=global[SHARED]||(global[SHARED]={});module.exports=function(o){return store[o]||(store[o]={})};

},{"./_global":29}],58:[function(require,module,exports){
var toInteger=require("./_to-integer"),defined=require("./_defined");module.exports=function(e){return function(r,t){var n,i,d=String(defined(r)),o=toInteger(t),u=d.length;return o<0||o>=u?e?"":void 0:(n=d.charCodeAt(o),n<55296||n>56319||o+1===u||(i=d.charCodeAt(o+1))<56320||i>57343?e?d.charAt(o):n:e?d.slice(o,o+2):i-56320+(n-55296<<10)+65536)}};

},{"./_defined":23,"./_to-integer":60}],59:[function(require,module,exports){
var toInteger=require("./_to-integer"),max=Math.max,min=Math.min;module.exports=function(e,t){return e=toInteger(e),e<0?max(e+t,0):min(e,t)};

},{"./_to-integer":60}],60:[function(require,module,exports){
var ceil=Math.ceil,floor=Math.floor;module.exports=function(o){return isNaN(o=+o)?0:(o>0?floor:ceil)(o)};

},{}],61:[function(require,module,exports){
var IObject=require("./_iobject"),defined=require("./_defined");module.exports=function(e){return IObject(defined(e))};

},{"./_defined":23,"./_iobject":34}],62:[function(require,module,exports){
var toInteger=require("./_to-integer"),min=Math.min;module.exports=function(e){return e>0?min(toInteger(e),9007199254740991):0};

},{"./_to-integer":60}],63:[function(require,module,exports){
var defined=require("./_defined");module.exports=function(e){return Object(defined(e))};

},{"./_defined":23}],64:[function(require,module,exports){
var isObject=require("./_is-object");module.exports=function(t,e){if(!isObject(t))return t;var r,i;if(e&&"function"==typeof(r=t.toString)&&!isObject(i=r.call(t)))return i;if("function"==typeof(r=t.valueOf)&&!isObject(i=r.call(t)))return i;if(!e&&"function"==typeof(r=t.toString)&&!isObject(i=r.call(t)))return i;throw TypeError("Can't convert object to primitive value")};

},{"./_is-object":36}],65:[function(require,module,exports){
var id=0,px=Math.random();module.exports=function(o){return"Symbol(".concat(void 0===o?"":o,")_",(++id+px).toString(36))};

},{}],66:[function(require,module,exports){
var store=require("./_shared")("wks"),uid=require("./_uid"),Symbol=require("./_global").Symbol,USE_SYMBOL="function"==typeof Symbol,$exports=module.exports=function(o){return store[o]||(store[o]=USE_SYMBOL&&Symbol[o]||(USE_SYMBOL?Symbol:uid)("Symbol."+o))};$exports.store=store;

},{"./_global":29,"./_shared":57,"./_uid":65}],67:[function(require,module,exports){
var classof=require("./_classof"),ITERATOR=require("./_wks")("iterator"),Iterators=require("./_iterators");module.exports=require("./_core").getIteratorMethod=function(r){if(void 0!=r)return r[ITERATOR]||r["@@iterator"]||Iterators[classof(r)]};

},{"./_classof":18,"./_core":20,"./_iterators":41,"./_wks":66}],68:[function(require,module,exports){
"use strict";var ctx=require("./_ctx"),$export=require("./_export"),toObject=require("./_to-object"),call=require("./_iter-call"),isArrayIter=require("./_is-array-iter"),toLength=require("./_to-length"),createProperty=require("./_create-property"),getIterFn=require("./core.get-iterator-method");$export($export.S+$export.F*!require("./_iter-detect")(function(e){Array.from(e)}),"Array",{from:function(e){var r,t,o,i,a=toObject(e),c="function"==typeof this?this:Array,n=arguments.length,u=n>1?arguments[1]:void 0,l=void 0!==u,y=0,p=getIterFn(a);if(l&&(u=ctx(u,n>2?arguments[2]:void 0,2)),void 0==p||c==Array&&isArrayIter(p))for(r=toLength(a.length),t=new c(r);r>y;y++)createProperty(t,y,l?u(a[y],y):a[y]);else for(i=p.call(a),t=new c;!(o=i.next()).done;y++)createProperty(t,y,l?call(i,u,[o.value,y],!0):o.value);return t.length=y,t}});
},{"./_create-property":21,"./_ctx":22,"./_export":27,"./_is-array-iter":35,"./_iter-call":37,"./_iter-detect":40,"./_to-length":62,"./_to-object":63,"./core.get-iterator-method":67}],69:[function(require,module,exports){
var $export=require("./_export");$export($export.S+$export.F,"Object",{assign:require("./_object-assign")});
},{"./_export":27,"./_object-assign":43}],70:[function(require,module,exports){
var $export=require("./_export");$export($export.S+$export.F*!require("./_descriptors"),"Object",{defineProperty:require("./_object-dp").f});

},{"./_descriptors":24,"./_export":27,"./_object-dp":45}],71:[function(require,module,exports){
var toObject=require("./_to-object"),$keys=require("./_object-keys");require("./_object-sap")("keys",function(){return function(e){return $keys(toObject(e))}});
},{"./_object-keys":50,"./_object-sap":52,"./_to-object":63}],72:[function(require,module,exports){
"use strict";var $at=require("./_string-at")(!0);require("./_iter-define")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,i=this._t,e=this._i;return e>=i.length?{value:void 0,done:!0}:(t=$at(i,e),this._i+=t.length,{value:t,done:!1})});

},{"./_iter-define":39,"./_string-at":58}],73:[function(require,module,exports){
"use strict";function linear(e){return e}function easeInSine(e){return-1*Math.cos(e*(Math.PI/2))+1}function easeOutSine(e){return Math.sin(e*(Math.PI/2))}function easeInOutSine(e){return-.5*(Math.cos(Math.PI*e)-1)}function easeInQuad(e){return e*e}function easeOutQuad(e){return e*(2-e)}function easeInOutQuad(e){return e<.5?2*e*e:(4-2*e)*e-1}function easeInCubic(e){return e*e*e}function easeOutCubic(e){var t=e-1;return t*t*t+1}function easeInOutCubic(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1}function easeInQuart(e){return e*e*e*e}function easeOutQuart(e){var t=e-1;return 1-t*t*t*t}function easeInOutQuart(e){var t=e-1;return e<.5?8*e*e*e*e:1-8*t*t*t*t}function easeInQuint(e){return e*e*e*e*e}function easeOutQuint(e){var t=e-1;return 1+t*t*t*t*t}function easeInOutQuint(e){var t=e-1;return e<.5?16*e*e*e*e*e:1+16*t*t*t*t*t}function easeInExpo(e){return 0===e?0:Math.pow(2,10*(e-1))}function easeOutExpo(e){return 1===e?1:1-Math.pow(2,-10*e)}function easeInOutExpo(e){if(0===e||1===e)return e;var t=2*e,n=t-1;return t<1?.5*Math.pow(2,10*n):.5*(2-Math.pow(2,-10*n))}function easeInCirc(e){var t=e/1;return-1*(Math.sqrt(1-t*e)-1)}function easeOutCirc(e){var t=e-1;return Math.sqrt(1-t*t)}function easeInOutCirc(e){var t=2*e,n=t-2;return t<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-n*n)+1)}function easeInBack(e){var t=arguments.length<=1||void 0===arguments[1]?1.70158:arguments[1],n=e/1;return n*n*((t+1)*n-t)}function easeOutBack(e){var t=arguments.length<=1||void 0===arguments[1]?1.70158:arguments[1],n=e/1-1;return n*n*((t+1)*n+t)+1}function easeInOutBack(e){var t=arguments.length<=1||void 0===arguments[1]?1.70158:arguments[1],n=2*e,a=n-2,u=1.525*t;return n<1?.5*n*n*((u+1)*n-u):.5*(a*a*((u+1)*a+u)+2)}function easeInElastic(e){var t=arguments.length<=1||void 0===arguments[1]?.7:arguments[1];if(0===e||1===e)return e;var n=e/1,a=n-1,u=1-t,r=u/(2*Math.PI)*Math.asin(1);return-Math.pow(2,10*a)*Math.sin((a-r)*(2*Math.PI)/u)}function easeOutElastic(e){var t=arguments.length<=1||void 0===arguments[1]?.7:arguments[1],n=1-t,a=2*e;if(0===e||1===e)return e;var u=n/(2*Math.PI)*Math.asin(1);return Math.pow(2,-10*a)*Math.sin((a-u)*(2*Math.PI)/n)+1}function easeInOutElastic(e){var t=arguments.length<=1||void 0===arguments[1]?.65:arguments[1],n=1-t;if(0===e||1===e)return e;var a=2*e,u=a-1,r=n/(2*Math.PI)*Math.asin(1);return a<1?Math.pow(2,10*u)*Math.sin((u-r)*(2*Math.PI)/n)*-.5:Math.pow(2,-10*u)*Math.sin((u-r)*(2*Math.PI)/n)*.5+1}function easeOutBounce(e){var t=e/1;if(t<1/2.75)return 7.5625*t*t;if(t<2/2.75){var n=t-1.5/2.75;return 7.5625*n*n+.75}if(t<2.5/2.75){var a=t-2.25/2.75;return 7.5625*a*a+.9375}var u=t-2.625/2.75;return 7.5625*u*u+.984375}function easeInBounce(e){return 1-easeOutBounce(1-e)}function easeInOutBounce(e){return e<.5?.5*easeInBounce(2*e):.5*easeOutBounce(2*e-1)+.5}Object.defineProperty(exports,"__esModule",{value:!0}),exports.linear=linear,exports.easeInSine=easeInSine,exports.easeOutSine=easeOutSine,exports.easeInOutSine=easeInOutSine,exports.easeInQuad=easeInQuad,exports.easeOutQuad=easeOutQuad,exports.easeInOutQuad=easeInOutQuad,exports.easeInCubic=easeInCubic,exports.easeOutCubic=easeOutCubic,exports.easeInOutCubic=easeInOutCubic,exports.easeInQuart=easeInQuart,exports.easeOutQuart=easeOutQuart,exports.easeInOutQuart=easeInOutQuart,exports.easeInQuint=easeInQuint,exports.easeOutQuint=easeOutQuint,exports.easeInOutQuint=easeInOutQuint,exports.easeInExpo=easeInExpo,exports.easeOutExpo=easeOutExpo,exports.easeInOutExpo=easeInOutExpo,exports.easeInCirc=easeInCirc,exports.easeOutCirc=easeOutCirc,exports.easeInOutCirc=easeInOutCirc,exports.easeInBack=easeInBack,exports.easeOutBack=easeOutBack,exports.easeInOutBack=easeInOutBack,exports.easeInElastic=easeInElastic,exports.easeOutElastic=easeOutElastic,exports.easeInOutElastic=easeInOutElastic,exports.easeOutBounce=easeOutBounce,exports.easeInBounce=easeInBounce,exports.easeInOutBounce=easeInOutBounce;
},{}],74:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.PRESET_DEFAULTS=exports.PLUGIN_DEFAULTS=exports.classNames=void 0;var _extends2=require("babel-runtime/helpers/extends"),_extends3=_interopRequireDefault(_extends2),classNames={pluginLoaded:"pluginLoaded",slide:"slide",slides:"slides",back:"back",init:"init",current:"current",previous:"previous",next:"next"},PLUGIN_DEFAULTS={classNames:classNames,onSlide:null,onEnd:null,speed:250,spring:100,snapBackAt:.25,initialSlide:0},PRESET_DEFAULTS={classNames:(0,_extends3.default)({},classNames,{dot:"dot",active:"active",nextButton:"nextButton",prevButton:"prevButton"})};exports.classNames=classNames,exports.PLUGIN_DEFAULTS=PLUGIN_DEFAULTS,exports.PRESET_DEFAULTS=PRESET_DEFAULTS;

},{"babel-runtime/helpers/extends":9}],75:[function(require,module,exports){
(function (global){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _keys=require("babel-runtime/core-js/object/keys"),_keys2=_interopRequireDefault(_keys),_toConsumableArray2=require("babel-runtime/helpers/toConsumableArray"),_toConsumableArray3=_interopRequireDefault(_toConsumableArray2),_from=require("babel-runtime/core-js/array/from"),_from2=_interopRequireDefault(_from),_extends2=require("babel-runtime/helpers/extends"),_extends3=_interopRequireDefault(_extends2),_classCallCheck2=require("babel-runtime/helpers/classCallCheck"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=require("babel-runtime/helpers/createClass"),_createClass3=_interopRequireDefault(_createClass2),_config=require("../config"),_helpers=require("../helpers"),Glider=function(){function e(t){(0,_classCallCheck3.default)(this,e),this.options=(0,_extends3.default)({},_config.PLUGIN_DEFAULTS,t),this.state={currentSlide:this.options.initialSlide},this.nextSlide=this.nextSlide.bind(this),this.prevSlide=this.prevSlide.bind(this),this.goTo=this.goTo.bind(this),this.handleDown=this.handleDown.bind(this),this.handleMove=this.handleMove.bind(this),this.handleUp=this.handleUp.bind(this),this.getClientX=this.getClientX.bind(this)}return(0,_createClass3.default)(e,[{key:"init",value:function(e){var t=this.options.classNames;this.el=e,this.slidesWrapper=e.querySelector("."+t.slides),this.addListeners(),this.slides=(0,_from2.default)(this.slidesWrapper.querySelectorAll("."+t.slide)),this.addSides(),this.addInitClassNames()}},{key:"addListeners",value:function(){global.addEventListener("mousemove",this.handleMove),global.addEventListener("mouseup",this.handleUp),global.addEventListener("touchmove",this.handleMove),global.addEventListener("touchend",this.handleUp),this.slidesWrapper.addEventListener("mousedown",this.handleDown),this.slidesWrapper.addEventListener("touchstart",this.handleDown)}},{key:"removeListeners",value:function(){global.removeEventListener("mousemove",this.handleMove),global.removeEventListener("mouseup",this.handleUp),global.removeEventListener("touchmove",this.handleMove),global.removeEventListener("touchend",this.handleUp),this.slidesWrapper.removeEventListener("mousedown",this.handleDown),this.slidesWrapper.removeEventListener("touchstart",this.handleDown)}},{key:"addClassNames",value:function(){var e=this.state,t=e.currentSlide,s=e.previousSlide,i=e.nextSlide,a=this.options.classNames,n=a.current,l=a.next,r=a.previous;this.slides.forEach(function(e,a){e.classList.toggle(n,a===t),e.classList.toggle(l,a===i),e.classList.toggle(r,a===s)})}},{key:"addInitClassNames",value:function(){var e=this.options.classNames;this.el.classList.add(e.pluginLoaded),this.slides.forEach(function(t){t.classList.add(e.init)}),this.addClassNames()}},{key:"removeClassNames",value:function(){var e,t=this.options.classNames;(e=this.el.classList).remove.apply(e,(0,_toConsumableArray3.default)((0,_keys2.default)(t).map(function(e){return t[e]})))}},{key:"destroy",value:function(){this.removeListeners(),this.removeClassNames()}},{key:"getClientX",value:function(e){var t=e.touches;return((void 0===t?[]:t)[0]||e).clientX}},{key:"addSides",value:function(){var e=this.state,t=e.currentSlide,s=e.requestedNext,i=e.requestedPrevious,a=this.slides.length,n=0===s?0:s||(t+1)%a,l=0===i?0:i||(t-1+a)%a;this.state=(0,_extends3.default)({},this.state,{nextSlide:n,previousSlide:l})}},{key:"handleDown",value:function(e){var t=this.options.classNames,s=this.getClientX(e);this.slides.forEach(function(e){e.classList.remove(t.init)}),this.state=(0,_extends3.default)({},this.state,{down:!0,xStart:s,x:0})}},{key:"handleUp",value:function(){if(this.state.down){this.state=(0,_extends3.default)({},this.state,{down:!1});var e=this.options.snapBackAt,t=this.state.x,s=t/this.el.offsetWidth,i=0;s<=-1*e?i=-1:s>=e&&(i=1),this.spring(s,i,this.options.spring)}}},{key:"nextSlide",value:function(){this.spring(0,1,this.options.speed)}},{key:"prevSlide",value:function(){this.spring(0,-1,this.options.speed)}},{key:"goTo",value:function(e){e>this.state.currentSlide?(this.state.requestedNext=e,this.addSides(),this.addClassNames(),this.nextSlide()):e<this.state.currentSlide&&(this.state.requestedPrevious=e,this.addSides(),this.addClassNames(),this.prevSlide())}},{key:"handleEnd",value:function(e){-1===e?this.state=(0,_extends3.default)({},this.state,{currentSlide:this.state.previousSlide}):1===e&&(this.state=(0,_extends3.default)({},this.state,{currentSlide:this.state.nextSlide})),this.state=(0,_extends3.default)({},this.state,{requestedNext:null,requestedPrevious:null});var t=this.options.onEnd;if(this.addSides(),this.addClassNames(),"function"==typeof t){var s=this.state,i=s.currentSlide,a=s.previousSlide,n=s.nextSlide;t(this.slides[n],this.slides[a],this.slides[i])}}},{key:"spring",value:function(e,t,s){var i=this;(0,_helpers.animate)(s,e,t,function(e){i.state.x=e*i.el.offsetWidth,e===t?i.handleEnd(t):i.handleProgress()})}},{key:"handleMove",value:function(e){var t=this.state,s=t.down,i=t.xStart;if(s){Math.abs(this.state.x)>10&&(e.preventDefault(),this.handleProgress());var a=this.getClientX(e);this.state.x=i-a}}},{key:"handleProgress",value:function(){var e=this.options.onSlide,t=this.state,s=t.currentSlide,i=t.nextSlide,a=t.previousSlide,n=t.x,l=n/this.el.offsetWidth;if("function"==typeof e){var r=-1*l,d=l,o=this.slides[s];e({right:-1*r,left:-1*d},d<r?null:this.slides[i],d>r?null:this.slides[a],o)}}}]),e}();exports.default=Glider;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../config":74,"../helpers":76,"babel-runtime/core-js/array/from":3,"babel-runtime/core-js/object/keys":6,"babel-runtime/helpers/classCallCheck":7,"babel-runtime/helpers/createClass":8,"babel-runtime/helpers/extends":9,"babel-runtime/helpers/toConsumableArray":10}],76:[function(require,module,exports){
(function (global){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var animate=function(e,a,t,n){var r=Date.now(),i=(t-a)/e;return function o(){var m=Date.now(),l=m-r;e-l>0?(global.requestAnimationFrame(o),n(a+i*l)):(global.cancelAnimationFrame(o),n(t))}()};exports.animate=animate,exports.default={animate:animate};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],77:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _extends2=require("babel-runtime/helpers/extends"),_extends3=_interopRequireDefault(_extends2),_wrapper=require("./wrapper"),_wrapper2=_interopRequireDefault(_wrapper),belt=function(e,t){return(0,_wrapper2.default)(e,(0,_extends3.default)({},t,{onSlide:function(e,r,n,a){var l=e.left,o=e.right;n?n.style.transform="translate3d("+(100-100*l)+"%,0,0)":r&&(r.style.transform="translate3d("+(100*o-100)+"%,0,0)"),a.style.transform="translate3d("+100*o+"%,0,0)","function"==typeof t.onSlide&&t.onSlide({left:l,right:o},r,n,a)},onEnd:function(e,r,n){"function"==typeof t.onEnd&&t.onEnd(e,r,n)}}))};exports.default=belt;

},{"./wrapper":82,"babel-runtime/helpers/extends":9}],78:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _extends2=require("babel-runtime/helpers/extends"),_extends3=_interopRequireDefault(_extends2),_wrapper=require("./wrapper"),_wrapper2=_interopRequireDefault(_wrapper),coverLeftRight=function(e,t){return(0,_wrapper2.default)(e,(0,_extends3.default)({},t,{onSlide:function(e,r,n,o){var u=e.left,i=e.right;n?n.style.transform="translate3d("+(100*u-100)+"%,0,0)":r&&(r.style.transform="translate3d("+(100-100*i)+"%,0,0)"),"function"==typeof t.onSlide&&t.onSlide({left:u,right:i},r,n,o)},onEnd:function(e,r,n){"function"==typeof t.onEnd&&t.onEnd(e,r,n)}}))};exports.default=coverLeftRight;

},{"./wrapper":82,"babel-runtime/helpers/extends":9}],79:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _extends2=require("babel-runtime/helpers/extends"),_extends3=_interopRequireDefault(_extends2),_wrapper=require("./wrapper"),_wrapper2=_interopRequireDefault(_wrapper),coverLeft=function(e,t){return(0,_wrapper2.default)(e,(0,_extends3.default)({},t,{onSlide:function(e,r,n,o){var u=e.left,a=e.right;n?n.style.transform="translate3d("+(100*u-100)+"%,0,0)":r&&(r.style.transform="translate3d("+(100*a-100)+"%,0,0)"),"function"==typeof t.onSlide&&t.onSlide({left:u,right:a},r,n,o)},onEnd:function(e,r,n){"function"==typeof t.onEnd&&t.onEnd(e,r,n)}}))};exports.default=coverLeft;

},{"./wrapper":82,"babel-runtime/helpers/extends":9}],80:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _extends2=require("babel-runtime/helpers/extends"),_extends3=_interopRequireDefault(_extends2),_wrapper=require("./wrapper"),_wrapper2=_interopRequireDefault(_wrapper),coverRight=function(e,t){return(0,_wrapper2.default)(e,(0,_extends3.default)({},t,{onSlide:function(e,r,n,o){var u=e.left,i=e.right;n?n.style.transform="translate3d("+(100-100*u)+"%,0,0)":r&&(r.style.transform="translate3d("+(100-100*i)+"%,0,0)"),"function"==typeof t.onSlide&&t.onSlide({left:u,right:i},r,n,o)},onEnd:function(e,r,n){"function"==typeof t.onEnd&&t.onEnd(e,r,n)}}))};exports.default=coverRight;

},{"./wrapper":82,"babel-runtime/helpers/extends":9}],81:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.coverLeftRight=exports.coverRight=exports.coverLeft=exports.belt=void 0;var _belt=require("./belt"),_belt2=_interopRequireDefault(_belt),_coverLeft=require("./cover-left"),_coverLeft2=_interopRequireDefault(_coverLeft),_coverRight=require("./cover-right"),_coverRight2=_interopRequireDefault(_coverRight),_coverLeftRight=require("./cover-left-right"),_coverLeftRight2=_interopRequireDefault(_coverLeftRight);exports.belt=_belt2.default,exports.coverLeft=_coverLeft2.default,exports.coverRight=_coverRight2.default,exports.coverLeftRight=_coverLeftRight2.default;

},{"./belt":77,"./cover-left":79,"./cover-left-right":78,"./cover-right":80}],82:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _extends2=require("babel-runtime/helpers/extends"),_extends3=_interopRequireDefault(_extends2),_from=require("babel-runtime/core-js/array/from"),_from2=_interopRequireDefault(_from),_glider=require("../glider"),_glider2=_interopRequireDefault(_glider),_config=require("../config"),wrapper=function(e,t){var r=(0,_from2.default)(e.querySelectorAll("."+t.classNames.slide)||[]),n=(0,_from2.default)(e.querySelectorAll("."+t.classNames.dot)||[]),i=e.querySelector("."+t.classNames.nextButton),l=e.querySelector("."+t.classNames.prevButton),o=(0,_extends3.default)({},_config.PRESET_DEFAULTS,t,{onSlide:function(e,r,n,i){var l=e.left,o=e.right;"function"==typeof t.onSlide&&t.onSlide({left:l,right:o},r,n,i)},onEnd:function(e,i,l){n.forEach(function(e,n){e.classList.toggle(t.classNames.active,n===r.indexOf(l))}),r.forEach(function(e){e.style.transform=""}),"function"==typeof t.onEnd&&t.onEnd(e,i,l)}}),a=new _glider2.default(o);a.init(e),n.forEach(function(e,r){var n=function(){return a.goTo(r)};e.addEventListener("click",n),e.classList.toggle(o.classNames.active,r===(t.initialSlide||0))}),i.addEventListener("click",a.nextSlide),l.addEventListener("click",a.prevSlide)};exports.default=wrapper;

},{"../config":74,"../glider":75,"babel-runtime/core-js/array/from":3,"babel-runtime/helpers/extends":9}]},{},[1]);
