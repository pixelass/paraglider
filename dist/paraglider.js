(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = { "default": require(9), __esModule: true };
},{"9":9}],2:[function(require,module,exports){
module.exports = { "default": require(10), __esModule: true };
},{"10":10}],3:[function(require,module,exports){
module.exports = { "default": require(11), __esModule: true };
},{"11":11}],4:[function(require,module,exports){
module.exports = { "default": require(12), __esModule: true };
},{"12":12}],5:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
},{}],6:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _defineProperty = require(3);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
},{"3":3}],7:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _assign = require(2);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};
},{"2":2}],8:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _from = require(1);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};
},{"1":1}],9:[function(require,module,exports){
require(70);
require(66);
module.exports = require(18).Array.from;
},{"18":18,"66":66,"70":70}],10:[function(require,module,exports){
require(67);
module.exports = require(18).Object.assign;
},{"18":18,"67":67}],11:[function(require,module,exports){
require(68);
var $Object = require(18).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};
},{"18":18,"68":68}],12:[function(require,module,exports){
require(69);
module.exports = require(18).Object.keys;
},{"18":18,"69":69}],13:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],14:[function(require,module,exports){
var isObject = require(34);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"34":34}],15:[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require(59)
  , toLength  = require(60)
  , toIndex   = require(57);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};
},{"57":57,"59":59,"60":60}],16:[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require(17)
  , TAG = require(64)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};
},{"17":17,"64":64}],17:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],18:[function(require,module,exports){
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],19:[function(require,module,exports){
'use strict';
var $defineProperty = require(43)
  , createDesc      = require(51);

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};
},{"43":43,"51":51}],20:[function(require,module,exports){
// optional / simple context binding
var aFunction = require(13);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};
},{"13":13}],21:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],22:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require(26)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"26":26}],23:[function(require,module,exports){
var isObject = require(34)
  , document = require(27).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"27":27,"34":34}],24:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');
},{}],25:[function(require,module,exports){
var global    = require(27)
  , core      = require(18)
  , ctx       = require(20)
  , hide      = require(29)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;
},{"18":18,"20":20,"27":27,"29":29}],26:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],27:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],28:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],29:[function(require,module,exports){
var dP         = require(43)
  , createDesc = require(51);
module.exports = require(22) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"22":22,"43":43,"51":51}],30:[function(require,module,exports){
module.exports = require(27).document && document.documentElement;
},{"27":27}],31:[function(require,module,exports){
module.exports = !require(22) && !require(26)(function(){
  return Object.defineProperty(require(23)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
},{"22":22,"23":23,"26":26}],32:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require(17);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"17":17}],33:[function(require,module,exports){
// check on default Array iterator
var Iterators  = require(39)
  , ITERATOR   = require(64)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};
},{"39":39,"64":64}],34:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],35:[function(require,module,exports){
// call something on iterator step with safe closing on error
var anObject = require(14);
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};
},{"14":14}],36:[function(require,module,exports){
'use strict';
var create         = require(42)
  , descriptor     = require(51)
  , setToStringTag = require(53)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require(29)(IteratorPrototype, require(64)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};
},{"29":29,"42":42,"51":51,"53":53,"64":64}],37:[function(require,module,exports){
'use strict';
var LIBRARY        = require(40)
  , $export        = require(25)
  , redefine       = require(52)
  , hide           = require(29)
  , has            = require(28)
  , Iterators      = require(39)
  , $iterCreate    = require(36)
  , setToStringTag = require(53)
  , getPrototypeOf = require(46)
  , ITERATOR       = require(64)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};
},{"25":25,"28":28,"29":29,"36":36,"39":39,"40":40,"46":46,"52":52,"53":53,"64":64}],38:[function(require,module,exports){
var ITERATOR     = require(64)('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};
},{"64":64}],39:[function(require,module,exports){
module.exports = {};
},{}],40:[function(require,module,exports){
module.exports = true;
},{}],41:[function(require,module,exports){
'use strict';
// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = require(48)
  , gOPS     = require(45)
  , pIE      = require(49)
  , toObject = require(61)
  , IObject  = require(32)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || require(26)(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;
},{"26":26,"32":32,"45":45,"48":48,"49":49,"61":61}],42:[function(require,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = require(14)
  , dPs         = require(44)
  , enumBugKeys = require(24)
  , IE_PROTO    = require(54)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require(23)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  require(30).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

},{"14":14,"23":23,"24":24,"30":30,"44":44,"54":54}],43:[function(require,module,exports){
var anObject       = require(14)
  , IE8_DOM_DEFINE = require(31)
  , toPrimitive    = require(62)
  , dP             = Object.defineProperty;

exports.f = require(22) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};
},{"14":14,"22":22,"31":31,"62":62}],44:[function(require,module,exports){
var dP       = require(43)
  , anObject = require(14)
  , getKeys  = require(48);

module.exports = require(22) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};
},{"14":14,"22":22,"43":43,"48":48}],45:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;
},{}],46:[function(require,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = require(28)
  , toObject    = require(61)
  , IE_PROTO    = require(54)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};
},{"28":28,"54":54,"61":61}],47:[function(require,module,exports){
var has          = require(28)
  , toIObject    = require(59)
  , arrayIndexOf = require(15)(false)
  , IE_PROTO     = require(54)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};
},{"15":15,"28":28,"54":54,"59":59}],48:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = require(47)
  , enumBugKeys = require(24);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};
},{"24":24,"47":47}],49:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;
},{}],50:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
var $export = require(25)
  , core    = require(18)
  , fails   = require(26);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};
},{"18":18,"25":25,"26":26}],51:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],52:[function(require,module,exports){
module.exports = require(29);
},{"29":29}],53:[function(require,module,exports){
var def = require(43).f
  , has = require(28)
  , TAG = require(64)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"28":28,"43":43,"64":64}],54:[function(require,module,exports){
var shared = require(55)('keys')
  , uid    = require(63);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};
},{"55":55,"63":63}],55:[function(require,module,exports){
var global = require(27)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"27":27}],56:[function(require,module,exports){
var toInteger = require(58)
  , defined   = require(21);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
},{"21":21,"58":58}],57:[function(require,module,exports){
var toInteger = require(58)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
},{"58":58}],58:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],59:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require(32)
  , defined = require(21);
