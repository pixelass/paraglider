(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = {"glider":"a","slides":"b","slide":"c","current":"d","previous":"e","next":"f","pagers":"g","prev":"h","dots":"i","dot":"j","active":"k","slices":"l","slice":"m","cubes":"n l","cube":"o","pluginLoaded":"p","init":"q","jsWrapper":"r","jsSlide":"s","jsDot":"t","jsNext":"u","jsPrev":"v","parallax":"w"}
},{}],2:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var _from=require(4),_from2=_interopRequireDefault(_from),_easingUtils=require(73),_wrapper=require(77),_wrapper2=_interopRequireDefault(_wrapper);require(3);var _index=require(1),_index2=_interopRequireDefault(_index),classNames={pluginLoaded:_index2.default.pluginLoaded,current:_index2.default.current,previous:_index2.default.previous,next:_index2.default.next,init:_index2.default.init,active:_index2.default.active,slides:_index2.default.jsWrapper,slide:_index2.default.jsSlide,dot:_index2.default.jsDot,prevButton:_index2.default.jsPrev,nextButton:_index2.default.jsNext},parallaxSlider=function(e,r,t){var n=(0,_from2.default)(e.querySelectorAll("."+_index2.default.slide)).map(function(e){return(0,_from2.default)(e.querySelectorAll("."+_index2.default.cube))});return(0,_wrapper2.default)(e,{classNames:classNames,onSlide:function(e,i,a){var s=i.next,l=i.previous;i.current;i.rest.forEach(function(e){a[e].style.transform=""}),null!==l?(a[l].style.transform="translate3d(0,0,0)",n[l].forEach(function(t,i){r({progress:e,slice:t,index:i,slides:a[l],slicesLength:n[l].length})})):null!==s&&(a[s].style.transform="translate3d(0,0,0)",n[s].forEach(function(r,i){t({progress:e,slice:r,index:i,slides:a[s],slicesLength:n[s].length})}))},onEnd:function(e,r){var t=e.current;r.forEach(function(e){e.style.transform=""}),n[t].forEach(function(e){e.style.transform=""})}})},sliders=(0,_from2.default)(document.querySelectorAll("."+_index2.default.parallax)),exampleData=[{x:0,y:1,easing:_easingUtils.easeOutSine,powPrevious:function(e,r){return(r-e-1)%6+1},powNext:function(e){return e%6+1}},{x:1,y:0,easing:_easingUtils.linear,powPrevious:function(e,r){return 1+~~((r-e-1)/6)},powNext:function(e){return 1+~~(e/6)}},{x:1,y:0,easing:_easingUtils.linear,powPrevious:function(e,r){return(r-e-1)%7+1},powNext:function(e){return e%7+1}}];sliders.forEach(function(e,r){parallaxSlider(e,function(e){var t=e.progress,n=e.slice,i=e.index,a=e.slicesLength,s=exampleData[r],l=s.x,u=s.y,o=s.powPrevious,d=s.easing,f=o(i,a),c=Math.pow(1-t,f);n.style.transformOrigin="0 0",n.style.transform="rotate3d("+l+","+u+",0,"+-180*d(c)+"deg)"},function(e){var t=e.progress,n=e.slice,i=e.index,a=e.slicesLength,s=exampleData[r],l=s.x,u=s.y,o=s.powNext,d=s.easing,f=o(i,a),c=Math.pow(1-t,f);n.style.transformOrigin="100% 100%",n.style.transform="rotate3d("+l+","+u+",0,"+-180*d(c)+"deg)"})});

},{"1":1,"3":3,"4":4,"73":73,"77":77}],3:[function(require,module,exports){
module.exports = {}
},{}],4:[function(require,module,exports){
module.exports={default:require(11),__esModule:!0};
},{"11":11}],5:[function(require,module,exports){
module.exports={default:require(12),__esModule:!0};
},{"12":12}],6:[function(require,module,exports){
module.exports={default:require(13),__esModule:!0};
},{"13":13}],7:[function(require,module,exports){
module.exports={default:require(14),__esModule:!0};
},{"14":14}],8:[function(require,module,exports){
"use strict";exports.__esModule=!0,exports.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};

},{}],9:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}exports.__esModule=!0;var _defineProperty=require(6),_defineProperty2=_interopRequireDefault(_defineProperty);exports.default=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,_defineProperty2.default)(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}();
},{"6":6}],10:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}exports.__esModule=!0;var _assign=require(5),_assign2=_interopRequireDefault(_assign);exports.default=_assign2.default||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e};
},{"5":5}],11:[function(require,module,exports){
require(72),require(68),module.exports=require(20).Array.from;
},{"20":20,"68":68,"72":72}],12:[function(require,module,exports){
require(69),module.exports=require(20).Object.assign;

},{"20":20,"69":69}],13:[function(require,module,exports){
require(70);var $Object=require(20).Object;module.exports=function(e,r,o){return $Object.defineProperty(e,r,o)};
},{"20":20,"70":70}],14:[function(require,module,exports){
require(71),module.exports=require(20).Object.keys;
},{"20":20,"71":71}],15:[function(require,module,exports){
module.exports=function(o){if("function"!=typeof o)throw TypeError(o+" is not a function!");return o};

},{}],16:[function(require,module,exports){
var isObject=require(36);module.exports=function(e){if(!isObject(e))throw TypeError(e+" is not an object!");return e};

},{"36":36}],17:[function(require,module,exports){
var toIObject=require(61),toLength=require(62),toIndex=require(59);module.exports=function(e){return function(t,r,n){var o,i=toIObject(t),u=toLength(i.length),f=toIndex(n,u);if(e&&r!=r){for(;u>f;)if((o=i[f++])!=o)return!0}else for(;u>f;f++)if((e||f in i)&&i[f]===r)return e||f||0;return!e&&-1}};
},{"59":59,"61":61,"62":62}],18:[function(require,module,exports){
var cof=require(19),TAG=require(66)("toStringTag"),ARG="Arguments"==cof(function(){return arguments}()),tryGet=function(t,e){try{return t[e]}catch(t){}};module.exports=function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=tryGet(e=Object(t),TAG))?r:ARG?cof(e):"Object"==(n=cof(e))&&"function"==typeof e.callee?"Arguments":n};

},{"19":19,"66":66}],19:[function(require,module,exports){
var toString={}.toString;module.exports=function(t){return toString.call(t).slice(8,-1)};

},{}],20:[function(require,module,exports){
var core=module.exports={version:"2.4.0"};"number"==typeof __e&&(__e=core);

},{}],21:[function(require,module,exports){
"use strict";var $defineProperty=require(45),createDesc=require(53);module.exports=function(e,r,t){r in e?$defineProperty.f(e,r,createDesc(0,t)):e[r]=t};

},{"45":45,"53":53}],22:[function(require,module,exports){
var aFunction=require(15);module.exports=function(n,r,t){if(aFunction(n),void 0===r)return n;switch(t){case 1:return function(t){return n.call(r,t)};case 2:return function(t,u){return n.call(r,t,u)};case 3:return function(t,u,e){return n.call(r,t,u,e)}}return function(){return n.apply(r,arguments)}};

},{"15":15}],23:[function(require,module,exports){
module.exports=function(o){if(void 0==o)throw TypeError("Can't call method on  "+o);return o};
},{}],24:[function(require,module,exports){
module.exports=!require(28)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a});
},{"28":28}],25:[function(require,module,exports){
var isObject=require(36),document=require(29).document,is=isObject(document)&&isObject(document.createElement);module.exports=function(e){return is?document.createElement(e):{}};

},{"29":29,"36":36}],26:[function(require,module,exports){
module.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");

},{}],27:[function(require,module,exports){
var global=require(29),core=require(20),ctx=require(22),hide=require(31),PROTOTYPE="prototype",$export=function(e,r,t){var o,n,p,i=e&$export.F,x=e&$export.G,c=e&$export.S,l=e&$export.P,u=e&$export.B,a=e&$export.W,$=x?core:core[r]||(core[r]={}),P=$[PROTOTYPE],f=x?global:c?global[r]:(global[r]||{})[PROTOTYPE];x&&(t=r);for(o in t)(n=!i&&f&&void 0!==f[o])&&o in $||(p=n?f[o]:t[o],$[o]=x&&"function"!=typeof f[o]?t[o]:u&&n?ctx(p,global):a&&f[o]==p?function(e){var r=function(r,t,o){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(r);case 2:return new e(r,t)}return new e(r,t,o)}return e.apply(this,arguments)};return r[PROTOTYPE]=e[PROTOTYPE],r}(p):l&&"function"==typeof p?ctx(Function.call,p):p,l&&(($.virtual||($.virtual={}))[o]=p,e&$export.R&&P&&!P[o]&&hide(P,o,p)))};$export.F=1,$export.G=2,$export.S=4,$export.P=8,$export.B=16,$export.W=32,$export.U=64,$export.R=128,module.exports=$export;

},{"20":20,"22":22,"29":29,"31":31}],28:[function(require,module,exports){
module.exports=function(r){try{return!!r()}catch(r){return!0}};
},{}],29:[function(require,module,exports){
var global=module.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=global);

},{}],30:[function(require,module,exports){
var hasOwnProperty={}.hasOwnProperty;module.exports=function(r,e){return hasOwnProperty.call(r,e)};

},{}],31:[function(require,module,exports){
var dP=require(45),createDesc=require(53);module.exports=require(24)?function(e,r,t){return dP.f(e,r,createDesc(1,t))}:function(e,r,t){return e[r]=t,e};

},{"24":24,"45":45,"53":53}],32:[function(require,module,exports){
module.exports=require(29).document&&document.documentElement;

},{"29":29}],33:[function(require,module,exports){
module.exports=!require(24)&&!require(28)(function(){return 7!=Object.defineProperty(require(25)("div"),"a",{get:function(){return 7}}).a});

},{"24":24,"25":25,"28":28}],34:[function(require,module,exports){
var cof=require(19);module.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==cof(e)?e.split(""):Object(e)};

},{"19":19}],35:[function(require,module,exports){
var Iterators=require(41),ITERATOR=require(66)("iterator"),ArrayProto=Array.prototype;module.exports=function(r){return void 0!==r&&(Iterators.Array===r||ArrayProto[ITERATOR]===r)};

},{"41":41,"66":66}],36:[function(require,module,exports){
module.exports=function(o){return"object"==typeof o?null!==o:"function"==typeof o};

},{}],37:[function(require,module,exports){
var anObject=require(16);module.exports=function(r,t,e,a){try{return a?t(anObject(e)[0],e[1]):t(e)}catch(t){var c=r.return;throw void 0!==c&&anObject(c.call(r)),t}};

},{"16":16}],38:[function(require,module,exports){
"use strict";var create=require(44),descriptor=require(53),setToStringTag=require(55),IteratorPrototype={};require(31)(IteratorPrototype,require(66)("iterator"),function(){return this}),module.exports=function(r,t,e){r.prototype=create(IteratorPrototype,{next:descriptor(1,e)}),setToStringTag(r,t+" Iterator")};

},{"31":31,"44":44,"53":53,"55":55,"66":66}],39:[function(require,module,exports){
"use strict";var LIBRARY=require(42),$export=require(27),redefine=require(54),hide=require(31),has=require(30),Iterators=require(41),$iterCreate=require(38),setToStringTag=require(55),getPrototypeOf=require(48),ITERATOR=require(66)("iterator"),BUGGY=!([].keys&&"next"in[].keys()),FF_ITERATOR="@@iterator",KEYS="keys",VALUES="values",returnThis=function(){return this};module.exports=function(e,r,t,i,n,o,s){$iterCreate(t,r,i);var u,a,T,R=function(e){if(!BUGGY&&e in f)return f[e];switch(e){case KEYS:case VALUES:return function(){return new t(this,e)}}return function(){return new t(this,e)}},A=r+" Iterator",E=n==VALUES,c=!1,f=e.prototype,h=f[ITERATOR]||f[FF_ITERATOR]||n&&f[n],I=h||R(n),p=n?E?R("entries"):I:void 0,_="Array"==r?f.entries||h:h;if(_&&(T=getPrototypeOf(_.call(new e)))!==Object.prototype&&(setToStringTag(T,A,!0),LIBRARY||has(T,ITERATOR)||hide(T,ITERATOR,returnThis)),E&&h&&h.name!==VALUES&&(c=!0,I=function(){return h.call(this)}),LIBRARY&&!s||!BUGGY&&!c&&f[ITERATOR]||hide(f,ITERATOR,I),Iterators[r]=I,Iterators[A]=returnThis,n)if(u={values:E?I:R(VALUES),keys:o?I:R(KEYS),entries:p},s)for(a in u)a in f||redefine(f,a,u[a]);else $export($export.P+$export.F*(BUGGY||c),r,u);return u};

},{"27":27,"30":30,"31":31,"38":38,"41":41,"42":42,"48":48,"54":54,"55":55,"66":66}],40:[function(require,module,exports){
var ITERATOR=require(66)("iterator"),SAFE_CLOSING=!1;try{var riter=[7][ITERATOR]();riter.return=function(){SAFE_CLOSING=!0},Array.from(riter,function(){throw 2})}catch(r){}module.exports=function(r,t){if(!t&&!SAFE_CLOSING)return!1;var n=!1;try{var e=[7],u=e[ITERATOR]();u.next=function(){return{done:n=!0}},e[ITERATOR]=function(){return u},r(e)}catch(r){}return n};

},{"66":66}],41:[function(require,module,exports){
module.exports={};

},{}],42:[function(require,module,exports){
module.exports=!0;

},{}],43:[function(require,module,exports){
"use strict";var getKeys=require(50),gOPS=require(47),pIE=require(51),toObject=require(63),IObject=require(34),$assign=Object.assign;module.exports=!$assign||require(28)(function(){var e={},t={},r=Symbol(),s="abcdefghijklmnopqrst";return e[r]=7,s.split("").forEach(function(e){t[e]=e}),7!=$assign({},e)[r]||Object.keys($assign({},t)).join("")!=s})?function(e,t){for(var r=toObject(e),s=arguments.length,i=1,o=gOPS.f,c=pIE.f;s>i;)for(var n,a=IObject(arguments[i++]),g=o?getKeys(a).concat(o(a)):getKeys(a),b=g.length,j=0;b>j;)c.call(a,n=g[j++])&&(r[n]=a[n]);return r}:$assign;

},{"28":28,"34":34,"47":47,"50":50,"51":51,"63":63}],44:[function(require,module,exports){
var anObject=require(16),dPs=require(46),enumBugKeys=require(26),IE_PROTO=require(56)("IE_PROTO"),Empty=function(){},PROTOTYPE="prototype",createDict=function(){var e,t=require(25)("iframe"),r=enumBugKeys.length;for(t.style.display="none",require(32).appendChild(t),t.src="javascript:",e=t.contentWindow.document,e.open(),e.write("<script>document.F=Object<\/script>"),e.close(),createDict=e.F;r--;)delete createDict[PROTOTYPE][enumBugKeys[r]];return createDict()};module.exports=Object.create||function(e,t){var r;return null!==e?(Empty[PROTOTYPE]=anObject(e),r=new Empty,Empty[PROTOTYPE]=null,r[IE_PROTO]=e):r=createDict(),void 0===t?r:dPs(r,t)};

},{"16":16,"25":25,"26":26,"32":32,"46":46,"56":56}],45:[function(require,module,exports){
var anObject=require(16),IE8_DOM_DEFINE=require(33),toPrimitive=require(64),dP=Object.defineProperty;exports.f=require(24)?Object.defineProperty:function(e,r,t){if(anObject(e),r=toPrimitive(r,!0),anObject(t),IE8_DOM_DEFINE)try{return dP(e,r,t)}catch(e){}if("get"in t||"set"in t)throw TypeError("Accessors not supported!");return"value"in t&&(e[r]=t.value),e};

},{"16":16,"24":24,"33":33,"64":64}],46:[function(require,module,exports){
var dP=require(45),anObject=require(16),getKeys=require(50);module.exports=require(24)?Object.defineProperties:function(e,r){anObject(e);for(var t,o=getKeys(r),c=o.length,i=0;c>i;)dP.f(e,t=o[i++],r[t]);return e};

},{"16":16,"24":24,"45":45,"50":50}],47:[function(require,module,exports){
exports.f=Object.getOwnPropertySymbols;

},{}],48:[function(require,module,exports){
var has=require(30),toObject=require(63),IE_PROTO=require(56)("IE_PROTO"),ObjectProto=Object.prototype;module.exports=Object.getPrototypeOf||function(t){return t=toObject(t),has(t,IE_PROTO)?t[IE_PROTO]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?ObjectProto:null};

},{"30":30,"56":56,"63":63}],49:[function(require,module,exports){
var has=require(30),toIObject=require(61),arrayIndexOf=require(17)(!1),IE_PROTO=require(56)("IE_PROTO");module.exports=function(r,e){var a,t=toIObject(r),u=0,O=[];for(a in t)a!=IE_PROTO&&has(t,a)&&O.push(a);for(;e.length>u;)has(t,a=e[u++])&&(~arrayIndexOf(O,a)||O.push(a));return O};
},{"17":17,"30":30,"56":56,"61":61}],50:[function(require,module,exports){
var $keys=require(49),enumBugKeys=require(26);module.exports=Object.keys||function(e){return $keys(e,enumBugKeys)};

},{"26":26,"49":49}],51:[function(require,module,exports){
exports.f={}.propertyIsEnumerable;

},{}],52:[function(require,module,exports){
var $export=require(27),core=require(20),fails=require(28);module.exports=function(e,r){var o=(core.Object||{})[e]||Object[e],t={};t[e]=r(o),$export($export.S+$export.F*fails(function(){o(1)}),"Object",t)};
},{"20":20,"27":27,"28":28}],53:[function(require,module,exports){
module.exports=function(e,r){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:r}};

},{}],54:[function(require,module,exports){
module.exports=require(31);

},{"31":31}],55:[function(require,module,exports){
var def=require(45).f,has=require(30),TAG=require(66)("toStringTag");module.exports=function(e,r,o){e&&!has(e=o?e:e.prototype,TAG)&&def(e,TAG,{configurable:!0,value:r})};

},{"30":30,"45":45,"66":66}],56:[function(require,module,exports){
var shared=require(57)("keys"),uid=require(65);module.exports=function(e){return shared[e]||(shared[e]=uid(e))};

},{"57":57,"65":65}],57:[function(require,module,exports){
var global=require(29),SHARED="__core-js_shared__",store=global[SHARED]||(global[SHARED]={});module.exports=function(o){return store[o]||(store[o]={})};

},{"29":29}],58:[function(require,module,exports){
var toInteger=require(60),defined=require(23);module.exports=function(e){return function(r,t){var n,i,d=String(defined(r)),o=toInteger(t),u=d.length;return o<0||o>=u?e?"":void 0:(n=d.charCodeAt(o),n<55296||n>56319||o+1===u||(i=d.charCodeAt(o+1))<56320||i>57343?e?d.charAt(o):n:e?d.slice(o,o+2):i-56320+(n-55296<<10)+65536)}};
},{"23":23,"60":60}],59:[function(require,module,exports){
var toInteger=require(60),max=Math.max,min=Math.min;module.exports=function(e,t){return e=toInteger(e),e<0?max(e+t,0):min(e,t)};
},{"60":60}],60:[function(require,module,exports){
var ceil=Math.ceil,floor=Math.floor;module.exports=function(o){return isNaN(o=+o)?0:(o>0?floor:ceil)(o)};

},{}],61:[function(require,module,exports){
var IObject=require(34),defined=require(23);module.exports=function(e){return IObject(defined(e))};

},{"23":23,"34":34}],62:[function(require,module,exports){
var toInteger=require(60),min=Math.min;module.exports=function(e){return e>0?min(toInteger(e),9007199254740991):0};

},{"60":60}],63:[function(require,module,exports){
var defined=require(23);module.exports=function(e){return Object(defined(e))};

},{"23":23}],64:[function(require,module,exports){
var isObject=require(36);module.exports=function(t,e){if(!isObject(t))return t;var r,i;if(e&&"function"==typeof(r=t.toString)&&!isObject(i=r.call(t)))return i;if("function"==typeof(r=t.valueOf)&&!isObject(i=r.call(t)))return i;if(!e&&"function"==typeof(r=t.toString)&&!isObject(i=r.call(t)))return i;throw TypeError("Can't convert object to primitive value")};

},{"36":36}],65:[function(require,module,exports){
var id=0,px=Math.random();module.exports=function(o){return"Symbol(".concat(void 0===o?"":o,")_",(++id+px).toString(36))};

},{}],66:[function(require,module,exports){
var store=require(57)("wks"),uid=require(65),Symbol=require(29).Symbol,USE_SYMBOL="function"==typeof Symbol,$exports=module.exports=function(o){return store[o]||(store[o]=USE_SYMBOL&&Symbol[o]||(USE_SYMBOL?Symbol:uid)("Symbol."+o))};$exports.store=store;

},{"29":29,"57":57,"65":65}],67:[function(require,module,exports){
var classof=require(18),ITERATOR=require(66)("iterator"),Iterators=require(41);module.exports=require(20).getIteratorMethod=function(r){if(void 0!=r)return r[ITERATOR]||r["@@iterator"]||Iterators[classof(r)]};

},{"18":18,"20":20,"41":41,"66":66}],68:[function(require,module,exports){
"use strict";var ctx=require(22),$export=require(27),toObject=require(63),call=require(37),isArrayIter=require(35),toLength=require(62),createProperty=require(21),getIterFn=require(67);$export($export.S+$export.F*!require(40)(function(e){Array.from(e)}),"Array",{from:function(e){var r,t,o,i,a=toObject(e),c="function"==typeof this?this:Array,n=arguments.length,u=n>1?arguments[1]:void 0,l=void 0!==u,y=0,p=getIterFn(a);if(l&&(u=ctx(u,n>2?arguments[2]:void 0,2)),void 0==p||c==Array&&isArrayIter(p))for(r=toLength(a.length),t=new c(r);r>y;y++)createProperty(t,y,l?u(a[y],y):a[y]);else for(i=p.call(a),t=new c;!(o=i.next()).done;y++)createProperty(t,y,l?call(i,u,[o.value,y],!0):o.value);return t.length=y,t}});

},{"21":21,"22":22,"27":27,"35":35,"37":37,"40":40,"62":62,"63":63,"67":67}],69:[function(require,module,exports){
var $export=require(27);$export($export.S+$export.F,"Object",{assign:require(43)});

},{"27":27,"43":43}],70:[function(require,module,exports){
var $export=require(27);$export($export.S+$export.F*!require(24),"Object",{defineProperty:require(45).f});
},{"24":24,"27":27,"45":45}],71:[function(require,module,exports){
var toObject=require(63),$keys=require(50);require(52)("keys",function(){return function(e){return $keys(toObject(e))}});
},{"50":50,"52":52,"63":63}],72:[function(require,module,exports){
"use strict";var $at=require(58)(!0);require(39)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,i=this._t,e=this._i;return e>=i.length?{value:void 0,done:!0}:(t=$at(i,e),this._i+=t.length,{value:t,done:!1})});
},{"39":39,"58":58}],73:[function(require,module,exports){
"use strict";function linear(e){return e}function easeInSine(e){return-1*Math.cos(e*(Math.PI/2))+1}function easeOutSine(e){return Math.sin(e*(Math.PI/2))}function easeInOutSine(e){return-.5*(Math.cos(Math.PI*e)-1)}function easeInQuad(e){return e*e}function easeOutQuad(e){return e*(2-e)}function easeInOutQuad(e){return e<.5?2*e*e:(4-2*e)*e-1}function easeInCubic(e){return e*e*e}function easeOutCubic(e){var t=e-1;return t*t*t+1}function easeInOutCubic(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1}function easeInQuart(e){return e*e*e*e}function easeOutQuart(e){var t=e-1;return 1-t*t*t*t}function easeInOutQuart(e){var t=e-1;return e<.5?8*e*e*e*e:1-8*t*t*t*t}function easeInQuint(e){return e*e*e*e*e}function easeOutQuint(e){var t=e-1;return 1+t*t*t*t*t}function easeInOutQuint(e){var t=e-1;return e<.5?16*e*e*e*e*e:1+16*t*t*t*t*t}function easeInExpo(e){return 0===e?0:Math.pow(2,10*(e-1))}function easeOutExpo(e){return 1===e?1:1-Math.pow(2,-10*e)}function easeInOutExpo(e){if(0===e||1===e)return e;var t=2*e,n=t-1;return t<1?.5*Math.pow(2,10*n):.5*(2-Math.pow(2,-10*n))}function easeInCirc(e){var t=e/1;return-1*(Math.sqrt(1-t*e)-1)}function easeOutCirc(e){var t=e-1;return Math.sqrt(1-t*t)}function easeInOutCirc(e){var t=2*e,n=t-2;return t<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-n*n)+1)}function easeInBack(e){var t=arguments.length<=1||void 0===arguments[1]?1.70158:arguments[1],n=e/1;return n*n*((t+1)*n-t)}function easeOutBack(e){var t=arguments.length<=1||void 0===arguments[1]?1.70158:arguments[1],n=e/1-1;return n*n*((t+1)*n+t)+1}function easeInOutBack(e){var t=arguments.length<=1||void 0===arguments[1]?1.70158:arguments[1],n=2*e,a=n-2,u=1.525*t;return n<1?.5*n*n*((u+1)*n-u):.5*(a*a*((u+1)*a+u)+2)}function easeInElastic(e){var t=arguments.length<=1||void 0===arguments[1]?.7:arguments[1];if(0===e||1===e)return e;var n=e/1,a=n-1,u=1-t,r=u/(2*Math.PI)*Math.asin(1);return-Math.pow(2,10*a)*Math.sin((a-r)*(2*Math.PI)/u)}function easeOutElastic(e){var t=arguments.length<=1||void 0===arguments[1]?.7:arguments[1],n=1-t,a=2*e;if(0===e||1===e)return e;var u=n/(2*Math.PI)*Math.asin(1);return Math.pow(2,-10*a)*Math.sin((a-u)*(2*Math.PI)/n)+1}function easeInOutElastic(e){var t=arguments.length<=1||void 0===arguments[1]?.65:arguments[1],n=1-t;if(0===e||1===e)return e;var a=2*e,u=a-1,r=n/(2*Math.PI)*Math.asin(1);return a<1?Math.pow(2,10*u)*Math.sin((u-r)*(2*Math.PI)/n)*-.5:Math.pow(2,-10*u)*Math.sin((u-r)*(2*Math.PI)/n)*.5+1}function easeOutBounce(e){var t=e/1;if(t<1/2.75)return 7.5625*t*t;if(t<2/2.75){var n=t-1.5/2.75;return 7.5625*n*n+.75}if(t<2.5/2.75){var a=t-2.25/2.75;return 7.5625*a*a+.9375}var u=t-2.625/2.75;return 7.5625*u*u+.984375}function easeInBounce(e){return 1-easeOutBounce(1-e)}function easeInOutBounce(e){return e<.5?.5*easeInBounce(2*e):.5*easeOutBounce(2*e-1)+.5}Object.defineProperty(exports,"__esModule",{value:!0}),exports.linear=linear,exports.easeInSine=easeInSine,exports.easeOutSine=easeOutSine,exports.easeInOutSine=easeInOutSine,exports.easeInQuad=easeInQuad,exports.easeOutQuad=easeOutQuad,exports.easeInOutQuad=easeInOutQuad,exports.easeInCubic=easeInCubic,exports.easeOutCubic=easeOutCubic,exports.easeInOutCubic=easeInOutCubic,exports.easeInQuart=easeInQuart,exports.easeOutQuart=easeOutQuart,exports.easeInOutQuart=easeInOutQuart,exports.easeInQuint=easeInQuint,exports.easeOutQuint=easeOutQuint,exports.easeInOutQuint=easeInOutQuint,exports.easeInExpo=easeInExpo,exports.easeOutExpo=easeOutExpo,exports.easeInOutExpo=easeInOutExpo,exports.easeInCirc=easeInCirc,exports.easeOutCirc=easeOutCirc,exports.easeInOutCirc=easeInOutCirc,exports.easeInBack=easeInBack,exports.easeOutBack=easeOutBack,exports.easeInOutBack=easeInOutBack,exports.easeInElastic=easeInElastic,exports.easeOutElastic=easeOutElastic,exports.easeInOutElastic=easeInOutElastic,exports.easeOutBounce=easeOutBounce,exports.easeInBounce=easeInBounce,exports.easeInOutBounce=easeInOutBounce;
},{}],74:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}exports.__esModule=!0,exports.PRESET_DEFAULTS=exports.PLUGIN_DEFAULTS=exports.classNames=void 0;var _extends2=require(10),_extends3=_interopRequireDefault(_extends2),classNames={pluginLoaded:"pluginLoaded",slide:"slide",slides:"slides",init:"init",current:"current",previous:"previous",next:"next"},PLUGIN_DEFAULTS={classNames:classNames,onSlide:null,onEnd:null,speed:250,spring:100,snapBackAt:.25,threshold:10,initialSlide:0},PRESET_DEFAULTS={classNames:(0,_extends3.default)({},classNames,{dot:"dot",active:"active",nextButton:"nextButton",prevButton:"prevButton"})};exports.classNames=classNames,exports.PLUGIN_DEFAULTS=PLUGIN_DEFAULTS,exports.PRESET_DEFAULTS=PRESET_DEFAULTS;

},{"10":10}],75:[function(require,module,exports){
(function (global){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}exports.__esModule=!0;var _keys=require(7),_keys2=_interopRequireDefault(_keys),_extends2=require(10),_extends3=_interopRequireDefault(_extends2),_classCallCheck2=require(8),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=require(9),_createClass3=_interopRequireDefault(_createClass2),_config=require(74),_helpers=require(76),Glider=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,_classCallCheck3.default)(this,e),this.options=(0,_extends3.default)({},_config.PLUGIN_DEFAULTS,t),this._state={currentSlide:this.options.initialSlide},this.nextSlide=this.nextSlide.bind(this),this.prevSlide=this.prevSlide.bind(this),this.goTo=this.goTo.bind(this),this.handleDown=this.handleDown.bind(this),this.handleMove=this.handleMove.bind(this),this.handleUp=this.handleUp.bind(this),this.getClientX=this.getClientX.bind(this)}return e.prototype.setState=function(e){this._state=(0,_extends3.default)({},this.state,e)},e.prototype.init=function(e){var t=this.options.classNames;this.el=e,this.slidesWrapper=(0,_helpers.findFirst)("."+t.slides,e),this.slides=(0,_helpers.findAll)("."+t.slide,this.slidesWrapper),this.addListeners(),this.addSides(),this.addInitClassNames()},e.prototype.destroy=function(){this.removeListeners(),this.removeClassNames(),this.el=null,this.slidesWrapper=null,this.slides=null},e.prototype.addListeners=function(){global.addEventListener("mousemove",this.handleMove,{passive:!1}),global.addEventListener("mouseup",this.handleUp),global.addEventListener("touchmove",this.handleMove,{passive:!1}),global.addEventListener("touchend",this.handleUp),this.slidesWrapper.addEventListener("mousedown",this.handleDown),this.slidesWrapper.addEventListener("touchstart",this.handleDown)},e.prototype.removeListeners=function(){global.removeEventListener("mousemove",this.handleMove),global.removeEventListener("mouseup",this.handleUp),global.removeEventListener("touchmove",this.handleMove),global.removeEventListener("touchend",this.handleUp),this.slidesWrapper.removeEventListener("mousedown",this.handleDown),this.slidesWrapper.removeEventListener("touchstart",this.handleDown)},e.prototype.addClassNames=function(){var e=this.state,t=e.currentSlide,s=e.previousSlide,i=e.nextSlide,n=this.options.classNames,r=n.current,o=n.next,a=n.previous;this.slides.forEach(function(e,n){e.classList.toggle(r,n===t),e.classList.toggle(o,n===i),e.classList.toggle(a,n===s)})},e.prototype.addInitClassNames=function(){var e=this.options.classNames;this.el.classList.add(e.pluginLoaded),this.slides.forEach(function(t){t.classList.add(e.init)}),this.addClassNames()},e.prototype.removeClassNames=function(){var e,t=this.options.classNames,s=(0,_keys2.default)(t).map(function(e){return t[e]});(e=this.el.classList).remove.apply(e,s),this.slides.forEach(function(e){var t;(t=e.classList).remove.apply(t,s)})},e.prototype.addSides=function(){var e=this.state,t=e.currentSlide,s=e.requestedNext,i=e.requestedPrevious,n=this.slides.length,r=(0,_helpers.eitherOr)(s,(0,_helpers.modLoop)(t,1,n)),o=(0,_helpers.eitherOr)(i,(0,_helpers.modLoop)(t,-1,n));this.setState({nextSlide:r,previousSlide:o})},e.prototype.nextSlide=function(e){e&&"preventDefault"in e&&e.preventDefault(),this.addSides(),this.addClassNames(),this.spring(0,1,this.options.speed)},e.prototype.prevSlide=function(e){e&&"preventDefault"in e&&e.preventDefault(),this.addSides(),this.addClassNames(),this.spring(0,-1,this.options.speed)},e.prototype.goTo=function(e){e>this.state.currentSlide?(this.setState({requestedNext:e}),this.nextSlide()):e<this.state.currentSlide&&(this.setState({requestedPrevious:e}),this.prevSlide())},e.prototype.spring=function(e,t,s){var i=this;(0,_helpers.animate)(s,e,t,function(e){i.setState({x:e*i.el.offsetWidth}),e===t?i.handleEnd(t):i.handleProgress()})},e.prototype.getClientX=function(e){var t=e.touches;return((void 0===t?[]:t)[0]||e).clientX},e.prototype.getReturnValues=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=this.state.x/this.el.offsetWidth,s=this.state,i=s.currentSlide,n=s.nextSlide,r=s.previousSlide,o=-1*t,a=i,l=t<o&&e?null:n,h=t>o&&e?null:r,d=this.slides.map(function(e,t){return t}).filter(function(e){return-1===[h,a,l].indexOf(e)});return{next:l,previous:h,current:a,rest:d,progress:Math.abs(t)}},e.prototype.handleDown=function(e){var t=this.options.classNames,s=this.getClientX(e);this.slides.forEach(function(e){e.classList.remove(t.init)}),this.setState({down:!0,xStart:s,x:0})},e.prototype.handleUp=function(){var e=this.state,t=e.down,s=e.blocked;if(t&&s){var i=this.options.snapBackAt,n=this.state.x/this.el.offsetWidth,r=0;n<=-1*i?r=-1:n>=i&&(r=1),this.spring(n,r,this.options.spring)}this.setState({down:!1,blocked:!1})},e.prototype.handleMove=function(e){if(this.state.down){var t=this.state,s=t.xStart,i=t.x,n=t.blocked,r=this.options.threshold;(Math.abs(i)>r||n)&&(this.setState({blocked:!0}),e.preventDefault(),this.handleProgress());var o=this.getClientX(e);this.setState({x:s-o})}},e.prototype.handleProgress=function(){var e=this.options.onSlide;if("function"==typeof e){var t=this.getReturnValues();e(t.progress,{next:t.next,previous:t.previous,current:t.current,rest:t.rest},this.slides)}},e.prototype.handleEnd=function(e){var t=this.options.onEnd;if(-1===e?this.setState({currentSlide:this.state.previousSlide}):1===e&&this.setState({currentSlide:this.state.nextSlide}),this.setState({requestedNext:null,requestedPrevious:null}),this.addSides(),this.addClassNames(),"function"==typeof t){var s=this.getReturnValues(!1);t({next:s.next,previous:s.previous,current:s.current,rest:s.rest},this.slides)}},(0,_createClass3.default)(e,[{key:"state",get:function(){return this._state}}]),e}();exports.default=Glider;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"10":10,"7":7,"74":74,"76":76,"8":8,"9":9}],76:[function(require,module,exports){
(function (global){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}exports.__esModule=!0,exports.eitherOr=exports.modLoop=exports.animate=exports.findFirst=exports.findAll=void 0;var _from=require(4),_from2=_interopRequireDefault(_from),animate=function(e,r,t,o){var n=Date.now(),i=(t-r)/e;return function u(){var a=Date.now(),l=a-n;e-l>0?(global.requestAnimationFrame(u),o(r+i*l)):(global.cancelAnimationFrame(u),o(t))}()},findAll=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return(0,_from2.default)(r.querySelectorAll(e))},findFirst=function(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:document).querySelector(e)},eitherOr=function(e,r){return"number"==typeof e?e:e||r},modLoop=function(e,r,t){return(e+r+t)%t};exports.findAll=findAll,exports.findFirst=findFirst,exports.animate=animate,exports.modLoop=modLoop,exports.eitherOr=eitherOr;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"4":4}],77:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}exports.__esModule=!0;var _extends2=require(10),_extends3=_interopRequireDefault(_extends2),_from=require(4),_from2=_interopRequireDefault(_from),_glider=require(75),_glider2=_interopRequireDefault(_glider),_config=require(74),wrapper=function(e,r){if(e){var t=(0,_from2.default)(e.querySelectorAll("."+r.classNames.dot)||[]),n=e.querySelector("."+r.classNames.nextButton),i=e.querySelector("."+r.classNames.prevButton),o=(0,_extends3.default)({},_config.PRESET_DEFAULTS,r,{onSlide:function(e,t,n){var i=t.next,o=t.previous,u=t.current,s=t.rest;"function"==typeof r.onSlide&&r.onSlide(e,{next:i,previous:o,current:u,rest:s},n)},onEnd:function(e,n){var i=e.next,o=e.previous,u=e.current,s=e.rest;t.forEach(function(e,t){e.classList.toggle(r.classNames.active,t===u)}),"function"==typeof r.onEnd&&r.onEnd({next:i,previous:o,current:u,rest:s},n)}}),u=new _glider2.default(o);return u.init(e),t.forEach(function(e,r){var t=function(e){return e.preventDefault(),u.goTo(r)};e.addEventListener("click",t),e.classList.toggle(o.classNames.active,r===o.initialSlide)}),n&&n.addEventListener("click",u.nextSlide),i&&i.addEventListener("click",u.prevSlide),u.destroy}};exports.default=wrapper;

},{"10":10,"4":4,"74":74,"75":75}]},{},[2]);
