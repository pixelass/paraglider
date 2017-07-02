(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = {"jsSlides":"a","jsSlide":"b","jsDot":"c","jsPager":"d","jsNext":"e","jsPrev":"f","jsSlideshow":"g","jsCaption":"h","jsHeadline":"i","jsSubline":"j","jsDescription":"k"}
},{}],2:[function(require,module,exports){
"use strict";function _interopRequireDefault(s){return s&&s.__esModule?s:{default:s}}function _interopRequireWildcard(s){if(s&&s.__esModule)return s;var t={};if(null!=s)for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&(t[e]=s[e]);return t.default=s,t}var _easingUtils=require(74),easingUtils=_interopRequireWildcard(_easingUtils),_dataWrapper=require(78),_dataWrapper2=_interopRequireDefault(_dataWrapper),_helpers=require(77);require(3);var _hooks=require(1),_slideshow=require(4),classNames={pluginLoaded:_slideshow.isLoaded,current:_slideshow.isCurrent,previous:_slideshow.isPrevious,next:_slideshow.isNext,init:_slideshow.isInit,slides:_hooks.jsSlides,slide:_hooks.jsSlide,pager:_hooks.jsPager,dot:_hooks.jsDot,active:_slideshow.isActive,previousButton:_hooks.jsPrev,nextButton:_hooks.jsNext,disabled:_slideshow.isDisabled,dragging:_slideshow.isDragging,draggable:_slideshow.isDraggable,caption:_hooks.jsCaption,headline:_hooks.jsHeadline,subline:_hooks.jsSubline,description:_hooks.jsDescription},slideshows=(0,_helpers.findAll)("."+_hooks.jsSlideshow);slideshows.forEach(function(s){return(0,_dataWrapper2.default)(s,{classNames:classNames,onInit:function(s,t){var e=s.previous,a=s.next,r=s.current,l=s.rest,n=t.slides,i=t.captions,o=t.headlines,d=t.sublines,y=t.descriptions,c=t.pagers,p=t.dots;[e,a].concat(l).forEach(function(s){n[s].style.transform="translate3d(-100%,0,0)",c[s]&&(p[s].style.transform="scale3d(1,1,1)",p[s].style.opacity=1),i[s]&&(i[s].style.transform="translate3d(0,100%,0)",o[s].style.opacity=0,d[s].style.opacity=0,y[s].style.transform="translate3d(0,100%,0)")}),n[r].style.transform="translate3d(0,0,0)",c[r]&&(p[r].style.transform="scale3d(0.5,0.5,1)",p[r].style.opacity=.5),i[r]&&(i[r].style.transform="translate3d(0,0,0)",o[r].style.opacity=1,d[r].style.opacity=1,y[r].style.transform="translate3d(0,0,0)")},onEnd:function(s,t){var e=s.previous,a=s.next,r=s.current,l=s.rest,n=t.slides,i=t.captions,o=t.headlines,d=t.sublines,y=t.descriptions,c=t.pagers,p=t.dots;[e,a].concat(l).forEach(function(s){n[s].style.transform="translate3d(-100%,0,0)",c[s]&&(p[s].style.transform="scale3d(1,1,1)",p[s].style.opacity=1),i[s]&&(i[s].style.transform="translate3d(0,100%,0)",o[s].style.opacity=0,d[s].style.opacity=0,y[s].style.transform="translate3d(0,100%,0)")}),n[r].style.transform="translate3d(0,0,0)",c[r]&&(p[r].style.transform="scale3d(0.5,0.5,1)",p[r].style.opacity=.5),i[r]&&(i[r].style.transform="translate3d(0,0,0)",o[r].style.opacity=1,d[r].style.opacity=1,y[r].style.transform="translate3d(0,0,0)")},onSlide:function(s,t,e,a){var r=t.previous,l=t.next,n=t.current,i=(t.rest,e.slides),o=e.captions,d=e.headlines,y=e.sublines,c=e.descriptions,p=(e.pagers,e.dots),u=(e.nextTrigger,e.prevTrigger,a.easing?easingUtils[a.easing]||easingUtils.linear:easingUtils.linear),f=u(s),h=easingUtils.easeInQuart(s),_=easingUtils.easeOutQuart(s),m=.5+.5*_,g=1-.5*_;null!==r?(i[r].style.transform="translate3d("+(100*f-100)+"%,0,0)",i[n].style.transform="translate3d("+100*f+"%,0,0)",p[r]&&(p[r].style.transform="scale3d("+g+","+g+",1)",p[r].style.opacity=g),o[r]&&(o[r].style.transform="translate3d(0,"+(100-100*_)+"%,0)",d[r].style.opacity=h,y[r].style.opacity=h,c[r].style.transform="translate3d("+(100*h-100)+"%,0,0)",c[n].style.transform="translate3d("+100*_+"%,0,0)")):null!==l?(i[l].style.transform="translate3d("+(100-100*f)+"%,0,0)",i[n].style.transform="translate3d("+-100*f+"%,0,0)",p[l]&&(p[l].style.transform="scale3d("+g+","+g+",1)",p[l].style.opacity=g),o[l]&&(o[l].style.transform="translate3d(0,"+(100-100*_)+"%,0)",d[l].style.opacity=h,y[l].style.opacity=h,c[l].style.transform="translate3d("+(100-100*h)+"%,0,0)",c[n].style.transform="translate3d("+-100*_+"%,0,0)")):0===n?(i[n].style.transform="translate3d("+100*f+"%,0,0)",c[n].style.transform="translate3d("+100*_+"%,0,0)"):n===i.length-1&&(i[n].style.transform="translate3d("+-100*f+"%,0,0)",c[n].style.transform="translate3d("+-100*_+"%,0,0)"),p[n]&&(p[n].style.transform="scale3d("+m+","+m+",1)",p[n].style.opacity=m),o[n]&&(o[n].style.transform="translate3d(0,"+100*h+"%,0)",d[n].style.opacity=1-_,y[n].style.opacity=1-_)}})});

},{"1":1,"3":3,"4":4,"74":74,"77":77,"78":78}],3:[function(require,module,exports){
module.exports = {"header":"l","main":"m","footer":"n","nav":"o","navLink":"p","article":"q"}
},{}],4:[function(require,module,exports){
require(1)
module.exports = {"wrapper":"r","hidden":"s","visible":"t","fit":"u","-webkit-box-flex":"v","-ms-flex":"v","flex":"v","fill":"w","wrap":"x","vertical":"y","centerX":"z","centerY":"A","centerCenter":"B z A","betweenX":"C","endY":"D","endX":"E","slideshow":"F g v y r","isLoaded":"G","isInit":"H","slides":"I a w v r","isDraggable":"J","isDragging":"K","slide":"L b u","isCurrent":"M","isPrevious":"N","isNext":"O","image":"P","imageWrapper":"Q","pagers":"R v x z","pager":"S d v B z A","isActive":"T","dot":"U c","thumb":"V c","nav":"W u v s C A","button":"X v B z A t","isDisabled":"Y","previousButton":"Z f X v B z A t","nextButton":"aa e X v B z A t","caption":"ab u v y E s","captionBackground":"ac h t","headline":"ad i","subline":"ae j","description":"af k","artist":"ag"}
},{"1":1}],5:[function(require,module,exports){
module.exports={default:require(12),__esModule:!0};

},{"12":12}],6:[function(require,module,exports){
module.exports={default:require(13),__esModule:!0};
},{"13":13}],7:[function(require,module,exports){
module.exports={default:require(14),__esModule:!0};
},{"14":14}],8:[function(require,module,exports){
module.exports={default:require(15),__esModule:!0};
},{"15":15}],9:[function(require,module,exports){
"use strict";exports.__esModule=!0,exports.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};
},{}],10:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}exports.__esModule=!0;var _defineProperty=require(7),_defineProperty2=_interopRequireDefault(_defineProperty);exports.default=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,_defineProperty2.default)(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}();

},{"7":7}],11:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}exports.__esModule=!0;var _assign=require(6),_assign2=_interopRequireDefault(_assign);exports.default=_assign2.default||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e};
},{"6":6}],12:[function(require,module,exports){
require(73),require(69),module.exports=require(21).Array.from;
},{"21":21,"69":69,"73":73}],13:[function(require,module,exports){
require(70),module.exports=require(21).Object.assign;
},{"21":21,"70":70}],14:[function(require,module,exports){
require(71);var $Object=require(21).Object;module.exports=function(e,r,o){return $Object.defineProperty(e,r,o)};
},{"21":21,"71":71}],15:[function(require,module,exports){
require(72),module.exports=require(21).Object.keys;

},{"21":21,"72":72}],16:[function(require,module,exports){
module.exports=function(o){if("function"!=typeof o)throw TypeError(o+" is not a function!");return o};

},{}],17:[function(require,module,exports){
var isObject=require(37);module.exports=function(e){if(!isObject(e))throw TypeError(e+" is not an object!");return e};

},{"37":37}],18:[function(require,module,exports){
var toIObject=require(62),toLength=require(63),toIndex=require(60);module.exports=function(e){return function(t,r,n){var o,i=toIObject(t),u=toLength(i.length),f=toIndex(n,u);if(e&&r!=r){for(;u>f;)if((o=i[f++])!=o)return!0}else for(;u>f;f++)if((e||f in i)&&i[f]===r)return e||f||0;return!e&&-1}};

},{"60":60,"62":62,"63":63}],19:[function(require,module,exports){
var cof=require(20),TAG=require(67)("toStringTag"),ARG="Arguments"==cof(function(){return arguments}()),tryGet=function(t,e){try{return t[e]}catch(t){}};module.exports=function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=tryGet(e=Object(t),TAG))?r:ARG?cof(e):"Object"==(n=cof(e))&&"function"==typeof e.callee?"Arguments":n};

},{"20":20,"67":67}],20:[function(require,module,exports){
var toString={}.toString;module.exports=function(t){return toString.call(t).slice(8,-1)};

},{}],21:[function(require,module,exports){
var core=module.exports={version:"2.4.0"};"number"==typeof __e&&(__e=core);

},{}],22:[function(require,module,exports){
"use strict";var $defineProperty=require(46),createDesc=require(54);module.exports=function(e,r,t){r in e?$defineProperty.f(e,r,createDesc(0,t)):e[r]=t};

},{"46":46,"54":54}],23:[function(require,module,exports){
var aFunction=require(16);module.exports=function(n,r,t){if(aFunction(n),void 0===r)return n;switch(t){case 1:return function(t){return n.call(r,t)};case 2:return function(t,u){return n.call(r,t,u)};case 3:return function(t,u,e){return n.call(r,t,u,e)}}return function(){return n.apply(r,arguments)}};

},{"16":16}],24:[function(require,module,exports){
module.exports=function(o){if(void 0==o)throw TypeError("Can't call method on  "+o);return o};

},{}],25:[function(require,module,exports){
module.exports=!require(29)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a});

},{"29":29}],26:[function(require,module,exports){
var isObject=require(37),document=require(30).document,is=isObject(document)&&isObject(document.createElement);module.exports=function(e){return is?document.createElement(e):{}};

},{"30":30,"37":37}],27:[function(require,module,exports){
module.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");

},{}],28:[function(require,module,exports){
var global=require(30),core=require(21),ctx=require(23),hide=require(32),PROTOTYPE="prototype",$export=function(e,r,t){var o,n,p,i=e&$export.F,x=e&$export.G,c=e&$export.S,l=e&$export.P,u=e&$export.B,a=e&$export.W,$=x?core:core[r]||(core[r]={}),P=$[PROTOTYPE],f=x?global:c?global[r]:(global[r]||{})[PROTOTYPE];x&&(t=r);for(o in t)(n=!i&&f&&void 0!==f[o])&&o in $||(p=n?f[o]:t[o],$[o]=x&&"function"!=typeof f[o]?t[o]:u&&n?ctx(p,global):a&&f[o]==p?function(e){var r=function(r,t,o){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(r);case 2:return new e(r,t)}return new e(r,t,o)}return e.apply(this,arguments)};return r[PROTOTYPE]=e[PROTOTYPE],r}(p):l&&"function"==typeof p?ctx(Function.call,p):p,l&&(($.virtual||($.virtual={}))[o]=p,e&$export.R&&P&&!P[o]&&hide(P,o,p)))};$export.F=1,$export.G=2,$export.S=4,$export.P=8,$export.B=16,$export.W=32,$export.U=64,$export.R=128,module.exports=$export;

},{"21":21,"23":23,"30":30,"32":32}],29:[function(require,module,exports){
module.exports=function(r){try{return!!r()}catch(r){return!0}};

},{}],30:[function(require,module,exports){
var global=module.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=global);

},{}],31:[function(require,module,exports){
var hasOwnProperty={}.hasOwnProperty;module.exports=function(r,e){return hasOwnProperty.call(r,e)};

},{}],32:[function(require,module,exports){
var dP=require(46),createDesc=require(54);module.exports=require(25)?function(e,r,t){return dP.f(e,r,createDesc(1,t))}:function(e,r,t){return e[r]=t,e};

},{"25":25,"46":46,"54":54}],33:[function(require,module,exports){
module.exports=require(30).document&&document.documentElement;

},{"30":30}],34:[function(require,module,exports){
module.exports=!require(25)&&!require(29)(function(){return 7!=Object.defineProperty(require(26)("div"),"a",{get:function(){return 7}}).a});

},{"25":25,"26":26,"29":29}],35:[function(require,module,exports){
var cof=require(20);module.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==cof(e)?e.split(""):Object(e)};

},{"20":20}],36:[function(require,module,exports){
var Iterators=require(42),ITERATOR=require(67)("iterator"),ArrayProto=Array.prototype;module.exports=function(r){return void 0!==r&&(Iterators.Array===r||ArrayProto[ITERATOR]===r)};

},{"42":42,"67":67}],37:[function(require,module,exports){
module.exports=function(o){return"object"==typeof o?null!==o:"function"==typeof o};

},{}],38:[function(require,module,exports){
var anObject=require(17);module.exports=function(r,t,e,a){try{return a?t(anObject(e)[0],e[1]):t(e)}catch(t){var c=r.return;throw void 0!==c&&anObject(c.call(r)),t}};

},{"17":17}],39:[function(require,module,exports){
"use strict";var create=require(45),descriptor=require(54),setToStringTag=require(56),IteratorPrototype={};require(32)(IteratorPrototype,require(67)("iterator"),function(){return this}),module.exports=function(r,t,e){r.prototype=create(IteratorPrototype,{next:descriptor(1,e)}),setToStringTag(r,t+" Iterator")};

},{"32":32,"45":45,"54":54,"56":56,"67":67}],40:[function(require,module,exports){
"use strict";var LIBRARY=require(43),$export=require(28),redefine=require(55),hide=require(32),has=require(31),Iterators=require(42),$iterCreate=require(39),setToStringTag=require(56),getPrototypeOf=require(49),ITERATOR=require(67)("iterator"),BUGGY=!([].keys&&"next"in[].keys()),FF_ITERATOR="@@iterator",KEYS="keys",VALUES="values",returnThis=function(){return this};module.exports=function(e,r,t,i,n,o,s){$iterCreate(t,r,i);var u,a,T,R=function(e){if(!BUGGY&&e in f)return f[e];switch(e){case KEYS:case VALUES:return function(){return new t(this,e)}}return function(){return new t(this,e)}},A=r+" Iterator",E=n==VALUES,c=!1,f=e.prototype,h=f[ITERATOR]||f[FF_ITERATOR]||n&&f[n],I=h||R(n),p=n?E?R("entries"):I:void 0,_="Array"==r?f.entries||h:h;if(_&&(T=getPrototypeOf(_.call(new e)))!==Object.prototype&&(setToStringTag(T,A,!0),LIBRARY||has(T,ITERATOR)||hide(T,ITERATOR,returnThis)),E&&h&&h.name!==VALUES&&(c=!0,I=function(){return h.call(this)}),LIBRARY&&!s||!BUGGY&&!c&&f[ITERATOR]||hide(f,ITERATOR,I),Iterators[r]=I,Iterators[A]=returnThis,n)if(u={values:E?I:R(VALUES),keys:o?I:R(KEYS),entries:p},s)for(a in u)a in f||redefine(f,a,u[a]);else $export($export.P+$export.F*(BUGGY||c),r,u);return u};

},{"28":28,"31":31,"32":32,"39":39,"42":42,"43":43,"49":49,"55":55,"56":56,"67":67}],41:[function(require,module,exports){
var ITERATOR=require(67)("iterator"),SAFE_CLOSING=!1;try{var riter=[7][ITERATOR]();riter.return=function(){SAFE_CLOSING=!0},Array.from(riter,function(){throw 2})}catch(r){}module.exports=function(r,t){if(!t&&!SAFE_CLOSING)return!1;var n=!1;try{var e=[7],u=e[ITERATOR]();u.next=function(){return{done:n=!0}},e[ITERATOR]=function(){return u},r(e)}catch(r){}return n};

},{"67":67}],42:[function(require,module,exports){
module.exports={};

},{}],43:[function(require,module,exports){
module.exports=!0;

},{}],44:[function(require,module,exports){
"use strict";var getKeys=require(51),gOPS=require(48),pIE=require(52),toObject=require(64),IObject=require(35),$assign=Object.assign;module.exports=!$assign||require(29)(function(){var e={},t={},r=Symbol(),s="abcdefghijklmnopqrst";return e[r]=7,s.split("").forEach(function(e){t[e]=e}),7!=$assign({},e)[r]||Object.keys($assign({},t)).join("")!=s})?function(e,t){for(var r=toObject(e),s=arguments.length,i=1,o=gOPS.f,c=pIE.f;s>i;)for(var n,a=IObject(arguments[i++]),g=o?getKeys(a).concat(o(a)):getKeys(a),b=g.length,j=0;b>j;)c.call(a,n=g[j++])&&(r[n]=a[n]);return r}:$assign;
},{"29":29,"35":35,"48":48,"51":51,"52":52,"64":64}],45:[function(require,module,exports){
var anObject=require(17),dPs=require(47),enumBugKeys=require(27),IE_PROTO=require(57)("IE_PROTO"),Empty=function(){},PROTOTYPE="prototype",createDict=function(){var e,t=require(26)("iframe"),r=enumBugKeys.length;for(t.style.display="none",require(33).appendChild(t),t.src="javascript:",e=t.contentWindow.document,e.open(),e.write("<script>document.F=Object<\/script>"),e.close(),createDict=e.F;r--;)delete createDict[PROTOTYPE][enumBugKeys[r]];return createDict()};module.exports=Object.create||function(e,t){var r;return null!==e?(Empty[PROTOTYPE]=anObject(e),r=new Empty,Empty[PROTOTYPE]=null,r[IE_PROTO]=e):r=createDict(),void 0===t?r:dPs(r,t)};

},{"17":17,"26":26,"27":27,"33":33,"47":47,"57":57}],46:[function(require,module,exports){
var anObject=require(17),IE8_DOM_DEFINE=require(34),toPrimitive=require(65),dP=Object.defineProperty;exports.f=require(25)?Object.defineProperty:function(e,r,t){if(anObject(e),r=toPrimitive(r,!0),anObject(t),IE8_DOM_DEFINE)try{return dP(e,r,t)}catch(e){}if("get"in t||"set"in t)throw TypeError("Accessors not supported!");return"value"in t&&(e[r]=t.value),e};

},{"17":17,"25":25,"34":34,"65":65}],47:[function(require,module,exports){
var dP=require(46),anObject=require(17),getKeys=require(51);module.exports=require(25)?Object.defineProperties:function(e,r){anObject(e);for(var t,o=getKeys(r),c=o.length,i=0;c>i;)dP.f(e,t=o[i++],r[t]);return e};

},{"17":17,"25":25,"46":46,"51":51}],48:[function(require,module,exports){
exports.f=Object.getOwnPropertySymbols;
},{}],49:[function(require,module,exports){
var has=require(31),toObject=require(64),IE_PROTO=require(57)("IE_PROTO"),ObjectProto=Object.prototype;module.exports=Object.getPrototypeOf||function(t){return t=toObject(t),has(t,IE_PROTO)?t[IE_PROTO]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?ObjectProto:null};

},{"31":31,"57":57,"64":64}],50:[function(require,module,exports){
var has=require(31),toIObject=require(62),arrayIndexOf=require(18)(!1),IE_PROTO=require(57)("IE_PROTO");module.exports=function(r,e){var a,t=toIObject(r),u=0,O=[];for(a in t)a!=IE_PROTO&&has(t,a)&&O.push(a);for(;e.length>u;)has(t,a=e[u++])&&(~arrayIndexOf(O,a)||O.push(a));return O};

},{"18":18,"31":31,"57":57,"62":62}],51:[function(require,module,exports){
var $keys=require(50),enumBugKeys=require(27);module.exports=Object.keys||function(e){return $keys(e,enumBugKeys)};

},{"27":27,"50":50}],52:[function(require,module,exports){
exports.f={}.propertyIsEnumerable;

},{}],53:[function(require,module,exports){
var $export=require(28),core=require(21),fails=require(29);module.exports=function(e,r){var o=(core.Object||{})[e]||Object[e],t={};t[e]=r(o),$export($export.S+$export.F*fails(function(){o(1)}),"Object",t)};

},{"21":21,"28":28,"29":29}],54:[function(require,module,exports){
module.exports=function(e,r){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:r}};

},{}],55:[function(require,module,exports){
module.exports=require(32);

},{"32":32}],56:[function(require,module,exports){
var def=require(46).f,has=require(31),TAG=require(67)("toStringTag");module.exports=function(e,r,o){e&&!has(e=o?e:e.prototype,TAG)&&def(e,TAG,{configurable:!0,value:r})};

},{"31":31,"46":46,"67":67}],57:[function(require,module,exports){
var shared=require(58)("keys"),uid=require(66);module.exports=function(e){return shared[e]||(shared[e]=uid(e))};

},{"58":58,"66":66}],58:[function(require,module,exports){
var global=require(30),SHARED="__core-js_shared__",store=global[SHARED]||(global[SHARED]={});module.exports=function(o){return store[o]||(store[o]={})};

},{"30":30}],59:[function(require,module,exports){
var toInteger=require(61),defined=require(24);module.exports=function(e){return function(r,t){var n,i,d=String(defined(r)),o=toInteger(t),u=d.length;return o<0||o>=u?e?"":void 0:(n=d.charCodeAt(o),n<55296||n>56319||o+1===u||(i=d.charCodeAt(o+1))<56320||i>57343?e?d.charAt(o):n:e?d.slice(o,o+2):i-56320+(n-55296<<10)+65536)}};

},{"24":24,"61":61}],60:[function(require,module,exports){
var toInteger=require(61),max=Math.max,min=Math.min;module.exports=function(e,t){return e=toInteger(e),e<0?max(e+t,0):min(e,t)};

},{"61":61}],61:[function(require,module,exports){
var ceil=Math.ceil,floor=Math.floor;module.exports=function(o){return isNaN(o=+o)?0:(o>0?floor:ceil)(o)};

},{}],62:[function(require,module,exports){
var IObject=require(35),defined=require(24);module.exports=function(e){return IObject(defined(e))};

},{"24":24,"35":35}],63:[function(require,module,exports){
var toInteger=require(61),min=Math.min;module.exports=function(e){return e>0?min(toInteger(e),9007199254740991):0};

},{"61":61}],64:[function(require,module,exports){
var defined=require(24);module.exports=function(e){return Object(defined(e))};

},{"24":24}],65:[function(require,module,exports){
var isObject=require(37);module.exports=function(t,e){if(!isObject(t))return t;var r,i;if(e&&"function"==typeof(r=t.toString)&&!isObject(i=r.call(t)))return i;if("function"==typeof(r=t.valueOf)&&!isObject(i=r.call(t)))return i;if(!e&&"function"==typeof(r=t.toString)&&!isObject(i=r.call(t)))return i;throw TypeError("Can't convert object to primitive value")};

},{"37":37}],66:[function(require,module,exports){
var id=0,px=Math.random();module.exports=function(o){return"Symbol(".concat(void 0===o?"":o,")_",(++id+px).toString(36))};

},{}],67:[function(require,module,exports){
var store=require(58)("wks"),uid=require(66),Symbol=require(30).Symbol,USE_SYMBOL="function"==typeof Symbol,$exports=module.exports=function(o){return store[o]||(store[o]=USE_SYMBOL&&Symbol[o]||(USE_SYMBOL?Symbol:uid)("Symbol."+o))};$exports.store=store;

},{"30":30,"58":58,"66":66}],68:[function(require,module,exports){
var classof=require(19),ITERATOR=require(67)("iterator"),Iterators=require(42);module.exports=require(21).getIteratorMethod=function(r){if(void 0!=r)return r[ITERATOR]||r["@@iterator"]||Iterators[classof(r)]};

},{"19":19,"21":21,"42":42,"67":67}],69:[function(require,module,exports){
"use strict";var ctx=require(23),$export=require(28),toObject=require(64),call=require(38),isArrayIter=require(36),toLength=require(63),createProperty=require(22),getIterFn=require(68);$export($export.S+$export.F*!require(41)(function(e){Array.from(e)}),"Array",{from:function(e){var r,t,o,i,a=toObject(e),c="function"==typeof this?this:Array,n=arguments.length,u=n>1?arguments[1]:void 0,l=void 0!==u,y=0,p=getIterFn(a);if(l&&(u=ctx(u,n>2?arguments[2]:void 0,2)),void 0==p||c==Array&&isArrayIter(p))for(r=toLength(a.length),t=new c(r);r>y;y++)createProperty(t,y,l?u(a[y],y):a[y]);else for(i=p.call(a),t=new c;!(o=i.next()).done;y++)createProperty(t,y,l?call(i,u,[o.value,y],!0):o.value);return t.length=y,t}});

},{"22":22,"23":23,"28":28,"36":36,"38":38,"41":41,"63":63,"64":64,"68":68}],70:[function(require,module,exports){
var $export=require(28);$export($export.S+$export.F,"Object",{assign:require(44)});
},{"28":28,"44":44}],71:[function(require,module,exports){
var $export=require(28);$export($export.S+$export.F*!require(25),"Object",{defineProperty:require(46).f});
},{"25":25,"28":28,"46":46}],72:[function(require,module,exports){
var toObject=require(64),$keys=require(51);require(53)("keys",function(){return function(e){return $keys(toObject(e))}});

},{"51":51,"53":53,"64":64}],73:[function(require,module,exports){
"use strict";var $at=require(59)(!0);require(40)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,i=this._t,e=this._i;return e>=i.length?{value:void 0,done:!0}:(t=$at(i,e),this._i+=t.length,{value:t,done:!1})});
},{"40":40,"59":59}],74:[function(require,module,exports){
"use strict";function linear(e){return e}function easeInSine(e){return-1*Math.cos(e*(Math.PI/2))+1}function easeOutSine(e){return Math.sin(e*(Math.PI/2))}function easeInOutSine(e){return-.5*(Math.cos(Math.PI*e)-1)}function easeInQuad(e){return e*e}function easeOutQuad(e){return e*(2-e)}function easeInOutQuad(e){return e<.5?2*e*e:(4-2*e)*e-1}function easeInCubic(e){return e*e*e}function easeOutCubic(e){var t=e-1;return t*t*t+1}function easeInOutCubic(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1}function easeInQuart(e){return e*e*e*e}function easeOutQuart(e){var t=e-1;return 1-t*t*t*t}function easeInOutQuart(e){var t=e-1;return e<.5?8*e*e*e*e:1-8*t*t*t*t}function easeInQuint(e){return e*e*e*e*e}function easeOutQuint(e){var t=e-1;return 1+t*t*t*t*t}function easeInOutQuint(e){var t=e-1;return e<.5?16*e*e*e*e*e:1+16*t*t*t*t*t}function easeInExpo(e){return 0===e?0:Math.pow(2,10*(e-1))}function easeOutExpo(e){return 1===e?1:1-Math.pow(2,-10*e)}function easeInOutExpo(e){if(0===e||1===e)return e;var t=2*e,n=t-1;return t<1?.5*Math.pow(2,10*n):.5*(2-Math.pow(2,-10*n))}function easeInCirc(e){var t=e/1;return-1*(Math.sqrt(1-t*e)-1)}function easeOutCirc(e){var t=e-1;return Math.sqrt(1-t*t)}function easeInOutCirc(e){var t=2*e,n=t-2;return t<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-n*n)+1)}function easeInBack(e){var t=arguments.length<=1||void 0===arguments[1]?1.70158:arguments[1],n=e/1;return n*n*((t+1)*n-t)}function easeOutBack(e){var t=arguments.length<=1||void 0===arguments[1]?1.70158:arguments[1],n=e/1-1;return n*n*((t+1)*n+t)+1}function easeInOutBack(e){var t=arguments.length<=1||void 0===arguments[1]?1.70158:arguments[1],n=2*e,a=n-2,u=1.525*t;return n<1?.5*n*n*((u+1)*n-u):.5*(a*a*((u+1)*a+u)+2)}function easeInElastic(e){var t=arguments.length<=1||void 0===arguments[1]?.7:arguments[1];if(0===e||1===e)return e;var n=e/1,a=n-1,u=1-t,r=u/(2*Math.PI)*Math.asin(1);return-Math.pow(2,10*a)*Math.sin((a-r)*(2*Math.PI)/u)}function easeOutElastic(e){var t=arguments.length<=1||void 0===arguments[1]?.7:arguments[1],n=1-t,a=2*e;if(0===e||1===e)return e;var u=n/(2*Math.PI)*Math.asin(1);return Math.pow(2,-10*a)*Math.sin((a-u)*(2*Math.PI)/n)+1}function easeInOutElastic(e){var t=arguments.length<=1||void 0===arguments[1]?.65:arguments[1],n=1-t;if(0===e||1===e)return e;var a=2*e,u=a-1,r=n/(2*Math.PI)*Math.asin(1);return a<1?Math.pow(2,10*u)*Math.sin((u-r)*(2*Math.PI)/n)*-.5:Math.pow(2,-10*u)*Math.sin((u-r)*(2*Math.PI)/n)*.5+1}function easeOutBounce(e){var t=e/1;if(t<1/2.75)return 7.5625*t*t;if(t<2/2.75){var n=t-1.5/2.75;return 7.5625*n*n+.75}if(t<2.5/2.75){var a=t-2.25/2.75;return 7.5625*a*a+.9375}var u=t-2.625/2.75;return 7.5625*u*u+.984375}function easeInBounce(e){return 1-easeOutBounce(1-e)}function easeInOutBounce(e){return e<.5?.5*easeInBounce(2*e):.5*easeOutBounce(2*e-1)+.5}Object.defineProperty(exports,"__esModule",{value:!0}),exports.linear=linear,exports.easeInSine=easeInSine,exports.easeOutSine=easeOutSine,exports.easeInOutSine=easeInOutSine,exports.easeInQuad=easeInQuad,exports.easeOutQuad=easeOutQuad,exports.easeInOutQuad=easeInOutQuad,exports.easeInCubic=easeInCubic,exports.easeOutCubic=easeOutCubic,exports.easeInOutCubic=easeInOutCubic,exports.easeInQuart=easeInQuart,exports.easeOutQuart=easeOutQuart,exports.easeInOutQuart=easeInOutQuart,exports.easeInQuint=easeInQuint,exports.easeOutQuint=easeOutQuint,exports.easeInOutQuint=easeInOutQuint,exports.easeInExpo=easeInExpo,exports.easeOutExpo=easeOutExpo,exports.easeInOutExpo=easeInOutExpo,exports.easeInCirc=easeInCirc,exports.easeOutCirc=easeOutCirc,exports.easeInOutCirc=easeInOutCirc,exports.easeInBack=easeInBack,exports.easeOutBack=easeOutBack,exports.easeInOutBack=easeInOutBack,exports.easeInElastic=easeInElastic,exports.easeOutElastic=easeOutElastic,exports.easeInOutElastic=easeInOutElastic,exports.easeOutBounce=easeOutBounce,exports.easeInBounce=easeInBounce,exports.easeInOutBounce=easeInOutBounce;
},{}],75:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}exports.__esModule=!0,exports.PRESET_DEFAULTS=exports.PLUGIN_DEFAULTS=exports.classNames=void 0;var _extends2=require(11),_extends3=_interopRequireDefault(_extends2),classNames={pluginLoaded:"pluginLoaded",slide:"slide",slides:"slides",init:"init",current:"current",previous:"previous",next:"next"},PLUGIN_DEFAULTS={classNames:classNames,addClasses:{previous:!0,current:!0,next:!0},addMultiClasses:{current:!0},enableTouch:!0,enableSwipe:!0,loop:!0,onInit:null,onDestroy:null,onSlide:null,onEnd:null,speed:250,spring:100,snapBackAt:.25,threshold:10,initialSlide:0,visibleSlides:1,slideBy:1},PRESET_DEFAULTS=(0,_extends3.default)({},PLUGIN_DEFAULTS,{classNames:(0,_extends3.default)({},classNames,{dot:"dot",active:"active",nextButton:"nextButton",prevButton:"prevButton"})});exports.classNames=classNames,exports.PLUGIN_DEFAULTS=PLUGIN_DEFAULTS,exports.PRESET_DEFAULTS=PRESET_DEFAULTS;

},{"11":11}],76:[function(require,module,exports){
(function (global){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}exports.__esModule=!0;var _keys=require(8),_keys2=_interopRequireDefault(_keys),_extends2=require(11),_extends3=_interopRequireDefault(_extends2),_classCallCheck2=require(9),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=require(10),_createClass3=_interopRequireDefault(_createClass2),_config=require(75),_helpers=require(77),Glider=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,_classCallCheck3.default)(this,e),this.options=(0,_extends3.default)({},_config.PLUGIN_DEFAULTS,t),this._state={currentSlide:this.options.initialSlide,init:!0},this.nextSlide=this.nextSlide.bind(this),this.prevSlide=this.prevSlide.bind(this),this.goTo=this.goTo.bind(this),this.handleDown=this.handleDown.bind(this),this.handleMove=this.handleMove.bind(this),this.handleUp=this.handleUp.bind(this),this.getClientX=this.getClientX.bind(this)}return e.prototype.setState=function(e){this._state=(0,_extends3.default)({},this.state,e)},e.prototype.init=function(e){var t=this.options,s=t.classNames,i=t.onInit;if(this.el=e,this.slidesWrapper=(0,_helpers.findFirst)("."+s.slides,e),this.slides=(0,_helpers.findAll)("."+s.slide,this.slidesWrapper),this.addListeners(),this.addSides(),this.addInitClassNames(),"function"==typeof i){var n=this.getReturnValues(!1);i({next:n.next,previous:n.previous,current:n.current,rest:n.rest},this.slides,this.options)}},e.prototype.destroy=function(){var e=this.options.onDestroy;this.removeListeners(),this.removeClassNames(),this.el=null,this.slidesWrapper=null,this.slides=null,"function"==typeof e&&e(this.options)},e.prototype.addListeners=function(){this.options.enableTouch&&(global.addEventListener("touchmove",this.handleMove,{passive:!1}),global.addEventListener("touchend",this.handleUp),this.slidesWrapper.addEventListener("touchstart",this.handleDown)),this.options.enableSwipe&&(global.addEventListener("mousemove",this.handleMove,{passive:!1}),global.addEventListener("mouseup",this.handleUp),this.slidesWrapper.addEventListener("mousedown",this.handleDown))},e.prototype.removeListeners=function(){this.options.enableTouch&&(global.removeEventListener("touchmove",this.handleMove),global.removeEventListener("touchend",this.handleUp),this.slidesWrapper.removeEventListener("touchstart",this.handleDown)),this.options.enableSwipe&&(global.removeEventListener("mousemove",this.handleMove),global.removeEventListener("mouseup",this.handleUp),this.slidesWrapper.removeEventListener("mousedown",this.handleDown))},e.prototype.addClassNames=function(){var e=this.options,t=e.addClasses,s=e.addMultiClasses;if((0,_keys2.default)(t).length>0){var i=this.state,n=i.currentSlide,o=i.previousSlide,r=i.nextSlide,l=this.options,a=l.visibleSlides,h=l.slideBy,d=l.classNames,p=d.current,u=d.next,c=d.previous,v=this.slides.length,f=a-h;this.slides.forEach(function(e,i){var l=i===n&&!0===t.current,d=i===(0,_helpers.modLoop)(r,f,v)&&!0===t.next,m=i===o&&!0===t.previous;if((0,_helpers.toggleClass)(e,p,l),(0,_helpers.toggleClass)(e,u,d),(0,_helpers.toggleClass)(e,c,m),!0===s.current)for(var _=0;_<a;_++){var g=i===(0,_helpers.modLoop)(n,_,v);(0,_helpers.toggleClass)(e,p+"__"+_,g)}if(!0===s.previous||!0===s.next)for(var S=0;S<h;S++){var y=i===(0,_helpers.modLoop)(r,S+f,v)&&!0===s.next,x=i===(0,_helpers.modLoop)(o,S,v)&&!0===s.previous;(0,_helpers.toggleClass)(e,u+"__"+S,y),(0,_helpers.toggleClass)(e,c+"__"+S,x)}})}},e.prototype.addInitClassNames=function(){var e=this.options.classNames;this.el.classList.add(e.pluginLoaded),this.slides.forEach(function(t){t.classList.add(e.init)}),this.addClassNames()},e.prototype.removeClassNames=function(){var e,t=this.options.classNames,s=(0,_keys2.default)(t).map(function(e){return t[e]});(e=this.el.classList).remove.apply(e,s),this.slides.forEach(function(e){var t;(t=e.classList).remove.apply(t,s)})},e.prototype.addSides=function(){var e=this.options.slideBy,t=this.state,s=t.currentSlide,i=t.requestedNext,n=t.requestedPrevious,o=this.slides.length,r=(0,_helpers.modLoop)(s,e,o),l=(0,_helpers.modLoop)(s,-1*e,o),a=(0,_helpers.eitherOr)(i,r),h=(0,_helpers.eitherOr)(n,l);this.setState({nextSlide:a,previousSlide:h})},e.prototype.nextSlide=function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return t&&"preventDefault"in t&&t.preventDefault(),this.state.init&&(this.setState({init:!1}),this.slides.forEach(function(t){t.classList.remove(e.options.classNames.init)})),this.addSides(),this.addClassNames(),this.spring(0,1,this.options.speed),this.state.nextSlide},e.prototype.prevSlide=function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return t&&"preventDefault"in t&&t.preventDefault(),this.state.init&&(this.setState({init:!1}),this.slides.forEach(function(t){t.classList.remove(e.options.classNames.init)})),this.addSides(),this.addClassNames(),this.spring(0,-1,this.options.speed),this.state.previousSlide},e.prototype.goTo=function(e){return e>this.state.currentSlide?(this.setState({requestedNext:e}),this.nextSlide()):e<this.state.currentSlide?(this.setState({requestedPrevious:e}),this.prevSlide()):void 0},e.prototype.spring=function(e,t,s){var i=this;global.cancelAnimationFrame(this.animation);var n=this.state,o=n.currentSlide,r=n.nextSlide,l=n.previousSlide,a=this.options,h=a.loop,d=a.visibleSlides,p=a.slideBy,u=this.slides.length,c=t;h||(c=t<0&&l>o?0:c,c=t>0&&(0,_helpers.modLoop)(r,d-p,u)<o?0:c),this.animation=(0,_helpers.animate)(s,e,c,function(e){i.setState({x:e*i.el.offsetWidth}),e===c?i.handleEnd(c):i.handleProgress()})},e.prototype.getClientX=function(e){var t=e.touches;return((void 0===t?[]:t)[0]||e).clientX},e.prototype.getReturnValues=function(){for(var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=this.slides.length,s=this.options,i=s.visibleSlides,n=s.slideBy,o=s.loop,r=this.state,l=r.currentSlide,a=r.nextSlide,h=r.previousSlide,d=this.state.x/this.el.offsetWidth,p=-1*d,u=[],c=0;c<i;c++)u.push((0,_helpers.modLoop)(l,c,t));var v=[null],f=l<(0,_helpers.modLoop)(a,i-n,t)||o,m=d>p&&e;if(f&&m||!e){v.pop();for(var _=0;_<i;_++)v.push((0,_helpers.modLoop)(a,_,t))}var g=[null],S=l>h||o,y=d<p&&e;if(S&&y||!e){g.pop();for(var x=0;x<n;x++)g.push((0,_helpers.modLoop)(h,x,t))}return{rest:this.slides.map(function(e,t){return t}).filter(function(e){return-1===[].concat(g,u,v).filter(function(e){return 0!==e}).indexOf(e)}),previous:(0,_helpers.arrayOrValue)(g),next:(0,_helpers.arrayOrValue)(v),current:(0,_helpers.arrayOrValue)(u),progress:Math.abs(d)}},e.prototype.handleDown=function(e){var t=this,s=this.getClientX(e);this.state.init&&this.slides.forEach(function(e){e.classList.remove(t.options.classNames.init)}),this.setState({down:!0,xStart:s,x:0,init:!1})},e.prototype.handleUp=function(){var e=this.state,t=e.down,s=e.blocked;if(t&&s){var i=this.options.snapBackAt,n=this.state.x/this.el.offsetWidth,o=0;n<=-1*i?o=-1:n>=i&&(o=1),this.spring(n,o,this.options.spring)}this.setState({down:!1,blocked:!1})},e.prototype.handleMove=function(e){if(this.state.down){var t=this.state,s=t.xStart,i=t.x,n=t.blocked,o=this.options.threshold;(Math.abs(i)>o||n)&&(this.setState({blocked:!0}),e.preventDefault(),this.handleProgress());var r=this.getClientX(e);this.setState({x:s-r})}},e.prototype.handleProgress=function(){var e=this.options,t=e.onSlide,s=e.slideBy;if("function"==typeof t){var i=this.getReturnValues();t(i.progress*s,{next:i.next,previous:i.previous,current:i.current,rest:i.rest},this.slides,this.options)}},e.prototype.handleEnd=function(e){var t=this.options.onEnd;if(-1===e?this.setState({currentSlide:this.state.previousSlide}):1===e&&this.setState({currentSlide:this.state.nextSlide}),this.setState({requestedNext:null,requestedPrevious:null}),this.addSides(),this.addClassNames(),global.cancelAnimationFrame(this.animation),"function"==typeof t){var s=this.getReturnValues(!1);t({next:s.next,previous:s.previous,current:s.current,rest:s.rest},this.slides,this.options)}},(0,_createClass3.default)(e,[{key:"state",get:function(){return this._state}}]),e}();exports.default=Glider;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"10":10,"11":11,"75":75,"77":77,"8":8,"9":9}],77:[function(require,module,exports){
(function (global){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}exports.__esModule=!0,exports.preventDefault=exports.parseObject=exports.arrayOrValue=exports.eitherOr=exports.modLoop=exports.animate=exports.toggleClass=exports.findFirst=exports.findAll=void 0;var _keys=require(8),_keys2=_interopRequireDefault(_keys),_from=require(5),_from2=_interopRequireDefault(_from),animate=function(e,r,t,o){var n=Date.now(),a=(t-r)/e,s=function s(){var l=Date.now(),i=l-n;e-i>0?(global.requestAnimationFrame(s),o(r+a*i)):(global.cancelAnimationFrame(s),o(t))};return s(),s},findAll=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return(0,_from2.default)(r.querySelectorAll(e))},findFirst=function(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:document).querySelector(e)},toggleClass=function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;null===t?e.classList.toggle(r):t?e.classList.add(r):e.classList.remove(r)},eitherOr=function(e,r){return"number"==typeof e?e:e||r},modLoop=function(e,r,t){return(e+r+t)%t},arrayOrValue=function(e){return e.length>1?e:e[0]},parseObject=function(e){var r={};return(0,_keys2.default)(e).forEach(function(t){var o=e[t];try{o=isNaN(o)?JSON.parse(o):Number(o)}catch(e){}r[t]=o}),r},preventDefault=function(e){return e.preventDefault()};exports.findAll=findAll,exports.findFirst=findFirst,exports.toggleClass=toggleClass,exports.animate=animate,exports.modLoop=modLoop,exports.eitherOr=eitherOr,exports.arrayOrValue=arrayOrValue,exports.parseObject=parseObject,exports.preventDefault=preventDefault;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"5":5,"8":8}],78:[function(require,module,exports){
(function (global){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}exports.__esModule=!0;var _extends2=require(11),_extends3=_interopRequireDefault(_extends2),_glider=require(76),_glider2=_interopRequireDefault(_glider),_config=require(75),_helpers=require(77),classNames={pager:"pager",dot:"dot",active:"active",previousButton:"previousButton",nextButton:"nextButton",disabled:"disabled",dragging:"dragging",draggable:"draggable",caption:"caption",headline:"headline",subline:"subline",description:"description"},DATA_DEFAULTS={PLUGIN_DEFAULTS:_config.PLUGIN_DEFAULTS,classNames:(0,_extends3.default)({},_config.PLUGIN_DEFAULTS.classNames,classNames)},_document=document,documentElement=_document.documentElement,autoRunner=function(e,n,t,s){var i=!0,a=void 0,r=void 0,o=void 0,l=void 0,d=void 0,c=function(e){return global.requestAnimationFrame(e),e},u=function e(a){i?(o=setTimeout(e,t),a||(d=d===s?n.goTo(0):n.nextSlide())):o=clearTimeout(o)},m=function(){return u(!0)};e.addEventListener("mouseenter",function(){i=!1,r=!0,global.cancelAnimationFrame(l),o=clearTimeout(o)}),e.addEventListener("mousedown",function(){i=!1,a=!0,r=!0,global.cancelAnimationFrame(l),o=clearTimeout(o)}),e.addEventListener("mousemove",function(){i=!1,r=!0,global.cancelAnimationFrame(l),o=clearTimeout(o)}),e.addEventListener("mouseleave",function(){r=!1,a||(i=!0,l=c(m))}),document.addEventListener("mouseup",function(){a&&!r&&(i=!0,l=c(m)),a=!1}),document.addEventListener("visibilitychange",function(e){e.target.hidden?(i=!1,global.cancelAnimationFrame(l),o=clearTimeout(o)):(i=!0,l=c(m))}),l=c(m)},dataWrapper=function(e,n){var t=(0,_helpers.parseObject)(e.dataset),s=[].concat((0,_helpers.findAll)("img",e),(0,_helpers.findAll)("a",e)),i=n.classNames,a=i.pager,r=i.dot,o=i.nextButton,l=i.previousButton,d=i.caption,c=i.headline,u=i.subline,m=i.description,p=(0,_helpers.findAll)("."+a,e),f=(0,_helpers.findFirst)("."+o,e),v=(0,_helpers.findFirst)("."+l,e),g=p.map(function(e){return(0,_helpers.findFirst)("."+r,e)}),_=(0,_helpers.findAll)("."+d,e),L=_.map(function(e){return(0,_helpers.findFirst)("."+c,e)}),h=_.map(function(e){return(0,_helpers.findFirst)("."+u,e)}),E=_.map(function(e){return(0,_helpers.findFirst)("."+m,e)}),b=void 0,N=null,x=[],T=function(e){b?(0,_helpers.preventDefault)(e):(b=!0,N&&N.prevSlide(e))},A=function(e){b?(0,_helpers.preventDefault)(e):(b=!0,N&&N.nextSlide(e))},D=function(){return documentElement.classList.add(n.classNames.dragging)},F=function(){return documentElement.classList.remove(n.classNames.dragging)};if(N=new _glider2.default((0,_extends3.default)({},DATA_DEFAULTS,n,t,{classNames:(0,_extends3.default)({},DATA_DEFAULTS.classNames,n.classNames),onInit:function(t,i,a){var r=t.previous,o=t.next,l=t.current,d=t.rest;s.forEach(function(e){e.addEventListener("dragstart",_helpers.preventDefault)}),a.autoplay&&autoRunner(e,N,a.autoplay,!a.loop&&i.length-1),p.forEach(function(e,n){var t=function(e){(0,_helpers.preventDefault)(e),b||(b=!0,N&&N.goTo(n))};e.addEventListener("click",t),x.push(t)}),f&&f.addEventListener("click",A),v&&v.addEventListener("click",T),0!==a.enableSwipe&&i.forEach(function(e){e.classList.add(a.classNames.draggable),e.addEventListener("mousedown",D)}),document.addEventListener("mouseup",F),p[l]&&p[l].classList.add(a.classNames.active),!a.loop&&v&&f&&(0===l&&v&&f?v.classList.add(a.classNames.disabled):l===i.length-1&&f.classList.add(a.classNames.disabled)),"function"==typeof n.onInit&&n.onInit({previous:r,next:o,current:l,rest:d},{slides:i,captions:_,headlines:L,sublines:h,descriptions:E,pagers:p,dots:g,nextTrigger:f,prevTrigger:v},a)},onEnd:function(e,t,s){var i=e.previous,a=e.next,r=e.current,o=e.rest;[i,a].concat(o).forEach(function(e){p[e]&&p[e].classList.remove(s.classNames.active)}),p[r]&&p[r].classList.remove(s.classNames.active),!s.loop&&v&&f&&(0===r?(v.classList.add(s.classNames.disabled),f.classList.remove(s.classNames.disabled)):r===t.length-1?(f.classList.add(s.classNames.disabled),v.classList.remove(s.classNames.disabled)):(v.classList.remove(s.classNames.disabled),f.classList.remove(s.classNames.disabled))),b=!1,"function"==typeof n.onEnd&&n.onEnd({previous:i,next:a,current:r,rest:o},{slides:t,captions:_,headlines:L,sublines:h,descriptions:E,pagers:p,dots:g,nextTrigger:f,prevTrigger:v},s)},onSlide:function(e,t,s,i){var a=t.previous,r=t.next,o=t.current,l=t.rest;"function"==typeof n.onSlide&&n.onSlide(e,{previous:a,next:r,current:o,rest:l},{slides:s,captions:_,headlines:L,sublines:h,descriptions:E,pagers:p,dots:g,nextTrigger:f,prevTrigger:v},i)},onDestroy:function(t){s.forEach(function(e){e.removeEventListener("dragstart",_helpers.preventDefault)}),p.forEach(function(e,n){e.removeEventListener("click",x[n])}),document.removeEventListener("mouseup",F),f&&f.removeEventListener("click",A),v&&v.removeEventListener("click",T),0!==t.enableSwipe&&(0,_helpers.findAll)("."+t.classNames.slide,e).forEach(function(e){e.classList.remove(t.classNames.draggable),e.removeEventListener("mousedown",D)}),"function"==typeof n.onDestroy&&n.onDestroy(t)}})))return N.init(e),N.destroy};exports.default=dataWrapper;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"11":11,"75":75,"76":76,"77":77}]},{},[2]);