module.exports = function(it){
  return IObject(defined(it));
};
},{"21":21,"32":32}],60:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require(58)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"58":58}],61:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require(21);
module.exports = function(it){
  return Object(defined(it));
};
},{"21":21}],62:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require(34);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};
},{"34":34}],63:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],64:[function(require,module,exports){
var store      = require(55)('wks')
  , uid        = require(63)
  , Symbol     = require(27).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
},{"27":27,"55":55,"63":63}],65:[function(require,module,exports){
var classof   = require(16)
  , ITERATOR  = require(64)('iterator')
  , Iterators = require(39);
module.exports = require(18).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
},{"16":16,"18":18,"39":39,"64":64}],66:[function(require,module,exports){
'use strict';
var ctx            = require(20)
  , $export        = require(25)
  , toObject       = require(61)
  , call           = require(35)
  , isArrayIter    = require(33)
  , toLength       = require(60)
  , createProperty = require(19)
  , getIterFn      = require(65);

$export($export.S + $export.F * !require(38)(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});

},{"19":19,"20":20,"25":25,"33":33,"35":35,"38":38,"60":60,"61":61,"65":65}],67:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require(25);

$export($export.S + $export.F, 'Object', {assign: require(41)});
},{"25":25,"41":41}],68:[function(require,module,exports){
var $export = require(25);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require(22), 'Object', {defineProperty: require(43).f});
},{"22":22,"25":25,"43":43}],69:[function(require,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = require(61)
  , $keys    = require(48);

require(50)('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});
},{"48":48,"50":50,"61":61}],70:[function(require,module,exports){
'use strict';
var $at  = require(56)(true);

// 21.1.3.27 String.prototype[@@iterator]()
require(37)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});
},{"37":37,"56":56}],71:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PRESET_DEFAULTS = exports.PLUGIN_DEFAULTS = exports.classNames = undefined;

var _extends2 = require(7);

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file src/config.js
 * @author Gregor Adams <greg@pixelass.com>
 */

/**
 * Default classList for the plugin.
 * This object can be replaced but not merged
 * @type {object}
 * @prop {string} pluginLoaded Applied when the plugin has been loaded
 * @prop {string} init Applied when the pugin has been initialized. Removed on first interaction.
 * @prop {string} slides This element will be used to track touches. This is the wrapper around the slides.
 * @prop {string} slide Selector for each single slide.
 * @prop {string} current Appied to the currently visible slide
 * @prop {string} previous Applied to the previous slide in the queue
 * @prop {string} next Applied to the next slide in the queue
 */
var classNames = {
  pluginLoaded: 'pluginLoaded',
  slide: 'slide',
  slides: 'slides',
  init: 'init',
  current: 'current',
  previous: 'previous',
  next: 'next'
};

/**
 * Defaults for the main plugin.
 * @type {object}
 * @prop {object} classNames Mapping of class names to be used by the plugin.
 * @prop {null|onSlide} onSlide Callback while the slider is moving.
 * @prop {null|onEnd} onEnd Callback while the slider stopped moving.
 * @prop {number} speed Animation duration when using paging.
 * @prop {number} spring Animation duration when snapping.
 * @prop {number} snapBackAt Amount of distance needed to snap. [0, 1]
 * @prop {number} threshold Threshold of pixels until the sliding mechanisms is triggered.
 * @prop {number} initialSlide Initially visible slide
 */
