(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var _from=require("babel-runtime/core-js/array/from"),_from2=_interopRequireDefault(_from),_glider=require("../src/glider"),_glider2=_interopRequireDefault(_glider),_main=require("./main.css"),_main2=_interopRequireDefault(_main),gliders=(0,_from2.default)(document.querySelectorAll(".glider")),easing1=function(e){return Math.pow(e,2)},easing2=function(e){return Math.sqrt(e)};gliders.forEach(function(e){var r=(0,_from2.default)(e.querySelectorAll(".log")),t=e.querySelector(".next"),n=e.querySelector(".prev"),a=new _glider2.default({classNames:{pluginLoaded:_main2.default.pluginLoaded,active:_main2.default.active,previous:_main2.default.previous,next:_main2.default.next,back:_main2.default.back,init:_main2.default.init,slide:"jsHook"},speed:250,spring:125,initialSlide:4,snapBackAt:1/3,onSlide:function(e,t,n){var a=e.left,i=e.right;n.style.transform="translate3d("+-100*easing1(a)+"%,0,0)",t.style.transform="translate3d("+100*easing1(i)+"%,0,0)",r.forEach(function(e){e.parentNode===t?e.style.transform="translate3d("+100*easing2(i)+"%,0,0)":e.parentNode===n&&(e.style.transform="translate3d("+-100*easing2(a)+"%,0,0)")})},onEnd:function(e,t,n){n.style.transform="",t.style.transform="",e.style.transform="",r.forEach(function(r){r.parentNode===e&&(r.style.transform="translate3d(0,0,0)")})}});a.init(e),t.addEventListener("click",a.nextSlide),n.addEventListener("click",a.prevSlide)});

},{"../src/glider":103,"./main.css":2,"babel-runtime/core-js/array/from":3}],2:[function(require,module,exports){
module.exports = {"pluginLoaded":"a","active":"b","previous":"c","next":"d","prev":"e","init":"f","back":"g"}
},{}],3:[function(require,module,exports){
module.exports={default:require("core-js/library/fn/array/from"),__esModule:!0};
},{"core-js/library/fn/array/from":14}],4:[function(require,module,exports){
module.exports={default:require("core-js/library/fn/object/assign"),__esModule:!0};
},{"core-js/library/fn/object/assign":15}],5:[function(require,module,exports){
module.exports={default:require("core-js/library/fn/object/define-property"),__esModule:!0};

},{"core-js/library/fn/object/define-property":16}],6:[function(require,module,exports){
module.exports={default:require("core-js/library/fn/object/keys"),__esModule:!0};
},{"core-js/library/fn/object/keys":17}],7:[function(require,module,exports){
module.exports={default:require("core-js/library/fn/symbol"),__esModule:!0};
},{"core-js/library/fn/symbol":18}],8:[function(require,module,exports){
module.exports={default:require("core-js/library/fn/symbol/iterator"),__esModule:!0};

},{"core-js/library/fn/symbol/iterator":19}],9:[function(require,module,exports){
"use strict";exports.__esModule=!0,exports.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};

},{}],10:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}exports.__esModule=!0;var _defineProperty=require("../core-js/object/define-property"),_defineProperty2=_interopRequireDefault(_defineProperty);exports.default=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,_defineProperty2.default)(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}();

},{"../core-js/object/define-property":5}],11:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}exports.__esModule=!0;var _assign=require("../core-js/object/assign"),_assign2=_interopRequireDefault(_assign);exports.default=_assign2.default||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e};

},{"../core-js/object/assign":4}],12:[function(require,module,exports){
"use strict";function _interopRequireDefault(r){return r&&r.__esModule?r:{default:r}}exports.__esModule=!0;var _from=require("../core-js/array/from"),_from2=_interopRequireDefault(_from);exports.default=function(r){if(Array.isArray(r)){for(var e=0,t=Array(r.length);e<r.length;e++)t[e]=r[e];return t}return(0,_from2.default)(r)};

},{"../core-js/array/from":3}],13:[function(require,module,exports){
"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}exports.__esModule=!0;var _iterator=require("../core-js/symbol/iterator"),_iterator2=_interopRequireDefault(_iterator),_symbol=require("../core-js/symbol"),_symbol2=_interopRequireDefault(_symbol),_typeof="function"==typeof _symbol2.default&&"symbol"==typeof _iterator2.default?function(t){return typeof t}:function(t){return t&&"function"==typeof _symbol2.default&&t.constructor===_symbol2.default&&t!==_symbol2.default.prototype?"symbol":typeof t};exports.default="function"==typeof _symbol2.default&&"symbol"===_typeof(_iterator2.default)?function(t){return void 0===t?"undefined":_typeof(t)}:function(t){return t&&"function"==typeof _symbol2.default&&t.constructor===_symbol2.default&&t!==_symbol2.default.prototype?"symbol":void 0===t?"undefined":_typeof(t)};

},{"../core-js/symbol":7,"../core-js/symbol/iterator":8}],14:[function(require,module,exports){
require("../../modules/es6.string.iterator"),require("../../modules/es6.array.from"),module.exports=require("../../modules/_core").Array.from;
},{"../../modules/_core":26,"../../modules/es6.array.from":84,"../../modules/es6.string.iterator":90}],15:[function(require,module,exports){
require("../../modules/es6.object.assign"),module.exports=require("../../modules/_core").Object.assign;
},{"../../modules/_core":26,"../../modules/es6.object.assign":86}],16:[function(require,module,exports){
require("../../modules/es6.object.define-property");var $Object=require("../../modules/_core").Object;module.exports=function(e,r,o){return $Object.defineProperty(e,r,o)};

},{"../../modules/_core":26,"../../modules/es6.object.define-property":87}],17:[function(require,module,exports){
require("../../modules/es6.object.keys"),module.exports=require("../../modules/_core").Object.keys;
},{"../../modules/_core":26,"../../modules/es6.object.keys":88}],18:[function(require,module,exports){
require("../../modules/es6.symbol"),require("../../modules/es6.object.to-string"),require("../../modules/es7.symbol.async-iterator"),require("../../modules/es7.symbol.observable"),module.exports=require("../../modules/_core").Symbol;

},{"../../modules/_core":26,"../../modules/es6.object.to-string":89,"../../modules/es6.symbol":91,"../../modules/es7.symbol.async-iterator":92,"../../modules/es7.symbol.observable":93}],19:[function(require,module,exports){
require("../../modules/es6.string.iterator"),require("../../modules/web.dom.iterable"),module.exports=require("../../modules/_wks-ext").f("iterator");

},{"../../modules/_wks-ext":81,"../../modules/es6.string.iterator":90,"../../modules/web.dom.iterable":94}],20:[function(require,module,exports){
module.exports=function(o){if("function"!=typeof o)throw TypeError(o+" is not a function!");return o};

},{}],21:[function(require,module,exports){
module.exports=function(){};
},{}],22:[function(require,module,exports){
var isObject=require("./_is-object");module.exports=function(e){if(!isObject(e))throw TypeError(e+" is not an object!");return e};

},{"./_is-object":44}],23:[function(require,module,exports){
var toIObject=require("./_to-iobject"),toLength=require("./_to-length"),toIndex=require("./_to-index");module.exports=function(e){return function(t,r,n){var o,i=toIObject(t),u=toLength(i.length),f=toIndex(n,u);if(e&&r!=r){for(;u>f;)if((o=i[f++])!=o)return!0}else for(;u>f;f++)if((e||f in i)&&i[f]===r)return e||f||0;return!e&&-1}};
},{"./_to-index":73,"./_to-iobject":75,"./_to-length":76}],24:[function(require,module,exports){
var cof=require("./_cof"),TAG=require("./_wks")("toStringTag"),ARG="Arguments"==cof(function(){return arguments}()),tryGet=function(t,e){try{return t[e]}catch(t){}};module.exports=function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=tryGet(e=Object(t),TAG))?r:ARG?cof(e):"Object"==(n=cof(e))&&"function"==typeof e.callee?"Arguments":n};

},{"./_cof":25,"./_wks":82}],25:[function(require,module,exports){
var toString={}.toString;module.exports=function(t){return toString.call(t).slice(8,-1)};

},{}],26:[function(require,module,exports){
var core=module.exports={version:"2.4.0"};"number"==typeof __e&&(__e=core);

},{}],27:[function(require,module,exports){
"use strict";var $defineProperty=require("./_object-dp"),createDesc=require("./_property-desc");module.exports=function(e,r,t){r in e?$defineProperty.f(e,r,createDesc(0,t)):e[r]=t};

},{"./_object-dp":56,"./_property-desc":67}],28:[function(require,module,exports){
var aFunction=require("./_a-function");module.exports=function(n,r,t){if(aFunction(n),void 0===r)return n;switch(t){case 1:return function(t){return n.call(r,t)};case 2:return function(t,u){return n.call(r,t,u)};case 3:return function(t,u,e){return n.call(r,t,u,e)}}return function(){return n.apply(r,arguments)}};

},{"./_a-function":20}],29:[function(require,module,exports){
module.exports=function(o){if(void 0==o)throw TypeError("Can't call method on  "+o);return o};

},{}],30:[function(require,module,exports){
module.exports=!require("./_fails")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a});

},{"./_fails":35}],31:[function(require,module,exports){
var isObject=require("./_is-object"),document=require("./_global").document,is=isObject(document)&&isObject(document.createElement);module.exports=function(e){return is?document.createElement(e):{}};

},{"./_global":36,"./_is-object":44}],32:[function(require,module,exports){
module.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");

},{}],33:[function(require,module,exports){
var getKeys=require("./_object-keys"),gOPS=require("./_object-gops"),pIE=require("./_object-pie");module.exports=function(e){var r=getKeys(e),t=gOPS.f;if(t)for(var o,u=t(e),g=pIE.f,i=0;u.length>i;)g.call(e,o=u[i++])&&r.push(o);return r};

},{"./_object-gops":61,"./_object-keys":64,"./_object-pie":65}],34:[function(require,module,exports){
var global=require("./_global"),core=require("./_core"),ctx=require("./_ctx"),hide=require("./_hide"),PROTOTYPE="prototype",$export=function(e,r,t){var o,n,p,i=e&$export.F,x=e&$export.G,c=e&$export.S,l=e&$export.P,u=e&$export.B,a=e&$export.W,$=x?core:core[r]||(core[r]={}),P=$[PROTOTYPE],f=x?global:c?global[r]:(global[r]||{})[PROTOTYPE];x&&(t=r);for(o in t)(n=!i&&f&&void 0!==f[o])&&o in $||(p=n?f[o]:t[o],$[o]=x&&"function"!=typeof f[o]?t[o]:u&&n?ctx(p,global):a&&f[o]==p?function(e){var r=function(r,t,o){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(r);case 2:return new e(r,t)}return new e(r,t,o)}return e.apply(this,arguments)};return r[PROTOTYPE]=e[PROTOTYPE],r}(p):l&&"function"==typeof p?ctx(Function.call,p):p,l&&(($.virtual||($.virtual={}))[o]=p,e&$export.R&&P&&!P[o]&&hide(P,o,p)))};$export.F=1,$export.G=2,$export.S=4,$export.P=8,$export.B=16,$export.W=32,$export.U=64,$export.R=128,module.exports=$export;

},{"./_core":26,"./_ctx":28,"./_global":36,"./_hide":38}],35:[function(require,module,exports){
module.exports=function(r){try{return!!r()}catch(r){return!0}};

},{}],36:[function(require,module,exports){
var global=module.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=global);

},{}],37:[function(require,module,exports){
var hasOwnProperty={}.hasOwnProperty;module.exports=function(r,e){return hasOwnProperty.call(r,e)};

},{}],38:[function(require,module,exports){
var dP=require("./_object-dp"),createDesc=require("./_property-desc");module.exports=require("./_descriptors")?function(e,r,t){return dP.f(e,r,createDesc(1,t))}:function(e,r,t){return e[r]=t,e};

},{"./_descriptors":30,"./_object-dp":56,"./_property-desc":67}],39:[function(require,module,exports){
module.exports=require("./_global").document&&document.documentElement;

},{"./_global":36}],40:[function(require,module,exports){
module.exports=!require("./_descriptors")&&!require("./_fails")(function(){return 7!=Object.defineProperty(require("./_dom-create")("div"),"a",{get:function(){return 7}}).a});

},{"./_descriptors":30,"./_dom-create":31,"./_fails":35}],41:[function(require,module,exports){
var cof=require("./_cof");module.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==cof(e)?e.split(""):Object(e)};

},{"./_cof":25}],42:[function(require,module,exports){
var Iterators=require("./_iterators"),ITERATOR=require("./_wks")("iterator"),ArrayProto=Array.prototype;module.exports=function(r){return void 0!==r&&(Iterators.Array===r||ArrayProto[ITERATOR]===r)};

},{"./_iterators":50,"./_wks":82}],43:[function(require,module,exports){
var cof=require("./_cof");module.exports=Array.isArray||function(r){return"Array"==cof(r)};

},{"./_cof":25}],44:[function(require,module,exports){
module.exports=function(o){return"object"==typeof o?null!==o:"function"==typeof o};

},{}],45:[function(require,module,exports){
var anObject=require("./_an-object");module.exports=function(r,t,e,a){try{return a?t(anObject(e)[0],e[1]):t(e)}catch(t){var c=r.return;throw void 0!==c&&anObject(c.call(r)),t}};

},{"./_an-object":22}],46:[function(require,module,exports){
"use strict";var create=require("./_object-create"),descriptor=require("./_property-desc"),setToStringTag=require("./_set-to-string-tag"),IteratorPrototype={};require("./_hide")(IteratorPrototype,require("./_wks")("iterator"),function(){return this}),module.exports=function(r,t,e){r.prototype=create(IteratorPrototype,{next:descriptor(1,e)}),setToStringTag(r,t+" Iterator")};

},{"./_hide":38,"./_object-create":55,"./_property-desc":67,"./_set-to-string-tag":69,"./_wks":82}],47:[function(require,module,exports){
"use strict";var LIBRARY=require("./_library"),$export=require("./_export"),redefine=require("./_redefine"),hide=require("./_hide"),has=require("./_has"),Iterators=require("./_iterators"),$iterCreate=require("./_iter-create"),setToStringTag=require("./_set-to-string-tag"),getPrototypeOf=require("./_object-gpo"),ITERATOR=require("./_wks")("iterator"),BUGGY=!([].keys&&"next"in[].keys()),FF_ITERATOR="@@iterator",KEYS="keys",VALUES="values",returnThis=function(){return this};module.exports=function(e,r,t,i,n,o,s){$iterCreate(t,r,i);var u,a,T,R=function(e){if(!BUGGY&&e in f)return f[e];switch(e){case KEYS:case VALUES:return function(){return new t(this,e)}}return function(){return new t(this,e)}},A=r+" Iterator",E=n==VALUES,c=!1,f=e.prototype,h=f[ITERATOR]||f[FF_ITERATOR]||n&&f[n],I=h||R(n),p=n?E?R("entries"):I:void 0,_="Array"==r?f.entries||h:h;if(_&&(T=getPrototypeOf(_.call(new e)))!==Object.prototype&&(setToStringTag(T,A,!0),LIBRARY||has(T,ITERATOR)||hide(T,ITERATOR,returnThis)),E&&h&&h.name!==VALUES&&(c=!0,I=function(){return h.call(this)}),LIBRARY&&!s||!BUGGY&&!c&&f[ITERATOR]||hide(f,ITERATOR,I),Iterators[r]=I,Iterators[A]=returnThis,n)if(u={values:E?I:R(VALUES),keys:o?I:R(KEYS),entries:p},s)for(a in u)a in f||redefine(f,a,u[a]);else $export($export.P+$export.F*(BUGGY||c),r,u);return u};

},{"./_export":34,"./_has":37,"./_hide":38,"./_iter-create":46,"./_iterators":50,"./_library":52,"./_object-gpo":62,"./_redefine":68,"./_set-to-string-tag":69,"./_wks":82}],48:[function(require,module,exports){
var ITERATOR=require("./_wks")("iterator"),SAFE_CLOSING=!1;try{var riter=[7][ITERATOR]();riter.return=function(){SAFE_CLOSING=!0},Array.from(riter,function(){throw 2})}catch(r){}module.exports=function(r,t){if(!t&&!SAFE_CLOSING)return!1;var n=!1;try{var e=[7],u=e[ITERATOR]();u.next=function(){return{done:n=!0}},e[ITERATOR]=function(){return u},r(e)}catch(r){}return n};

},{"./_wks":82}],49:[function(require,module,exports){
module.exports=function(e,n){return{value:n,done:!!e}};

},{}],50:[function(require,module,exports){
module.exports={};

},{}],51:[function(require,module,exports){
var getKeys=require("./_object-keys"),toIObject=require("./_to-iobject");module.exports=function(e,t){for(var r,o=toIObject(e),c=getKeys(o),i=c.length,u=0;i>u;)if(o[r=c[u++]]===t)return r};

},{"./_object-keys":64,"./_to-iobject":75}],52:[function(require,module,exports){
module.exports=!0;

},{}],53:[function(require,module,exports){
var META=require("./_uid")("meta"),isObject=require("./_is-object"),has=require("./_has"),setDesc=require("./_object-dp").f,id=0,isExtensible=Object.isExtensible||function(){return!0},FREEZE=!require("./_fails")(function(){return isExtensible(Object.preventExtensions({}))}),setMeta=function(e){setDesc(e,META,{value:{i:"O"+ ++id,w:{}}})},fastKey=function(e,t){if(!isObject(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!has(e,META)){if(!isExtensible(e))return"F";if(!t)return"E";setMeta(e)}return e[META].i},getWeak=function(e,t){if(!has(e,META)){if(!isExtensible(e))return!0;if(!t)return!1;setMeta(e)}return e[META].w},onFreeze=function(e){return FREEZE&&meta.NEED&&isExtensible(e)&&!has(e,META)&&setMeta(e),e},meta=module.exports={KEY:META,NEED:!1,fastKey:fastKey,getWeak:getWeak,onFreeze:onFreeze};
},{"./_fails":35,"./_has":37,"./_is-object":44,"./_object-dp":56,"./_uid":79}],54:[function(require,module,exports){
"use strict";var getKeys=require("./_object-keys"),gOPS=require("./_object-gops"),pIE=require("./_object-pie"),toObject=require("./_to-object"),IObject=require("./_iobject"),$assign=Object.assign;module.exports=!$assign||require("./_fails")(function(){var e={},t={},r=Symbol(),s="abcdefghijklmnopqrst";return e[r]=7,s.split("").forEach(function(e){t[e]=e}),7!=$assign({},e)[r]||Object.keys($assign({},t)).join("")!=s})?function(e,t){for(var r=toObject(e),s=arguments.length,i=1,o=gOPS.f,c=pIE.f;s>i;)for(var n,a=IObject(arguments[i++]),g=o?getKeys(a).concat(o(a)):getKeys(a),b=g.length,j=0;b>j;)c.call(a,n=g[j++])&&(r[n]=a[n]);return r}:$assign;
},{"./_fails":35,"./_iobject":41,"./_object-gops":61,"./_object-keys":64,"./_object-pie":65,"./_to-object":77}],55:[function(require,module,exports){
var anObject=require("./_an-object"),dPs=require("./_object-dps"),enumBugKeys=require("./_enum-bug-keys"),IE_PROTO=require("./_shared-key")("IE_PROTO"),Empty=function(){},PROTOTYPE="prototype",createDict=function(){var e,t=require("./_dom-create")("iframe"),r=enumBugKeys.length;for(t.style.display="none",require("./_html").appendChild(t),t.src="javascript:",e=t.contentWindow.document,e.open(),e.write("<script>document.F=Object<\/script>"),e.close(),createDict=e.F;r--;)delete createDict[PROTOTYPE][enumBugKeys[r]];return createDict()};module.exports=Object.create||function(e,t){var r;return null!==e?(Empty[PROTOTYPE]=anObject(e),r=new Empty,Empty[PROTOTYPE]=null,r[IE_PROTO]=e):r=createDict(),void 0===t?r:dPs(r,t)};

},{"./_an-object":22,"./_dom-create":31,"./_enum-bug-keys":32,"./_html":39,"./_object-dps":57,"./_shared-key":70}],56:[function(require,module,exports){
var anObject=require("./_an-object"),IE8_DOM_DEFINE=require("./_ie8-dom-define"),toPrimitive=require("./_to-primitive"),dP=Object.defineProperty;exports.f=require("./_descriptors")?Object.defineProperty:function(e,r,t){if(anObject(e),r=toPrimitive(r,!0),anObject(t),IE8_DOM_DEFINE)try{return dP(e,r,t)}catch(e){}if("get"in t||"set"in t)throw TypeError("Accessors not supported!");return"value"in t&&(e[r]=t.value),e};

},{"./_an-object":22,"./_descriptors":30,"./_ie8-dom-define":40,"./_to-primitive":78}],57:[function(require,module,exports){
var dP=require("./_object-dp"),anObject=require("./_an-object"),getKeys=require("./_object-keys");module.exports=require("./_descriptors")?Object.defineProperties:function(e,r){anObject(e);for(var t,o=getKeys(r),c=o.length,i=0;c>i;)dP.f(e,t=o[i++],r[t]);return e};

},{"./_an-object":22,"./_descriptors":30,"./_object-dp":56,"./_object-keys":64}],58:[function(require,module,exports){
var pIE=require("./_object-pie"),createDesc=require("./_property-desc"),toIObject=require("./_to-iobject"),toPrimitive=require("./_to-primitive"),has=require("./_has"),IE8_DOM_DEFINE=require("./_ie8-dom-define"),gOPD=Object.getOwnPropertyDescriptor;exports.f=require("./_descriptors")?gOPD:function(e,r){if(e=toIObject(e),r=toPrimitive(r,!0),IE8_DOM_DEFINE)try{return gOPD(e,r)}catch(e){}if(has(e,r))return createDesc(!pIE.f.call(e,r),e[r])};

},{"./_descriptors":30,"./_has":37,"./_ie8-dom-define":40,"./_object-pie":65,"./_property-desc":67,"./_to-iobject":75,"./_to-primitive":78}],59:[function(require,module,exports){
var toIObject=require("./_to-iobject"),gOPN=require("./_object-gopn").f,toString={}.toString,windowNames="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],getWindowNames=function(e){try{return gOPN(e)}catch(e){return windowNames.slice()}};module.exports.f=function(e){return windowNames&&"[object Window]"==toString.call(e)?getWindowNames(e):gOPN(toIObject(e))};

},{"./_object-gopn":60,"./_to-iobject":75}],60:[function(require,module,exports){
var $keys=require("./_object-keys-internal"),hiddenKeys=require("./_enum-bug-keys").concat("length","prototype");exports.f=Object.getOwnPropertyNames||function(e){return $keys(e,hiddenKeys)};

},{"./_enum-bug-keys":32,"./_object-keys-internal":63}],61:[function(require,module,exports){
exports.f=Object.getOwnPropertySymbols;
},{}],62:[function(require,module,exports){
var has=require("./_has"),toObject=require("./_to-object"),IE_PROTO=require("./_shared-key")("IE_PROTO"),ObjectProto=Object.prototype;module.exports=Object.getPrototypeOf||function(t){return t=toObject(t),has(t,IE_PROTO)?t[IE_PROTO]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?ObjectProto:null};

},{"./_has":37,"./_shared-key":70,"./_to-object":77}],63:[function(require,module,exports){
var has=require("./_has"),toIObject=require("./_to-iobject"),arrayIndexOf=require("./_array-includes")(!1),IE_PROTO=require("./_shared-key")("IE_PROTO");module.exports=function(r,e){var a,t=toIObject(r),u=0,O=[];for(a in t)a!=IE_PROTO&&has(t,a)&&O.push(a);for(;e.length>u;)has(t,a=e[u++])&&(~arrayIndexOf(O,a)||O.push(a));return O};
},{"./_array-includes":23,"./_has":37,"./_shared-key":70,"./_to-iobject":75}],64:[function(require,module,exports){
var $keys=require("./_object-keys-internal"),enumBugKeys=require("./_enum-bug-keys");module.exports=Object.keys||function(e){return $keys(e,enumBugKeys)};
},{"./_enum-bug-keys":32,"./_object-keys-internal":63}],65:[function(require,module,exports){
exports.f={}.propertyIsEnumerable;

},{}],66:[function(require,module,exports){
var $export=require("./_export"),core=require("./_core"),fails=require("./_fails");module.exports=function(e,r){var o=(core.Object||{})[e]||Object[e],t={};t[e]=r(o),$export($export.S+$export.F*fails(function(){o(1)}),"Object",t)};

},{"./_core":26,"./_export":34,"./_fails":35}],67:[function(require,module,exports){
module.exports=function(e,r){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:r}};

},{}],68:[function(require,module,exports){
module.exports=require("./_hide");

},{"./_hide":38}],69:[function(require,module,exports){
var def=require("./_object-dp").f,has=require("./_has"),TAG=require("./_wks")("toStringTag");module.exports=function(e,r,o){e&&!has(e=o?e:e.prototype,TAG)&&def(e,TAG,{configurable:!0,value:r})};

},{"./_has":37,"./_object-dp":56,"./_wks":82}],70:[function(require,module,exports){
var shared=require("./_shared")("keys"),uid=require("./_uid");module.exports=function(e){return shared[e]||(shared[e]=uid(e))};

},{"./_shared":71,"./_uid":79}],71:[function(require,module,exports){
var global=require("./_global"),SHARED="__core-js_shared__",store=global[SHARED]||(global[SHARED]={});module.exports=function(o){return store[o]||(store[o]={})};

},{"./_global":36}],72:[function(require,module,exports){
var toInteger=require("./_to-integer"),defined=require("./_defined");module.exports=function(e){return function(r,t){var n,i,d=String(defined(r)),o=toInteger(t),u=d.length;return o<0||o>=u?e?"":void 0:(n=d.charCodeAt(o),n<55296||n>56319||o+1===u||(i=d.charCodeAt(o+1))<56320||i>57343?e?d.charAt(o):n:e?d.slice(o,o+2):i-56320+(n-55296<<10)+65536)}};

},{"./_defined":29,"./_to-integer":74}],73:[function(require,module,exports){
var toInteger=require("./_to-integer"),max=Math.max,min=Math.min;module.exports=function(e,t){return e=toInteger(e),e<0?max(e+t,0):min(e,t)};
},{"./_to-integer":74}],74:[function(require,module,exports){
var ceil=Math.ceil,floor=Math.floor;module.exports=function(o){return isNaN(o=+o)?0:(o>0?floor:ceil)(o)};

},{}],75:[function(require,module,exports){
var IObject=require("./_iobject"),defined=require("./_defined");module.exports=function(e){return IObject(defined(e))};

},{"./_defined":29,"./_iobject":41}],76:[function(require,module,exports){
var toInteger=require("./_to-integer"),min=Math.min;module.exports=function(e){return e>0?min(toInteger(e),9007199254740991):0};

},{"./_to-integer":74}],77:[function(require,module,exports){
var defined=require("./_defined");module.exports=function(e){return Object(defined(e))};

},{"./_defined":29}],78:[function(require,module,exports){
var isObject=require("./_is-object");module.exports=function(t,e){if(!isObject(t))return t;var r,i;if(e&&"function"==typeof(r=t.toString)&&!isObject(i=r.call(t)))return i;if("function"==typeof(r=t.valueOf)&&!isObject(i=r.call(t)))return i;if(!e&&"function"==typeof(r=t.toString)&&!isObject(i=r.call(t)))return i;throw TypeError("Can't convert object to primitive value")};

},{"./_is-object":44}],79:[function(require,module,exports){
var id=0,px=Math.random();module.exports=function(o){return"Symbol(".concat(void 0===o?"":o,")_",(++id+px).toString(36))};

},{}],80:[function(require,module,exports){
var global=require("./_global"),core=require("./_core"),LIBRARY=require("./_library"),wksExt=require("./_wks-ext"),defineProperty=require("./_object-dp").f;module.exports=function(e){var r=core.Symbol||(core.Symbol=LIBRARY?{}:global.Symbol||{});"_"==e.charAt(0)||e in r||defineProperty(r,e,{value:wksExt.f(e)})};

},{"./_core":26,"./_global":36,"./_library":52,"./_object-dp":56,"./_wks-ext":81}],81:[function(require,module,exports){
exports.f=require("./_wks");

},{"./_wks":82}],82:[function(require,module,exports){
var store=require("./_shared")("wks"),uid=require("./_uid"),Symbol=require("./_global").Symbol,USE_SYMBOL="function"==typeof Symbol,$exports=module.exports=function(o){return store[o]||(store[o]=USE_SYMBOL&&Symbol[o]||(USE_SYMBOL?Symbol:uid)("Symbol."+o))};$exports.store=store;

},{"./_global":36,"./_shared":71,"./_uid":79}],83:[function(require,module,exports){
var classof=require("./_classof"),ITERATOR=require("./_wks")("iterator"),Iterators=require("./_iterators");module.exports=require("./_core").getIteratorMethod=function(r){if(void 0!=r)return r[ITERATOR]||r["@@iterator"]||Iterators[classof(r)]};

},{"./_classof":24,"./_core":26,"./_iterators":50,"./_wks":82}],84:[function(require,module,exports){
"use strict";var ctx=require("./_ctx"),$export=require("./_export"),toObject=require("./_to-object"),call=require("./_iter-call"),isArrayIter=require("./_is-array-iter"),toLength=require("./_to-length"),createProperty=require("./_create-property"),getIterFn=require("./core.get-iterator-method");$export($export.S+$export.F*!require("./_iter-detect")(function(e){Array.from(e)}),"Array",{from:function(e){var r,t,o,i,a=toObject(e),c="function"==typeof this?this:Array,n=arguments.length,u=n>1?arguments[1]:void 0,l=void 0!==u,y=0,p=getIterFn(a);if(l&&(u=ctx(u,n>2?arguments[2]:void 0,2)),void 0==p||c==Array&&isArrayIter(p))for(r=toLength(a.length),t=new c(r);r>y;y++)createProperty(t,y,l?u(a[y],y):a[y]);else for(i=p.call(a),t=new c;!(o=i.next()).done;y++)createProperty(t,y,l?call(i,u,[o.value,y],!0):o.value);return t.length=y,t}});

},{"./_create-property":27,"./_ctx":28,"./_export":34,"./_is-array-iter":42,"./_iter-call":45,"./_iter-detect":48,"./_to-length":76,"./_to-object":77,"./core.get-iterator-method":83}],85:[function(require,module,exports){
"use strict";var addToUnscopables=require("./_add-to-unscopables"),step=require("./_iter-step"),Iterators=require("./_iterators"),toIObject=require("./_to-iobject");module.exports=require("./_iter-define")(Array,"Array",function(e,t){this._t=toIObject(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,s=this._i++;return!e||s>=e.length?(this._t=void 0,step(1)):"keys"==t?step(0,s):"values"==t?step(0,e[s]):step(0,[s,e[s]])},"values"),Iterators.Arguments=Iterators.Array,addToUnscopables("keys"),addToUnscopables("values"),addToUnscopables("entries");
},{"./_add-to-unscopables":21,"./_iter-define":47,"./_iter-step":49,"./_iterators":50,"./_to-iobject":75}],86:[function(require,module,exports){
var $export=require("./_export");$export($export.S+$export.F,"Object",{assign:require("./_object-assign")});
},{"./_export":34,"./_object-assign":54}],87:[function(require,module,exports){
var $export=require("./_export");$export($export.S+$export.F*!require("./_descriptors"),"Object",{defineProperty:require("./_object-dp").f});

},{"./_descriptors":30,"./_export":34,"./_object-dp":56}],88:[function(require,module,exports){
var toObject=require("./_to-object"),$keys=require("./_object-keys");require("./_object-sap")("keys",function(){return function(e){return $keys(toObject(e))}});
},{"./_object-keys":64,"./_object-sap":66,"./_to-object":77}],89:[function(require,module,exports){

},{}],90:[function(require,module,exports){
"use strict";var $at=require("./_string-at")(!0);require("./_iter-define")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,i=this._t,e=this._i;return e>=i.length?{value:void 0,done:!0}:(t=$at(i,e),this._i+=t.length,{value:t,done:!1})});
},{"./_iter-define":47,"./_string-at":72}],91:[function(require,module,exports){
"use strict";var global=require("./_global"),has=require("./_has"),DESCRIPTORS=require("./_descriptors"),$export=require("./_export"),redefine=require("./_redefine"),META=require("./_meta").KEY,$fails=require("./_fails"),shared=require("./_shared"),setToStringTag=require("./_set-to-string-tag"),uid=require("./_uid"),wks=require("./_wks"),wksExt=require("./_wks-ext"),wksDefine=require("./_wks-define"),keyOf=require("./_keyof"),enumKeys=require("./_enum-keys"),isArray=require("./_is-array"),anObject=require("./_an-object"),toIObject=require("./_to-iobject"),toPrimitive=require("./_to-primitive"),createDesc=require("./_property-desc"),_create=require("./_object-create"),gOPNExt=require("./_object-gopn-ext"),$GOPD=require("./_object-gopd"),$DP=require("./_object-dp"),$keys=require("./_object-keys"),gOPD=$GOPD.f,dP=$DP.f,gOPN=gOPNExt.f,$Symbol=global.Symbol,$JSON=global.JSON,_stringify=$JSON&&$JSON.stringify,PROTOTYPE="prototype",HIDDEN=wks("_hidden"),TO_PRIMITIVE=wks("toPrimitive"),isEnum={}.propertyIsEnumerable,SymbolRegistry=shared("symbol-registry"),AllSymbols=shared("symbols"),OPSymbols=shared("op-symbols"),ObjectProto=Object[PROTOTYPE],USE_NATIVE="function"==typeof $Symbol,QObject=global.QObject,setter=!QObject||!QObject[PROTOTYPE]||!QObject[PROTOTYPE].findChild,setSymbolDesc=DESCRIPTORS&&$fails(function(){return 7!=_create(dP({},"a",{get:function(){return dP(this,"a",{value:7}).a}})).a})?function(e,r,t){var o=gOPD(ObjectProto,r);o&&delete ObjectProto[r],dP(e,r,t),o&&e!==ObjectProto&&dP(ObjectProto,r,o)}:dP,wrap=function(e){var r=AllSymbols[e]=_create($Symbol[PROTOTYPE]);return r._k=e,r},isSymbol=USE_NATIVE&&"symbol"==typeof $Symbol.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof $Symbol},$defineProperty=function(e,r,t){return e===ObjectProto&&$defineProperty(OPSymbols,r,t),anObject(e),r=toPrimitive(r,!0),anObject(t),has(AllSymbols,r)?(t.enumerable?(has(e,HIDDEN)&&e[HIDDEN][r]&&(e[HIDDEN][r]=!1),t=_create(t,{enumerable:createDesc(0,!1)})):(has(e,HIDDEN)||dP(e,HIDDEN,createDesc(1,{})),e[HIDDEN][r]=!0),setSymbolDesc(e,r,t)):dP(e,r,t)},$defineProperties=function(e,r){anObject(e);for(var t,o=enumKeys(r=toIObject(r)),i=0,s=o.length;s>i;)$defineProperty(e,t=o[i++],r[t]);return e},$create=function(e,r){return void 0===r?_create(e):$defineProperties(_create(e),r)},$propertyIsEnumerable=function(e){var r=isEnum.call(this,e=toPrimitive(e,!0));return!(this===ObjectProto&&has(AllSymbols,e)&&!has(OPSymbols,e))&&(!(r||!has(this,e)||!has(AllSymbols,e)||has(this,HIDDEN)&&this[HIDDEN][e])||r)},$getOwnPropertyDescriptor=function(e,r){if(e=toIObject(e),r=toPrimitive(r,!0),e!==ObjectProto||!has(AllSymbols,r)||has(OPSymbols,r)){var t=gOPD(e,r);return!t||!has(AllSymbols,r)||has(e,HIDDEN)&&e[HIDDEN][r]||(t.enumerable=!0),t}},$getOwnPropertyNames=function(e){for(var r,t=gOPN(toIObject(e)),o=[],i=0;t.length>i;)has(AllSymbols,r=t[i++])||r==HIDDEN||r==META||o.push(r);return o},$getOwnPropertySymbols=function(e){for(var r,t=e===ObjectProto,o=gOPN(t?OPSymbols:toIObject(e)),i=[],s=0;o.length>s;)!has(AllSymbols,r=o[s++])||t&&!has(ObjectProto,r)||i.push(AllSymbols[r]);return i};USE_NATIVE||($Symbol=function(){if(this instanceof $Symbol)throw TypeError("Symbol is not a constructor!");var e=uid(arguments.length>0?arguments[0]:void 0),r=function(t){this===ObjectProto&&r.call(OPSymbols,t),has(this,HIDDEN)&&has(this[HIDDEN],e)&&(this[HIDDEN][e]=!1),setSymbolDesc(this,e,createDesc(1,t))};return DESCRIPTORS&&setter&&setSymbolDesc(ObjectProto,e,{configurable:!0,set:r}),wrap(e)},redefine($Symbol[PROTOTYPE],"toString",function(){return this._k}),$GOPD.f=$getOwnPropertyDescriptor,$DP.f=$defineProperty,require("./_object-gopn").f=gOPNExt.f=$getOwnPropertyNames,require("./_object-pie").f=$propertyIsEnumerable,require("./_object-gops").f=$getOwnPropertySymbols,DESCRIPTORS&&!require("./_library")&&redefine(ObjectProto,"propertyIsEnumerable",$propertyIsEnumerable,!0),wksExt.f=function(e){return wrap(wks(e))}),$export($export.G+$export.W+$export.F*!USE_NATIVE,{Symbol:$Symbol});for(var symbols="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),i=0;symbols.length>i;)wks(symbols[i++]);for(var symbols=$keys(wks.store),i=0;symbols.length>i;)wksDefine(symbols[i++]);$export($export.S+$export.F*!USE_NATIVE,"Symbol",{for:function(e){return has(SymbolRegistry,e+="")?SymbolRegistry[e]:SymbolRegistry[e]=$Symbol(e)},keyFor:function(e){if(isSymbol(e))return keyOf(SymbolRegistry,e);throw TypeError(e+" is not a symbol!")},useSetter:function(){setter=!0},useSimple:function(){setter=!1}}),$export($export.S+$export.F*!USE_NATIVE,"Object",{create:$create,defineProperty:$defineProperty,defineProperties:$defineProperties,getOwnPropertyDescriptor:$getOwnPropertyDescriptor,getOwnPropertyNames:$getOwnPropertyNames,getOwnPropertySymbols:$getOwnPropertySymbols}),$JSON&&$export($export.S+$export.F*(!USE_NATIVE||$fails(function(){var e=$Symbol();return"[null]"!=_stringify([e])||"{}"!=_stringify({a:e})||"{}"!=_stringify(Object(e))})),"JSON",{stringify:function(e){if(void 0!==e&&!isSymbol(e)){for(var r,t,o=[e],i=1;arguments.length>i;)o.push(arguments[i++]);return r=o[1],"function"==typeof r&&(t=r),!t&&isArray(r)||(r=function(e,r){if(t&&(r=t.call(this,e,r)),!isSymbol(r))return r}),o[1]=r,_stringify.apply($JSON,o)}}}),$Symbol[PROTOTYPE][TO_PRIMITIVE]||require("./_hide")($Symbol[PROTOTYPE],TO_PRIMITIVE,$Symbol[PROTOTYPE].valueOf),setToStringTag($Symbol,"Symbol"),setToStringTag(Math,"Math",!0),setToStringTag(global.JSON,"JSON",!0);
},{"./_an-object":22,"./_descriptors":30,"./_enum-keys":33,"./_export":34,"./_fails":35,"./_global":36,"./_has":37,"./_hide":38,"./_is-array":43,"./_keyof":51,"./_library":52,"./_meta":53,"./_object-create":55,"./_object-dp":56,"./_object-gopd":58,"./_object-gopn":60,"./_object-gopn-ext":59,"./_object-gops":61,"./_object-keys":64,"./_object-pie":65,"./_property-desc":67,"./_redefine":68,"./_set-to-string-tag":69,"./_shared":71,"./_to-iobject":75,"./_to-primitive":78,"./_uid":79,"./_wks":82,"./_wks-define":80,"./_wks-ext":81}],92:[function(require,module,exports){
require("./_wks-define")("asyncIterator");

},{"./_wks-define":80}],93:[function(require,module,exports){
require("./_wks-define")("observable");

},{"./_wks-define":80}],94:[function(require,module,exports){
require("./es6.array.iterator");for(var global=require("./_global"),hide=require("./_hide"),Iterators=require("./_iterators"),TO_STRING_TAG=require("./_wks")("toStringTag"),collections=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],i=0;i<5;i++){var NAME=collections[i],Collection=global[NAME],proto=Collection&&Collection.prototype;proto&&!proto[TO_STRING_TAG]&&hide(proto,TO_STRING_TAG,NAME),Iterators[NAME]=Iterators.Array}
},{"./_global":36,"./_hide":38,"./_iterators":50,"./_wks":82,"./es6.array.iterator":85}],95:[function(require,module,exports){
"use strict";module.exports=require("./lib/");

},{"./lib/":99}],96:[function(require,module,exports){
"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var _throttle=require("throttle-debounce/throttle"),_throttle2=_interopRequireDefault(_throttle),addEventListeners=function(t,e){var r=arguments.length<=2||void 0===arguments[2]?0:arguments[2];return r>0?(e.throttled=(0,_throttle2.default)(r,function(t){return e.default(t)}),window.addEventListener(t,e.throttled)):window.addEventListener(t,e.default),e};exports.default=addEventListeners;

},{"throttle-debounce/throttle":101}],97:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var checkLimit=function(e,t){return e?e>t?2:1:0};exports.default=checkLimit;

},{}],98:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var EVENTS=["scroll","resize","mousewheel","mousemove","mouseup","touchmove","touchend"];exports.default=EVENTS;

},{}],99:[function(require,module,exports){
"use strict";function _interopRequireDefault2(e){return e&&e.__esModule?e:{default:e}}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _assign=require("babel-runtime/core-js/object/assign"),_assign2=_interopRequireDefault2(_assign),_defineProperty=require("babel-runtime/core-js/object/define-property"),_defineProperty2=_interopRequireDefault2(_defineProperty),_iterator=require("babel-runtime/core-js/symbol/iterator"),_iterator2=_interopRequireDefault2(_iterator),_typeof3=require("babel-runtime/helpers/typeof"),_typeof4=_interopRequireDefault2(_typeof3),_symbol=require("babel-runtime/core-js/symbol"),_symbol2=_interopRequireDefault2(_symbol);Object.defineProperty(exports,"__esModule",{value:!0});var _typeof="function"==typeof _symbol2.default&&"symbol"===(0,_typeof4.default)(_iterator2.default)?function(e){return void 0===e?"undefined":(0,_typeof4.default)(e)}:function(e){return e&&"function"==typeof _symbol2.default&&e.constructor===_symbol2.default?"symbol":void 0===e?"undefined":(0,_typeof4.default)(e)},_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,_defineProperty2.default)(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),_throttle=require("throttle-debounce/throttle"),_throttle2=_interopRequireDefault(_throttle),_checkLimit2=require("./check-limit"),_checkLimit3=_interopRequireDefault(_checkLimit2),_removeEventListeners=require("./remove-event-listeners"),_removeEventListeners2=_interopRequireDefault(_removeEventListeners),_addEventListeners=require("./add-event-listeners"),_addEventListeners2=_interopRequireDefault(_addEventListeners),_events=require("./events"),_events2=_interopRequireDefault(_events),OneListener=function(){function e(t){_classCallCheck(this,e),this.options=(0,_assign2.default)({limit:10,throttle:100},t),this.handleScroll=this.handleScroll.bind(this),this.handleResize=this.handleResize.bind(this),this.handleMousewheel=this.handleMousewheel.bind(this),this.handleMousemove=this.handleMousemove.bind(this),this.handleMouseup=this.handleMouseup.bind(this),this.handleTouchmove=this.handleTouchmove.bind(this),this.handleTouchend=this.handleTouchend.bind(this),this.requestEventListener=this.requestEventListener.bind(this),this.cancelEventListener=this.cancelEventListener.bind(this),this.init()}return _createClass(e,[{key:"init",value:function(){var e=this;this.eventListeners={scroll:[],resize:[],mousewheel:[],mousemove:[],mouseup:[],touchmove:[],touchend:[]},this.state={scroll:0,resize:0,mousewheel:0,mousemove:0,mouseup:0,touchmove:0,touchend:0},this.handlers={scroll:{default:this.handleScroll,throttled:(0,_throttle2.default)(this.options.throttle,function(t){return e.handleScroll(t)})},resize:{default:this.handleResize,throttled:(0,_throttle2.default)(this.options.throttle,function(t){return e.handleResize(t)})},mousewheel:{default:this.handleMousewheel,throttled:(0,_throttle2.default)(this.options.throttle,function(t){return e.handleMousewheel(t)})},mousemove:{default:this.handleMousemove,throttled:(0,_throttle2.default)(this.options.throttle,function(t){return e.handleMousemove(t)})},mouseup:{default:this.handleMouseup,throttled:this.handleMouseup},touchmove:{default:this.handleTouchmove,throttled:(0,_throttle2.default)(this.options.throttle,function(t){return e.handleTouchmove(t)})},touchend:{default:this.handleTouchend,throttled:this.handleTouchend}},this.checkLimitAll(!0)}},{key:"checkLimit",value:function(e,t){var n=this.state[e],i=(0,_checkLimit3.default)(this.eventListeners[e].length,this.options.limit);if(i!==n||t)switch(this.state[e]=i,(0,_removeEventListeners2.default)(e,this.handlers[e]),i){case 2:this.handlers[e]=(0,_addEventListeners2.default)(e,this.handlers[e],this.options.throttle);break;case 1:this.handlers[e]=(0,_addEventListeners2.default)(e,this.handlers[e]);break;case 0:break;default:throw new Error("state should be on of [0,1,2] but was: "+this.state[e])}}},{key:"checkLimitAll",value:function(e){var t=this;_events2.default.forEach(function(n){return t.checkLimit(n,e)})}},{key:"requestEventListener",value:function(e,t){var n=this;if(!this.eventListeners.hasOwnProperty(e))throw new Error("Unkown event "+e);return this.eventListeners[e].push(t),this.checkLimit(e),function(){return n.cancelEventListener(e,t)}}},{key:"cancelEventListener",value:function(e,t){if(!this.eventListeners.hasOwnProperty(e))throw new Error("Unkown event "+e);var n=this.eventListeners[e].indexOf(t);-1!==n&&(this.eventListeners[e].splice(n,1),this.checkLimit(e))}},{key:"handleScroll",value:function(e){this.eventListeners.scroll.forEach(function(t){return window.requestAnimationFrame(function(){return t(e)})})}},{key:"handleResize",value:function(e){this.eventListeners.resize.forEach(function(t){return window.requestAnimationFrame(function(){return t(e)})})}},{key:"handleMousewheel",value:function(e){this.eventListeners.mousewheel.forEach(function(t){return window.requestAnimationFrame(function(){return t(e)})})}},{key:"handleMousemove",value:function(e){this.eventListeners.mousemove.forEach(function(t){return window.requestAnimationFrame(function(){return t(e)})})}},{key:"handleMouseup",value:function(e){this.eventListeners.mouseup.forEach(function(t){return t(e)})}},{key:"handleTouchmove",value:function(e){this.eventListeners.touchmove.forEach(function(t){return window.requestAnimationFrame(function(){return t(e)})})}},{key:"handleTouchend",value:function(e){this.eventListeners.touchend.forEach(function(t){return t(e)})}},{key:"debug",get:function(){return this.eventListeners}},{key:"limit",set:function(e){if("number"!=typeof e)throw new Error('value should be of type "number" instead got '+(void 0===e?"undefined":_typeof(e)));this.options.limit=e,this.checkLimitAll(!0)},get:function(){return this.options.limit}},{key:"throttle",set:function(e){if("number"!=typeof e)throw new Error('value should be of type "number" instead got '+(void 0===e?"undefined":_typeof(e)));this.options.throttle=e,this.checkLimitAll(!0)},get:function(){return this.options.throttle}}]),e}();exports.default=OneListener;

},{"./add-event-listeners":96,"./check-limit":97,"./events":98,"./remove-event-listeners":100,"babel-runtime/core-js/object/assign":4,"babel-runtime/core-js/object/define-property":5,"babel-runtime/core-js/symbol":7,"babel-runtime/core-js/symbol/iterator":8,"babel-runtime/helpers/typeof":13,"throttle-debounce/throttle":101}],100:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var removeEventListeners=function(e,t){window.removeEventListener(e,t.throttled),window.removeEventListener(e,t.default)};exports.default=removeEventListeners;

},{}],101:[function(require,module,exports){
module.exports=function(e,o,t,n){function i(){function i(){r=Number(new Date),t.apply(v,d)}function a(){u=void 0}var v=this,c=Number(new Date)-r,d=arguments;n&&!u&&i(),u&&clearTimeout(u),void 0===n&&c>e?i():!0!==o&&(u=setTimeout(n?a:i,void 0===n?e-c:e))}var u,r=0;return"boolean"!=typeof o&&(n=t,t=o,o=void 0),i};
},{}],102:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.cancelEventListener=exports.requestEventListener=void 0;var _oneListener=require("one-listener"),_oneListener2=_interopRequireDefault(_oneListener),one=new _oneListener2.default({limit:20,throttle:250}),requestEventListener=one.requestEventListener,cancelEventListener=one.cancelEventListener;exports.requestEventListener=requestEventListener,exports.cancelEventListener=cancelEventListener,exports.default=one;

},{"one-listener":95}],103:[function(require,module,exports){
(function (global){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _keys=require("babel-runtime/core-js/object/keys"),_keys2=_interopRequireDefault(_keys),_toConsumableArray2=require("babel-runtime/helpers/toConsumableArray"),_toConsumableArray3=_interopRequireDefault(_toConsumableArray2),_from=require("babel-runtime/core-js/array/from"),_from2=_interopRequireDefault(_from),_extends2=require("babel-runtime/helpers/extends"),_extends3=_interopRequireDefault(_extends2),_classCallCheck2=require("babel-runtime/helpers/classCallCheck"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=require("babel-runtime/helpers/createClass"),_createClass3=_interopRequireDefault(_createClass2),_eventListeners=require("../event-listeners"),PLUGIN_DEFAULTS={type:"cover",loop:!1,classNames:{pluginLoaded:"pluginLoaded",back:"back",active:"active",init:"init",previous:"previous",next:"next"},onSlide:null,onEnd:null,speed:250,spring:100,snapBackAt:.25,initialSlide:0},animate=function(e,t,s,i){var n=Date.now(),a=(s-t)/e;return function l(){var r=Date.now(),o=r-n;return e-o>0?(global.requestAnimationFrame(l),i(t+a*o)):(global.cancelAnimationFrame(l),i(s))}()},Glider=function(){function e(t){(0,_classCallCheck3.default)(this,e),this.options=(0,_extends3.default)({},PLUGIN_DEFAULTS,t),this.state={currentSlide:this.options.initialSlide},this.nextSlide=this.nextSlide.bind(this),this.prevSlide=this.prevSlide.bind(this),this.goTo=this.goTo.bind(this),this.handleDown=this.handleDown.bind(this),this.getClientX=this.getClientX.bind(this)}return(0,_createClass3.default)(e,[{key:"init",value:function(e){var t=this.options.classNames;this.el=e,this.addListeners(),this.slides=(0,_from2.default)(this.el.querySelectorAll("."+t.slide)),this.addSides(),this.addInitClassNames()}},{key:"addListeners",value:function(){this.listeners=[(0,_eventListeners.requestEventListener)("mousemove",this.handleMove.bind(this)),(0,_eventListeners.requestEventListener)("mouseup",this.handleUp.bind(this)),(0,_eventListeners.requestEventListener)("touchmove",this.handleMove.bind(this)),(0,_eventListeners.requestEventListener)("touchend",this.handleUp.bind(this))],this.el.addEventListener("mousedown",this.handleDown),this.el.addEventListener("touchstart",this.handleDown)}},{key:"removeListeners",value:function(){this.listeners.forEach(function(e){return e()}),this.el.removeEventListener("mousedown",this.handleDown),this.el.removeEventListener("touchstart",this.handleDown)}},{key:"addClassNames",value:function(e){var t=this.state,s=t.currentSlide,i=t.previousSlide,n=t.nextSlide,a=this.options.classNames;this.slides.forEach(function(t,l){var r=Boolean(e&&(l===i||l===n||l===s));t.classList.toggle(a.active,l===s),t.classList.toggle(a.next,l===n),t.classList.toggle(a.previous,l===i),t.classList.toggle(a.back,r)})}},{key:"addInitClassNames",value:function(){var e=this.options.classNames;this.el.classList.add(e.pluginLoaded),this.slides.forEach(function(t){t.classList.add(e.init)}),this.addSides(),this.addClassNames()}},{key:"removeClassNames",value:function(){var e,t=this.options.classNames;(e=this.el.classList).remove.apply(e,(0,_toConsumableArray3.default)((0,_keys2.default)(t).map(function(e){return t[e]})))}},{key:"destroy",value:function(){this.removeListeners(),this.removeClassNames()}},{key:"getClientX",value:function(e){var t=e.touches;return((void 0===t?[]:t)[0]||e).clientX}},{key:"addSides",value:function(){var e=this.state.currentSlide,t=this.slides.length;this.state=(0,_extends3.default)({},this.state,{nextSlide:(e+1)%t,previousSlide:(e-1+t)%t})}},{key:"handleDown",value:function(e){var t=this.options.classNames,s=this.getClientX(e);this.slides.forEach(function(e){e.classList.remove(t.init)}),this.state=(0,_extends3.default)({},this.state,{down:!0,xStart:s,x:0})}},{key:"handleUp",value:function(){if(this.state.down){this.state=(0,_extends3.default)({},this.state,{down:!1});var e=this.options.snapBackAt,t=this.state.x,s=t/this.el.offsetWidth,i=0;s<=-1*e?i=-1:s>=e&&(i=1),this.spring(s,i,this.options.spring)}}},{key:"nextSlide",value:function(){this.state.down=!1,this.spring(0,1,this.options.speed)}},{key:"prevSlide",value:function(){this.state.down=!1,this.spring(0,-1,this.options.speed)}},{key:"goTo",value:function(e){e>this.state.currentSlide?(this.state.nextSlide=e,this.nextSlide()):e<this.state.currentSlide&&(this.state.previousSlide=e,this.prevSlide())}},{key:"handleEnd",value:function(e){-1===e?this.state=(0,_extends3.default)({},this.state,{currentSlide:this.state.previousSlide}):1===e&&(this.state=(0,_extends3.default)({},this.state,{currentSlide:this.state.nextSlide}));var t=this.options.onEnd;if(this.addSides(),this.addClassNames(),"function"==typeof t){var s=this.state,i=s.currentSlide,n=s.previousSlide,a=s.nextSlide;t(this.slides[i],this.slides[a],this.slides[n])}}},{key:"spring",value:function(e,t,s){var i=this;animate(s,e,t,function(e){var s=e*i.el.offsetWidth;i.state=(0,_extends3.default)({},i.state,{x:s}),e===t?i.handleEnd(t):i.handleProgress()})}},{key:"handleMove",value:function(e){var t=this.state,s=t.down,i=t.xStart;if(s){var n=this.getClientX(e),a=i-n;this.state=(0,_extends3.default)({},this.state,{x:a}),this.handleProgress()}}},{key:"handleProgress",value:function(){var e=this.options.onSlide,t=this.state,s=t.currentSlide,i=t.nextSlide,n=t.previousSlide,a=t.x,l=a/this.el.offsetWidth;"function"==typeof e&&e({left:-1*Math.max(-1,-1-l),right:Math.min(1,1-l)},this.slides[i],this.slides[n],this.slides[s])}}]),e}();exports.default=Glider;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../event-listeners":102,"babel-runtime/core-js/array/from":3,"babel-runtime/core-js/object/keys":6,"babel-runtime/helpers/classCallCheck":9,"babel-runtime/helpers/createClass":10,"babel-runtime/helpers/extends":11,"babel-runtime/helpers/toConsumableArray":12}]},{},[1]);