var PLUGIN_DEFAULTS = {
  classNames: classNames,
  onSlide: null,
  onEnd: null,
  speed: 250,
  spring: 100,
  snapBackAt: 0.25,
  threshold: 10,
  initialSlide: 0
};

/**
 * Defaults for the presets.
 * @type {object}
 * @prop {object} classNames Mapping of class names to be used by the plugin.
 * @prop {string} classNames.dot Selector for pager dots.
 * @prop {string} classNames.active Active class for pager dots.
 * @prop {string} classNames.nextButton Selector for the navigation to the next slide.
 * @prop {string} classNames.prevButton Selector for the navigation to the previous slide.
 */
var PRESET_DEFAULTS = {
  classNames: (0, _extends3.default)({}, classNames, {
    dot: 'dot',
    active: 'active',
    nextButton: 'nextButton',
    prevButton: 'prevButton'
  })
};

exports.classNames = classNames;
exports.PLUGIN_DEFAULTS = PLUGIN_DEFAULTS;
exports.PRESET_DEFAULTS = PRESET_DEFAULTS;

},{"7":7}],72:[function(require,module,exports){
(function (global){
'use strict';

var _extends2 = require(7);

var _extends3 = _interopRequireDefault(_extends2);

var _glider = require(73);

var _glider2 = _interopRequireDefault(_glider);

var _presets = require(79);

var presets = _interopRequireWildcard(_presets);

var _wrapper = require(80);

var _wrapper2 = _interopRequireDefault(_wrapper);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.Paraglider = (0, _extends3.default)({
  API: _glider2.default,
  wrapper: _wrapper2.default
}, presets);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"7":7,"73":73,"79":79,"80":80}],73:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require(8);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _keys = require(4);

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = require(7);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _config = require(71);

var _helpers = require(74);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file src/index.js
 * @author Gregor Adams <greg@pixelass.com>
 */

var Glider = function () {
  /**
   * A simple slider API. This class simply applies classnames
   * to the current and surrounding slides.
   *
   * It offers an API that allows you to implement any behaviour imaginable. 😂
   * @param {object} options Custom options for the Plugin call
   * @returns {this}
   */
  function Glider() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck3.default)(this, Glider);

    this.options = (0, _extends3.default)({}, _config.PLUGIN_DEFAULTS, options);
    /**
     * State store for interaction flags
     * @private
     * @type {object}
     */
    this._state = {
      currentSlide: this.options.initialSlide
    };

    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.goTo = this.goTo.bind(this);
    this.handleDown = this.handleDown.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.handleUp = this.handleUp.bind(this);
    this.getClientX = this.getClientX.bind(this);
  }

  /**
   * Handles internal storage
   * @private
   * @param {object} newState The new state porperties to merge into the old state
   */


  (0, _createClass3.default)(Glider, [{
    key: 'setState',
    value: function setState(newState) {
      this._state = (0, _extends3.default)({}, this.state, newState);
    }

    /**
     * Getter for the state
     * @private
     * @returns {object}
     */

  }, {
    key: 'init',


    /**
     * Init call for the plugin.
     *
     * This method assigns the element to the plugin scope, adds the required
     * eventListeners and class names.
     * @param {HTMLElement} el An element containing the required markup with and
     * selectors
     */
    value: function init(el) {
      var classNames = this.options.classNames;

      this.el = el;
      this.slidesWrapper = (0, _helpers.findFirst)('.' + classNames.slides, el);
      this.slides = (0, _helpers.findAll)('.' + classNames.slide, this.slidesWrapper);

      this.addListeners();
      this.addSides();
      this.addInitClassNames();
    }

    /**
     * Adds eventlisteners needed for this plugin to work.
     * Movement and release should be tracked on window or document.
     * @private
    */

  }, {
    key: 'addListeners',
    value: function addListeners() {
      global.addEventListener('mousemove', this.handleMove, { passive: false });
      global.addEventListener('mouseup', this.handleUp);
      global.addEventListener('touchmove', this.handleMove, { passive: false });
      global.addEventListener('touchend', this.handleUp);
      this.slidesWrapper.addEventListener('mousedown', this.handleDown);
      this.slidesWrapper.addEventListener('touchstart', this.handleDown);
    }

    /**
     * Removes all eventlisteners. (Helpful when destroying the plugin instance)
     * @private
     */

  }, {
    key: 'removeListeners',
    value: function removeListeners() {
      global.removeEventListener('mousemove', this.handleMove);
      global.removeEventListener('mouseup', this.handleUp);
      global.removeEventListener('touchmove', this.handleMove);
      global.removeEventListener('touchend', this.handleUp);
      this.slidesWrapper.removeEventListener('mousedown', this.handleDown);
      this.slidesWrapper.removeEventListener('touchstart', this.handleDown);
    }

    /**
     * Adds class names to slides
     * @private
     */

  }, {
    key: 'addClassNames',
    value: function addClassNames() {
      var _state = this.state,
          currentSlide = _state.currentSlide,
          previousSlide = _state.previousSlide,
          nextSlide = _state.nextSlide;
      var _options$classNames = this.options.classNames,
          current = _options$classNames.current,
          next = _options$classNames.next,
          previous = _options$classNames.previous;

      this.slides.forEach(function (slide, index) {
        slide.classList.toggle(current, index === currentSlide);
        slide.classList.toggle(next, index === nextSlide);
        slide.classList.toggle(previous, index === previousSlide);
      });
    }

    /**
     * Initially set class names
     *
     * `init` will be removed after the first interaction. It allows a 'silent' start
     * when working with CSS animations or transitions.
     * @private
     */

  }, {
    key: 'addInitClassNames',
    value: function addInitClassNames() {
      var classNames = this.options.classNames;

      this.el.classList.add(classNames.pluginLoaded);
      this.slides.forEach(function (slide) {
        slide.classList.add(classNames.init);
      });
      this.addClassNames();
    }

    /**
     * Batch removal of class names.
     * This is dirty but simply removes anything the plugin could have set.
     * @private
     */

  }, {
    key: 'removeClassNames',
    value: function removeClassNames() {
      var _el$classList;

      var classNames = this.options.classNames;

      var classList = (0, _keys2.default)(classNames).map(function (key) {
        return classNames[key];
      });

      (_el$classList = this.el.classList).remove.apply(_el$classList, (0, _toConsumableArray3.default)(classList));
      this.slides.forEach(function (slide) {
        var _slide$classList;

        (_slide$classList = slide.classList).remove.apply(_slide$classList, (0, _toConsumableArray3.default)(classList));
      });
    }

    /**
     * Destroys the plugin by removing eventlisteners and class names
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      this.removeListeners();
      this.removeClassNames();
    }

    /**
     * Find clientX from the event.
     * This helper will return the correct value for touch or mouse.
     * @private
     * @param {event} e Mouse or touch event
     * @returns {number} THe clientX of the event
     */

  }, {
    key: 'getClientX',
    value: function getClientX(e) {
      var _e$touches = e.touches,
          touches = _e$touches === undefined ? [] : _e$touches;

      var _ref = touches[0] || e,
          clientX = _ref.clientX;

      return clientX;
    }

    /**
     * Add `previous` and `next` classes around the `current` slide.
     * This function respects pager clicks, which modify the next or previous element.
     * @private
     */

  }, {
    key: 'addSides',
    value: function addSides() {
      var _state2 = this.state,
          currentSlide = _state2.currentSlide,
          requestedNext = _state2.requestedNext,
          requestedPrevious = _state2.requestedPrevious;
      var length = this.slides.length;
      // Respect requested slides.
      // {goTo} could set these values.

      var nextSlide = (0, _helpers.eitherOr)(requestedNext, (0, _helpers.modLoop)(currentSlide, 1, length));
      var previousSlide = (0, _helpers.eitherOr)(requestedPrevious, (0, _helpers.modLoop)(currentSlide, -1, length));

      this.setState({ nextSlide: nextSlide, previousSlide: previousSlide });
    }

    /**
     * First interaction with the mouse or per touch will be used to set flags and
     * define initial values.
     * @private
     * @param {event} e Mouse or touch event
     */

  }, {
    key: 'handleDown',
    value: function handleDown(e) {
      var classNames = this.options.classNames;

      var clientX = this.getClientX(e);
      this.slides.forEach(function (slide) {
        slide.classList.remove(classNames.init);
      });
      // Flag down
      // set start coordinate,
      // set current progress
      this.setState({
        down: true,
        xStart: clientX,
        x: 0
      });
    }

    /**
     * Last interaction with the mouse or per touch will be used to set flags
     * and define initial values.
     * Only fires if down is active. Prevents unintended behaviour when the first
     * touch or mousedown was outside the element.
     * @private
     */

  }, {
    key: 'handleUp',
    value: function handleUp() {
      // Only proceed if the plugin signals a previous down event.
      var _state3 = this.state,
          down = _state3.down,
          blocked = _state3.blocked;

      if (down && blocked) {
        var snapBackAt = this.options.snapBackAt;

        var progress = this.state.x / this.el.offsetWidth;
        var end = 0;
        if (progress <= -1 * snapBackAt) {
          end = -1;
        } else if (progress >= snapBackAt) {
          end = 1;
        }
        this.spring(progress, end, this.options.spring);
      }
      this.setState({ down: false, blocked: false });
    }

    /**
     * Moves to the next slide via trigger.
     */

  }, {
    key: 'nextSlide',
    value: function nextSlide(e) {
      if (e && 'preventDefault' in e) {
        e.preventDefault();
      }
      this.addSides();
      this.addClassNames();
      this.spring(0, 1, this.options.speed);
    }

    /**
     * Moves to the previous slide via trigger.
     */

  }, {
    key: 'prevSlide',
    value: function prevSlide(e) {
      if (e && 'preventDefault' in e) {
        e.preventDefault();
      }
      this.addSides();
      this.addClassNames();
      this.spring(0, -1, this.options.speed);
    }

    /**
     * Moves to the nth slide via trigger. Respects left/right movement
     */

  }, {
    key: 'goTo',
    value: function goTo(n) {
      if (n > this.state.currentSlide) {
        this.setState({ requestedNext: n });
        this.nextSlide();
      } else if (n < this.state.currentSlide) {
        this.setState({ requestedPrevious: n });
        this.prevSlide();
      }
    }

    /**
     * Handle the end of the slide animation.
     * If there is a callback called `onEnd` call it.
     * @private
     * @param {number} end Final value
     */

  }, {
    key: 'handleEnd',
    value: function handleEnd(end) {
      var onEnd = this.options.onEnd;

      if (end === -1) {
        this.setState({
          currentSlide: this.state.previousSlide
        });
      } else if (end === 1) {
        this.setState({
          currentSlide: this.state.nextSlide
        });
      }
      this.setState({
        requestedNext: null,
        requestedPrevious: null
      });
      this.addSides();
      this.addClassNames();

      if (typeof onEnd === 'function') {
        var _getReturnValues = this.getReturnValues(false),
            next = _getReturnValues.next,
            previous = _getReturnValues.previous,
            current = _getReturnValues.current,
            rest = _getReturnValues.rest;
        /**
         * Callback for the end
         * @public
         * @type {onEnd}
         */


        onEnd({ next: next, previous: previous, current: current, rest: rest }, this.slides);
      }
    }

    /**
     * Handles the snap animation
     * @private
     * @param {number} progress Current value
     * @param {number} end Final value
     * @param {number} duration Time to pass the until animation is done.
     */

  }, {
    key: 'spring',
    value: function spring(progress, end, duration) {
      var _this = this;

      (0, _helpers.animate)(duration, progress, end, function (p) {
        _this.setState({
          x: p * _this.el.offsetWidth
        });
        if (p === end) {
          _this.handleEnd(end);
        } else {
          _this.handleProgress();
        }
      });
    }

    /**
     * Handler vor mouse or touch movement.
     * Waits for a threshold and then records the movement on the `x` axis
     * @private
     * @param {event} e Mouse or touch move event
     */

  }, {
    key: 'handleMove',
    value: function handleMove(e) {
      var _state4 = this.state,
          down = _state4.down,
          xStart = _state4.xStart,
          x = _state4.x,
          blocked = _state4.blocked;
      var threshold = this.options.threshold;

      if (down) {
        if (Math.abs(x) > threshold || blocked) {
          this.setState({ blocked: true });
          e.preventDefault();
          this.handleProgress();
        }
        var clientX = this.getClientX(e);
        this.setState({
          x: xStart - clientX
        });
      }
    }
  }, {
    key: 'getReturnValues',
    value: function getReturnValues() {
      var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      var progress = this.state.x / this.el.offsetWidth;
      var _state5 = this.state,
          currentSlide = _state5.currentSlide,
          nextSlide = _state5.nextSlide,
          previousSlide = _state5.previousSlide;

      var right = progress * -1;
      var current = currentSlide;
      // We only need the lower value
      var next = progress < right && direction ? null : nextSlide;
      var previous = progress > right && direction ? null : previousSlide;

      var rest = this.slides.map(function (el, index) {
        return index;
      }).filter(function (originalIndex) {
        return [previous, current, next].indexOf(originalIndex) === -1;
      });

      return {
        next: next,
        previous: previous,
        current: current,
        rest: rest,
        progress: Math.abs(progress)
      };
    }

    /**
     * Handles the progress. Calculates the progress from the
     * internal state and element dimension.
     * A callback is fired if set
     * @private
     */

  }, {
    key: 'handleProgress',
    value: function handleProgress() {
      var onSlide = this.options.onSlide;


      if (typeof onSlide === 'function') {
        var _getReturnValues2 = this.getReturnValues(),
            progress = _getReturnValues2.progress,
            next = _getReturnValues2.next,
            previous = _getReturnValues2.previous,
            current = _getReturnValues2.current,
            rest = _getReturnValues2.rest;
        /**
         * Callback for progression
         * @type {onSlide}
         */


        onSlide(progress, { next: next, previous: previous, current: current, rest: rest }, this.slides);
      }
    }
  }, {
    key: 'state',
    get: function get() {
      return this._state;
    }

    /**
     * The state setter is disabled. Use `this.setState` instead
     * @private
     * @param {*} x
     */
    ,
    set: function set(x) {
      throw new Error('Attempted to set state via a setter. Please use the setState method instead.');
    }
  }]);
  return Glider;
}();

/**
 * @typedef onSlide
 * @type {function}
 * @param {object} offset Offset of the element to either side.
 * @param {number} offset.left A value between [0, 1]
 * @param {number} offset.right A value between [0, 1]
 * @param {object} data Data about the slider activity
 * @param {number} data.previous Index of previous slide
 * @param {number} data.current Index of current slide
 * @param {number} data.next Index of next slide
 * @param {array.<string>} data.rest Array of all remaining slide indexes
 * @param {array.<HTMLElement>} slides Array of all slides
 */

/**
 * @typedef onEnd
 * @type {function}
 * @param {object} data Data about the slider activity
 * @param {number} data.previous Index of previous slide
 * @param {number} data.current Index of current slide
 * @param {number} data.next Index of next slide
 * @param {array.<string>} data.rest Array of all remaining slide indexes
 * @param {array.<HTMLElement>} slides Array of all slides
 */

exports.default = Glider;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"4":4,"5":5,"6":6,"7":7,"71":71,"74":74,"8":8}],74:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eitherOr = exports.modLoop = exports.animate = exports.findFirst = exports.findAll = undefined;

var _from = require(1);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global document */
/**
 * @file src/helpers.js
 * @author Gregor Adams <greg@pixelass.com>
 */

/**
 * Animates from one value to the other over a given time.
 * This function uses requestAnimationFrame and Date to return a reliable result.
 * @private
 * @param {integer} speed Duration of animation
 * @param {number} from Starting point
 * @param {number} to End point
 * @param {animationCallback} callback Callback to be run on every step.
 * @returns {function} A looping function.
 */
var animate = function animate(speed, from, to, callback) {
  var now = Date.now();
  var step = (to - from) / speed;
  var loop = function loop() {
    var then = Date.now();
    var diff = then - now;
    var timeLeft = speed - diff;

    if (timeLeft > 0) {
      global.requestAnimationFrame(loop);
      callback(from + step * diff);
    } else {
      global.cancelAnimationFrame(loop);
      callback(to);
    }
  };
  return loop();
};
/**
 * @typedef animationCallback
 * @type {function}
 * @param {number} progress Current value between `from` and `to`
 */

/**
 * Helper to get elements. Similar to jQuery's `$(selector, context)`
 * @private
 * @param {string} selector selector to find
 * @param {HTMLElement} [context=document] Context to search in
 * @returns {array} A list of matching elements
 */
var findAll = function findAll(selector) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return (0, _from2.default)(context.querySelectorAll(selector));
};

/**
 * Helper to get elements. Similar to jQuery's `$(selector, context)[0]`
 * @private
 * @param {string} selector selector to find
 * @param {HTMLElement} [context=document] Context to search in
 * @returns {HTMLElement} The first matching element
 */
var findFirst = function findFirst(selector) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return context.querySelector(selector);
};

/**
 * Returns either the first or second value depending on truthness.
 * Any number is considered true.
 * @private
 * @param {*} either
 * @param {*} or
 * @returns {*} One of the two input values
 */
var eitherOr = function eitherOr(either, or) {
  return typeof either === 'number' ? either : either || or;
};

/**
 * A loop using modulo
 * @private
 * @param {number} current Current value
 * @param {number} addition Addition to the current value
 * @param {number} length Maximum value.
 * @returns {number} Resulting number
 */
var modLoop = function modLoop(current, addition, length) {
  return (current + addition + length) % length;
};

exports.findAll = findAll;
exports.findFirst = findFirst;
exports.animate = animate;
exports.modLoop = modLoop;
exports.eitherOr = eitherOr;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"1":1}],75:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require(7);

var _extends3 = _interopRequireDefault(_extends2);

var _wrapper = require(80);

var _wrapper2 = _interopRequireDefault(_wrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Belt animation slider
 * @param {HTMLElement} glider
 * @param {object} opts
 * @returns {function}
 */
var belt = function belt(glider, opts) {
  return (0, _wrapper2.default)(glider, (0, _extends3.default)({}, opts, {
    onSlide: function onSlide(progress, _ref, slides) {
      var next = _ref.next,
          previous = _ref.previous,
          current = _ref.current,
          rest = _ref.rest;

      if (previous !== null) {
        slides[previous].style.transform = 'translate3d(' + (-100 + progress * 100) + '%,0,0)';
        slides[current].style.transform = 'translate3d(' + progress * 100 + '%,0,0)';
      } else if (next !== null) {
        slides[next].style.transform = 'translate3d(' + (100 - progress * 100) + '%,0,0)';
        slides[current].style.transform = 'translate3d(' + progress * -100 + '%,0,0)';
      }
      if (typeof opts.onSlide === 'function') {
        opts.onSlide(progress, { next: next, previous: previous, current: current, rest: rest }, slides);
      }
    },
    onEnd: function onEnd(_ref2, slides) {
      var next = _ref2.next,
          previous = _ref2.previous,
          current = _ref2.current,
          rest = _ref2.rest;

      rest.forEach(function (slide) {
        slides[slide].style.transform = '';
      });
      slides[current].style.transform = '';
      slides[previous].style.transform = 'translate(-100%,0,0)';
      slides[next].style.transform = 'translate(100%,0,0)';
      if (typeof opts.onEnd === 'function') {
        opts.onEnd({ next: next, previous: previous, current: current, rest: rest }, slides);
      }
    }
  }));
};

exports.default = belt;

},{"7":7,"80":80}],76:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require(7);

var _extends3 = _interopRequireDefault(_extends2);

var _wrapper = require(80);

var _wrapper2 = _interopRequireDefault(_wrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Cover left/right animation slider
 * @param {HTMLElement} glider
 * @param {object} opts
 * @returns {function}
 */
var coverLeftRight = function coverLeftRight(glider, opts) {
  return (0, _wrapper2.default)(glider, (0, _extends3.default)({}, opts, {
    onSlide: function onSlide(progress, _ref, slides) {
      var next = _ref.next,
          previous = _ref.previous,
          current = _ref.current,
          rest = _ref.rest;

      if (previous !== null) {
        slides[previous].style.transform = 'translate3d(' + (-100 + progress * 100) + '%,0,0)';
      } else if (next !== null) {
        slides[next].style.transform = 'translate3d(' + (100 - progress * 100) + '%,0,0)';
      }
      if (typeof opts.onSlide === 'function') {
        opts.onSlide(progress, { next: next, previous: previous, current: current, rest: rest }, slides);
      }
    },
    onEnd: function onEnd(_ref2, slides) {
      var next = _ref2.next,
          previous = _ref2.previous,
          current = _ref2.current,
          rest = _ref2.rest;

      rest.forEach(function (slide) {
        slides[slide].style.transform = '';
      });
      slides[current].style.transform = '';
      slides[previous].style.transform = 'translate(-100%,0,0)';
      slides[next].style.transform = 'translate(100%,0,0)';
      if (typeof opts.onEnd === 'function') {
        opts.onEnd({ next: next, previous: previous, current: current, rest: rest }, slides);
      }
    }
  }));
};

exports.default = coverLeftRight;

},{"7":7,"80":80}],77:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require(7);

var _extends3 = _interopRequireDefault(_extends2);

var _wrapper = require(80);

var _wrapper2 = _interopRequireDefault(_wrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Cover left animation slider
 * @param {HTMLElement} glider
 * @param {object} opts
 * @returns {function}
 */
var coverLeft = function coverLeft(glider, opts) {
  return (0, _wrapper2.default)(glider, (0, _extends3.default)({}, opts, {
    onSlide: function onSlide(progress, _ref, slides) {
      var next = _ref.next,
          previous = _ref.previous,
          current = _ref.current,
          rest = _ref.rest;

      if (previous !== null) {
        slides[previous].style.transform = 'translate3d(' + (-100 + progress * 100) + '%,0,0)';
      } else if (next !== null) {
        slides[next].style.transform = 'translate3d(' + (-100 + progress * 100) + '%,0,0)';
      }
      if (typeof opts.onSlide === 'function') {
        opts.onSlide(progress, { next: next, previous: previous, current: current, rest: rest }, slides);
      }
    },
    onEnd: function onEnd(_ref2, slides) {
      var next = _ref2.next,
          previous = _ref2.previous,
          current = _ref2.current,
          rest = _ref2.rest;

      rest.forEach(function (slide) {
        slides[slide].style.transform = '';
      });
      slides[current].style.transform = '';
      slides[previous].style.transform = 'translate(-100%,0,0)';
      slides[next].style.transform = 'translate(100%,0,0)';
      if (typeof opts.onEnd === 'function') {
        opts.onEnd({ next: next, previous: previous, current: current, rest: rest }, slides);
      }
    }
  }));
};

exports.default = coverLeft;

},{"7":7,"80":80}],78:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require(7);

var _extends3 = _interopRequireDefault(_extends2);

var _wrapper = require(80);

var _wrapper2 = _interopRequireDefault(_wrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Cover right animation slider
 * @param {HTMLElement} glider
 * @param {object} opts
 * @returns {function}
 */
var coverRight = function coverRight(glider, opts) {
  return (0, _wrapper2.default)(glider, (0, _extends3.default)({}, opts, {
    onSlide: function onSlide(progress, _ref, slides) {
      var next = _ref.next,
          previous = _ref.previous,
          current = _ref.current,
          rest = _ref.rest;

      if (previous !== null) {
        slides[previous].style.transform = 'translate3d(' + (100 - progress * 100) + '%,0,0)';
      } else if (next !== null) {
        slides[next].style.transform = 'translate3d(' + (100 - progress * 100) + '%,0,0)';
      }
      if (typeof opts.onSlide === 'function') {
        opts.onSlide(progress, { next: next, previous: previous, current: current, rest: rest }, slides);
      }
    },
    onEnd: function onEnd(_ref2, slides) {
      var next = _ref2.next,
          previous = _ref2.previous,
          current = _ref2.current,
          rest = _ref2.rest;

      rest.forEach(function (slide) {
        slides[slide].style.transform = '';
      });
      slides[current].style.transform = '';
      slides[previous].style.transform = 'translate(-100%,0,0)';
      slides[next].style.transform = 'translate(100%,0,0)';
      if (typeof opts.onEnd === 'function') {
        opts.onEnd({ next: next, previous: previous, current: current, rest: rest }, slides);
      }
    }
  }));
};

exports.default = coverRight;

},{"7":7,"80":80}],79:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.coverLeftRight = exports.coverRight = exports.coverLeft = exports.belt = undefined;

var _belt = require(75);

var _belt2 = _interopRequireDefault(_belt);

var _coverLeft = require(77);

var _coverLeft2 = _interopRequireDefault(_coverLeft);

var _coverRight = require(78);

var _coverRight2 = _interopRequireDefault(_coverRight);

var _coverLeftRight = require(76);

var _coverLeftRight2 = _interopRequireDefault(_coverLeftRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.belt = _belt2.default;
exports.coverLeft = _coverLeft2.default;
exports.coverRight = _coverRight2.default;
exports.coverLeftRight = _coverLeftRight2.default;

},{"75":75,"76":76,"77":77,"78":78}],80:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require(7);

var _extends3 = _interopRequireDefault(_extends2);

var _from = require(1);

var _from2 = _interopRequireDefault(_from);

var _glider = require(73);

var _glider2 = _interopRequireDefault(_glider);

var _config = require(71);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Simple wrapper including pagers and navigation arrows
 * @param {HTMLElement} glider
 * @param {object} opts
 * @returns {function}
 */
var wrapper = function wrapper(glider, opts) {
  if (!glider) {
    return;
  }
  var pagers = (0, _from2.default)(glider.querySelectorAll('.' + opts.classNames.dot) || []);
  var nextButton = glider.querySelector('.' + opts.classNames.nextButton);
  var prevButton = glider.querySelector('.' + opts.classNames.prevButton);
  var options = (0, _extends3.default)({}, _config.PRESET_DEFAULTS, opts, {
    onSlide: function onSlide(progress, _ref, slides) {
      var next = _ref.next,
          previous = _ref.previous,
          current = _ref.current,
          rest = _ref.rest;

      if (typeof opts.onSlide === 'function') {
        opts.onSlide(progress, { next: next, previous: previous, current: current, rest: rest }, slides);
      }
    },
    onEnd: function onEnd(_ref2, slides) {
      var next = _ref2.next,
          previous = _ref2.previous,
          current = _ref2.current,
          rest = _ref2.rest;

      pagers.forEach(function (pager, i) {
        pager.classList.toggle(opts.classNames.active, i === current);
      });
      slides.forEach(function (slide) {
        slide.style.transform = '';
      });
      if (typeof opts.onEnd === 'function') {
        opts.onEnd({ next: next, previous: previous, current: current, rest: rest }, slides);
      }
    }
  });
  var instance = new _glider2.default(options);
  instance.init(glider);
  pagers.forEach(function (pager, i) {
    var goto = function goto(e) {
      e.preventDefault();
      return instance.goTo(i);
    };
    pager.addEventListener('click', goto);
    pager.classList.toggle(options.classNames.active, i === (opts.initialSlide || 0));
  });
  if (nextButton) {
    nextButton.addEventListener('click', instance.nextSlide);
  }
  if (prevButton) {
    prevButton.addEventListener('click', instance.prevSlide);
  }
  return instance.destroy;
};

exports.default = wrapper;

},{"1":1,"7":7,"71":71,"73":73}]},{},[72]);
