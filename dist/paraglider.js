(function(g, f) { var r = (typeof require === 'function' ? require : function(name) { return {}[name]; }); if (typeof exports === 'object' && typeof module !== 'undefined') { module.exports = f(r) } else if (typeof define === 'function' && define.amd) { define([], f.bind(g,r)) } else { g.Paraglider = f(r) } })(this, function(require,define, module,exports) { return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],2:[function(require,module,exports){
// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = require(48)('unscopables')
  , ArrayProto  = Array.prototype;
if(ArrayProto[UNSCOPABLES] == undefined)require(16)(ArrayProto, UNSCOPABLES, {});
module.exports = function(key){
  ArrayProto[UNSCOPABLES][key] = true;
};
},{"16":16,"48":48}],3:[function(require,module,exports){
var isObject = require(21);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"21":21}],4:[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require(43)
  , toLength  = require(44)
  , toIndex   = require(41);
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
},{"41":41,"43":43,"44":44}],5:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],6:[function(require,module,exports){
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],7:[function(require,module,exports){
// optional / simple context binding
var aFunction = require(1);
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
},{"1":1}],8:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],9:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require(13)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"13":13}],10:[function(require,module,exports){
var isObject = require(21)
  , document = require(14).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"14":14,"21":21}],11:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');
},{}],12:[function(require,module,exports){
var global    = require(14)
  , core      = require(6)
  , hide      = require(16)
  , redefine  = require(36)
  , ctx       = require(7)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
    , key, own, out, exp;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if(target)redefine(target, key, out, type & $export.U);
    // export
    if(exports[key] != out)hide(exports, key, exp);
    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
  }
};
global.core = core;
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
},{"14":14,"16":16,"36":36,"6":6,"7":7}],13:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],14:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],15:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],16:[function(require,module,exports){
var dP         = require(28)
  , createDesc = require(35);
module.exports = require(9) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"28":28,"35":35,"9":9}],17:[function(require,module,exports){
module.exports = require(14).document && document.documentElement;
},{"14":14}],18:[function(require,module,exports){
module.exports = !require(9) && !require(13)(function(){
  return Object.defineProperty(require(10)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
},{"10":10,"13":13,"9":9}],19:[function(require,module,exports){
// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};
},{}],20:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require(5);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"5":5}],21:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],22:[function(require,module,exports){
'use strict';
var create         = require(27)
  , descriptor     = require(35)
  , setToStringTag = require(37)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require(16)(IteratorPrototype, require(48)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};
},{"16":16,"27":27,"35":35,"37":37,"48":48}],23:[function(require,module,exports){
'use strict';
var LIBRARY        = require(26)
  , $export        = require(12)
  , redefine       = require(36)
  , hide           = require(16)
  , has            = require(15)
  , Iterators      = require(25)
  , $iterCreate    = require(22)
  , setToStringTag = require(37)
  , getPrototypeOf = require(30)
  , ITERATOR       = require(48)('iterator')
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
},{"12":12,"15":15,"16":16,"22":22,"25":25,"26":26,"30":30,"36":36,"37":37,"48":48}],24:[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],25:[function(require,module,exports){
module.exports = {};
},{}],26:[function(require,module,exports){
module.exports = false;
},{}],27:[function(require,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = require(3)
  , dPs         = require(29)
  , enumBugKeys = require(11)
  , IE_PROTO    = require(38)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require(10)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  require(17).appendChild(iframe);
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

},{"10":10,"11":11,"17":17,"29":29,"3":3,"38":38}],28:[function(require,module,exports){
var anObject       = require(3)
  , IE8_DOM_DEFINE = require(18)
  , toPrimitive    = require(46)
  , dP             = Object.defineProperty;

exports.f = require(9) ? Object.defineProperty : function defineProperty(O, P, Attributes){
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
},{"18":18,"3":3,"46":46,"9":9}],29:[function(require,module,exports){
var dP       = require(28)
  , anObject = require(3)
  , getKeys  = require(32);

module.exports = require(9) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};
},{"28":28,"3":3,"32":32,"9":9}],30:[function(require,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = require(15)
  , toObject    = require(45)
  , IE_PROTO    = require(38)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};
},{"15":15,"38":38,"45":45}],31:[function(require,module,exports){
var has          = require(15)
  , toIObject    = require(43)
  , arrayIndexOf = require(4)(false)
  , IE_PROTO     = require(38)('IE_PROTO');

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
},{"15":15,"38":38,"4":4,"43":43}],32:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = require(31)
  , enumBugKeys = require(11);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};
},{"11":11,"31":31}],33:[function(require,module,exports){
'use strict';
var path      = require(34)
  , invoke    = require(19)
  , aFunction = require(1);
module.exports = function(/* ...pargs */){
  var fn     = aFunction(this)
    , length = arguments.length
    , pargs  = Array(length)
    , i      = 0
    , _      = path._
    , holder = false;
  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
  return function(/* ...args */){
    var that = this
      , aLen = arguments.length
      , j = 0, k = 0, args;
    if(!holder && !aLen)return invoke(fn, pargs, that);
    args = pargs.slice();
    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
    while(aLen > k)args.push(arguments[k++]);
    return invoke(fn, args, that);
  };
};
},{"1":1,"19":19,"34":34}],34:[function(require,module,exports){
module.exports = require(14);
},{"14":14}],35:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],36:[function(require,module,exports){
var global    = require(14)
  , hide      = require(16)
  , has       = require(15)
  , SRC       = require(47)('src')
  , TO_STRING = 'toString'
  , $toString = Function[TO_STRING]
  , TPL       = ('' + $toString).split(TO_STRING);

require(6).inspectSource = function(it){
  return $toString.call(it);
};

(module.exports = function(O, key, val, safe){
  var isFunction = typeof val == 'function';
  if(isFunction)has(val, 'name') || hide(val, 'name', key);
  if(O[key] === val)return;
  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if(O === global){
    O[key] = val;
  } else {
    if(!safe){
      delete O[key];
      hide(O, key, val);
    } else {
      if(O[key])O[key] = val;
      else hide(O, key, val);
    }
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString(){
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});
},{"14":14,"15":15,"16":16,"47":47,"6":6}],37:[function(require,module,exports){
var def = require(28).f
  , has = require(15)
  , TAG = require(48)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"15":15,"28":28,"48":48}],38:[function(require,module,exports){
var shared = require(39)('keys')
  , uid    = require(47);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};
},{"39":39,"47":47}],39:[function(require,module,exports){
var global = require(14)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"14":14}],40:[function(require,module,exports){
var ctx                = require(7)
  , invoke             = require(19)
  , html               = require(17)
  , cel                = require(10)
  , global             = require(14)
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(require(5)(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};
},{"10":10,"14":14,"17":17,"19":19,"5":5,"7":7}],41:[function(require,module,exports){
var toInteger = require(42)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
},{"42":42}],42:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],43:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require(20)
  , defined = require(8);
module.exports = function(it){
  return IObject(defined(it));
};
},{"20":20,"8":8}],44:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require(42)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"42":42}],45:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require(8);
module.exports = function(it){
  return Object(defined(it));
};
},{"8":8}],46:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require(21);
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
},{"21":21}],47:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],48:[function(require,module,exports){
var store      = require(39)('wks')
  , uid        = require(47)
  , Symbol     = require(14).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
},{"14":14,"39":39,"47":47}],49:[function(require,module,exports){
'use strict';
var addToUnscopables = require(2)
  , step             = require(24)
  , Iterators        = require(25)
  , toIObject        = require(43);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require(23)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');
},{"2":2,"23":23,"24":24,"25":25,"43":43}],50:[function(require,module,exports){
var $iterators    = require(49)
  , redefine      = require(36)
  , global        = require(14)
  , hide          = require(16)
  , Iterators     = require(25)
  , wks           = require(48)
  , ITERATOR      = wks('iterator')
  , TO_STRING_TAG = wks('toStringTag')
  , ArrayValues   = Iterators.Array;

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype
    , key;
  if(proto){
    if(!proto[ITERATOR])hide(proto, ITERATOR, ArrayValues);
    if(!proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    for(key in $iterators)if(!proto[key])redefine(proto, key, $iterators[key], true);
  }
}
},{"14":14,"16":16,"25":25,"36":36,"48":48,"49":49}],51:[function(require,module,exports){
var $export = require(12)
  , $task   = require(40);
$export($export.G + $export.B, {
  setImmediate:   $task.set,
  clearImmediate: $task.clear
});
},{"12":12,"40":40}],52:[function(require,module,exports){
// ie9- setTimeout & setInterval additional parameters fix
var global     = require(14)
  , $export    = require(12)
  , invoke     = require(19)
  , partial    = require(33)
  , navigator  = global.navigator
  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
var wrap = function(set){
  return MSIE ? function(fn, time /*, ...args */){
    return set(invoke(
      partial,
      [].slice.call(arguments, 2),
      typeof fn == 'function' ? fn : Function(fn)
    ), time);
  } : set;
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout:  wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});
},{"12":12,"14":14,"19":19,"33":33}],53:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

/**
 * Config data for Paraglider.
 *
 * @file config.js
 * @module config
 * @author Gregor Adams <greg@pixelass.com>
 */

/**
 * Default classList for the plugin.
 * This object can be replaced but not merged
 * @private
 * @type {object}
 * @property {string} pluginLoaded Applied when the plugin has been loaded
 * @property {string} init Applied when the plugin has been initialized. Removed on first interaction.
 * @property {string} slides This element will be used to track touches. This is the wrapper around the slides.
 * @property {string} slide Selector for each single slide.
 * @property {string} current Applied to the currently visible slide
 * @property {string} previous Applied to the previous slide in the queue
 * @property {string} next Applied to the next slide in the queue
 */
const classNames = {
  pluginLoaded: 'pluginLoaded',
  slide: 'slide',
  slides: 'slides',
  init: 'init',
  current: 'current',
  previous: 'previous',
  next: 'next'

  /**
   * Defaults for the presets.
   * @type {object}
   * @property {object} [classNames]
   *   Mapping of class names to be used by the plugin.
   * @property {string} [classNames.pluginLoaded='pluginLoaded']
   *   Applied when the plugin has been loaded
   * @property {string} [classNames.init='init']
   *   Applied when the plugin has been initialized. Removed on first interaction.
   * @property {string} [classNames.slides='slides']
   *   This element will be used to track touches. This is the wrapper around the slides.
   * @property {string} [classNames.slide='slide']
   *   Selector for each single slide.
   * @property {string} [classNames.current='current']
   *   Applied to the currently visible slide
   * @property {string} [classNames.previous='previous']
   *   Applied to the previous slide in the queue
   * @property {string} [classNames.next='next']
   *   Applied to the next slide in the queue
   * @property {object} [addClasses]
   *   Map of class names to be added to slides.
   * @property {object} [addClasses.previous=true]
   *   Sets previous class name to slides.
   * @property {object} [addClasses.current=true]
   *   Sets current class name to slides.
   * @property {object} [addClasses.next=true]
   *   Sets next class name to slides.
   * @property {object} [addMultiClasses]
   *   Map of class names to be added to slides using a counter.
   * @property {object} [addMultiClasses.previous=undefined]
   *   Sets previous class name to slides using a counter.
   * @property {object} [addMultiClasses.current]
   *   Sets current class name to slides using a counter.
   * @property {object} [addMultiClasses.next=undefined]
   *   Sets next class name to slides using a counter.
   * @property {boolean} [enableTouch=true]
   *   Enable touch interaction.
   * @property {boolean} [enableSwipe=true]
   *   Enable mouse/drag/swipe interaction.
   * @property {boolean} [loop=false]
   *   Enable looping slides.
   * @property {?onInit} [onInit=null]
   *   Callback when the slider has been created.
   * @property {?onDestroy} [onDestroy=null]
   *   Callback when the slider has been destroyed.
   * @property {?onSlide} [onSlide=null]
   *   Callback while the slider is moving.
   * @property {?onEnd} [onEnd=null]
   *   Callback while the slider stopped moving.
   * @property {number} [speed=250]
   *   Animation duration when using paging.
   * @property {number} [spring=100]
   *   Animation duration when snapping.
   * @property {number} [snapBackAt=0.25]
   *   Amount of distance needed to snap. [0, 1]
   * @property {number} [threshold=10]
   *   Threshold of pixels until the sliding mechanisms is triggered.
   * @property {number} [initialSlide=0]
   *   Initially visible slide
   * @property {number} [visibleSlides=1]
   *   Amount of visible slides
   * @property {number} [slideBy=1]
   *   Amount of slides to slide on interaction
   */
};const PLUGIN_DEFAULTS = {
  classNames,
  addClasses: { previous: true, current: true, next: true },
  addMultiClasses: { current: true },
  enableTouch: true,
  enableSwipe: true,
  loop: true,
  onInit: null,
  onDestroy: null,
  onSlide: null,
  onEnd: null,
  speed: 250,
  spring: 100,
  snapBackAt: 0.25,
  threshold: 10,
  initialSlide: 0,
  visibleSlides: 1,
  slideBy: 1

  /**
   * Defaults for the presets.
   * @type {object}
   * @property {object} [classNames]
   *   Mapping of class names to be used by the plugin.
   * @property {string} [classNames.pluginLoaded='pluginLoaded']
   *   Applied when the plugin has been loaded
   * @property {string} [classNames.init='init']
   *   Applied when the plugin has been initialized. Removed on first interaction.
   * @property {string} [classNames.slides='slides']
   *   This element will be used to track touches. This is the wrapper around the slides.
   * @property {string} [classNames.slide='slide']
   *   Selector for each single slide.
   * @property {string} [classNames.current='current']
   *   Applied to the currently visible slide
   * @property {string} [classNames.previous='previous']
   *   Applied to the previous slide in the queue
   * @property {string} [classNames.next='next']
   *   Applied to the next slide in the queue
   * @property {string} [classNames.dot='dot']
   *   Selector for pager dots.
   * @property {string} [classNames.active='active']
   *   Active class for pager dots.
   * @property {string} [classNames.nextButton='nextButton']
   *   Selector for the navigation to the next slide.
   * @property {string} [classNames.prevButton='prevButton']
   *   Selector for the navigation to the previous slide.
   * @property {object} [addClasses]
   *   Map of class names to be added to slides.
   * @property {object} [addClasses.previous=true]
   *   Sets previous class name to slides.
   * @property {object} [addClasses.current=true]
   *   Sets current class name to slides.
   * @property {object} [addClasses.next=true]
   *   Sets next class name to slides.
   * @property {object} [addMultiClasses]
   *   Map of class names to be added to slides using a counter.
   * @property {object} [addMultiClasses.previous=undefined]
   *   Sets previous class name to slides using a counter.
   * @property {object} [addMultiClasses.current]
   *   Sets current class name to slides using a counter.
   * @property {object} [addMultiClasses.next=undefined]
   *   Sets next class name to slides using a counter.
   * @property {boolean} [enableTouch=true]
   *   Enable touch interaction.
   * @property {boolean} [enableSwipe=true]
   *   Enable mouse/drag/swipe interaction.
   * @property {boolean} [loop=false]
   *   Enable looping slides.
   * @property {?onInit} [onInit=null]
   *   Callback when the slider has been created.
   * @property {?onDestroy} [onDestroy=null]
   *   Callback when the slider has been destroyed.
   * @property {?onSlide} [onSlide=null]
   *   Callback while the slider is moving.
   * @property {?onEnd} [onEnd=null]
   *   Callback while the slider stopped moving.
   * @property {number} [speed=250]
   *   Animation duration when using paging.
   * @property {number} [spring=100]
   *   Animation duration when snapping.
   * @property {number} [snapBackAt=0.25]
   *   Amount of distance needed to snap. [0, 1]
   * @property {number} [threshold=10]
   *   Threshold of pixels until the sliding mechanisms is triggered.
   * @property {number} [initialSlide=0]
   *   Initially visible slide
   * @property {number} [visibleSlides=1]
   *   Amount of visible slides
   * @property {number} [slideBy=1]
   *   Amount of slides to slide on interaction
   */
};const PRESET_DEFAULTS = _extends({}, PLUGIN_DEFAULTS, {
  classNames: _extends({}, classNames, {
    dot: 'dot',
    active: 'active',
    nextButton: 'nextButton',
    prevButton: 'prevButton'
  })
});

exports.classNames = classNames;
exports.PLUGIN_DEFAULTS = PLUGIN_DEFAULTS;
exports.PRESET_DEFAULTS = PRESET_DEFAULTS;

},{}],54:[function(require,module,exports){
(function (global){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
}; /**
    * @file glider/index.js
    * @author Gregor Adams <greg@pixelass.com>
    */

var _config = require(53);

var _helpers = require(55);

/**
 * Paraglider plugin.
 * @type {class}
 */
class Glider {
  /**
   * Paraglider is an API driven slider.
   * It exposes a timeline and offers some options.
   *
   * This gives developers a lot of freedom when implementing a slider.
   * The main purpose for this plugin is to create slideshows with a parallax effect.
   * Due to the simplicity you can feed the timeline to other plugins and create amazing
   * effects like animating SVGs or drawing on a canvas.
   *
   * @param {PLUGIN_DEFAULTS} options Custom options for the Plugin call
   * @returns {this}
   */
  constructor(options = {}) {
    /**
     * Plugin options merged from defaults and custom configuration
     * @private
     * @type {object}
     */
    this.options = _extends({}, _config.PLUGIN_DEFAULTS, options);
    /**
     * State store for interaction flags
     * @private
     * @type {object}
     */
    this._state = {
      currentSlide: this.options.initialSlide,
      init: true
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
   * @param {object} newState The new state properties to merge into the old state
   */
  setState(newState) {
    this._state = _extends({}, this.state, newState);
  }

  /**
   * Getter for the state
   * @private
   * @returns {object}
   */
  get state() {
    return this._state;
  }

  /**
   * Init call for the plugin.
   *
   * This method assigns the element to the plugin scope, adds the required
   * event listeners and class names.
   * @param {Element} el An element containing the required markup with and
   * selectors
   */
  init(el) {
    const { classNames, onInit } = this.options;
    /**
     * Outer element
     * @private
     * @type {Element}
     */
    this.el = el;
    /**
     * This element is used to track mouse or touch interaction
     * @private
     * @type {Element}
     */
    this.slidesWrapper = (0, _helpers.findFirst)(`.${classNames.slides}`, el);
    /**
     * A list of all slides.
     * @private
     * @type {array.<Element>}
     */
    this.slides = (0, _helpers.findAll)(`.${classNames.slide}`, this.slidesWrapper);

    this.addListeners();
    this.addSides();
    this.addInitClassNames();
    if (typeof onInit === 'function') {
      const {
        next,
        previous,
        current,
        rest
      } = this.getReturnValues(false);
      /**
       * Callback for the end
       * @public
       * @type {onInit}
       */
      onInit({ next, previous, current, rest }, this.slides, this.options);
    }
  }

  /**
   * Destroys the plugin by removing event listeners and class names
   */
  destroy() {
    const { onDestroy } = this.options;
    this.removeListeners();
    this.removeClassNames();
    this.el = null;
    this.slidesWrapper = null;
    this.slides = null;
    if (typeof onDestroy === 'function') {
      /**
       * Callback for the end
       * @public
       * @type {onDestroy}
       */
      onDestroy(this.options);
    }
  }

  /**
   * Adds event listeners needed for this plugin to work.
   * Movement and release should be tracked on window or document.
   * @private
   * @listens {touchmove}
   *   Listens to touchmove if `enableTouch === true`
   *   global listener to allow out of bounds movement.
   * @listens {touchend}
   *   Listens to touchend if `enableTouch === true`
   *   global listener to allow out of bounds movement.
   * @listens {touchstart}
   *   Listens to touchstart if `enableTouch === true`
   *   scoped listener to determine activity
   * @listens {mousemove}
   *   Listens to mousemove if `enableSwipe === true`
   *   global listener to allow out of bounds movement.
   * @listens {mouseup}
   *   Listens to mouseup if `enableSwipe === true`
   *   global listener to allow out of bounds movement.
   * @listens {mousedown}
   *   Listens to mousedown if `enableSwipe === true`
   *   scoped listener to determine activity
   */
  addListeners() {
    /* istanbul ignore next */
    if (this.options.enableTouch) {
      global.addEventListener('touchmove', this.handleMove, { passive: false });
      global.addEventListener('touchend', this.handleUp);
      this.slidesWrapper.addEventListener('touchstart', this.handleDown);
    }
    /* istanbul ignore next */
    if (this.options.enableSwipe) {
      global.addEventListener('mousemove', this.handleMove, { passive: false });
      global.addEventListener('mouseup', this.handleUp);
      this.slidesWrapper.addEventListener('mousedown', this.handleDown);
    }
  }

  /**
   * Removes all event listeners. (Helpful when destroying the plugin instance)
   * @private
   */
  removeListeners() {
    /* istanbul ignore next */
    if (this.options.enableTouch) {
      global.removeEventListener('touchmove', this.handleMove);
      global.removeEventListener('touchend', this.handleUp);
      this.slidesWrapper.removeEventListener('touchstart', this.handleDown);
    }
    /* istanbul ignore next */
    if (this.options.enableSwipe) {
      global.removeEventListener('mousemove', this.handleMove);
      global.removeEventListener('mouseup', this.handleUp);
      this.slidesWrapper.removeEventListener('mousedown', this.handleDown);
    }
  }

  /**
   * Adds class names to slides
   * @private
   */
  addClassNames() {
    const { addClasses, addMultiClasses } = this.options;
    const keys = Object.keys(addClasses);
    if (keys.length > 0) {
      const { currentSlide, previousSlide, nextSlide } = this.state;
      const { visibleSlides, slideBy, classNames } = this.options;
      const { current, next, previous } = classNames;
      const { length } = this.slides;
      const diff = visibleSlides - slideBy;
      this.slides.forEach((slide, index) => {
        const isCurrent = index === currentSlide && addClasses.current === true;
        const isNext = index === (0, _helpers.modLoop)(nextSlide, diff, length) && addClasses.next === true;
        const isPrevious = index === previousSlide && addClasses.previous === true;
        (0, _helpers.toggleClass)(slide, current, isCurrent);
        (0, _helpers.toggleClass)(slide, next, isNext);
        (0, _helpers.toggleClass)(slide, previous, isPrevious);
        if (addMultiClasses.current === true) {
          for (let i = 0; i < visibleSlides; i++) {
            const isCurrent = index === (0, _helpers.modLoop)(currentSlide, i, length);
            (0, _helpers.toggleClass)(slide, `${current}__${i}`, isCurrent);
          }
        }
        if (addMultiClasses.previous === true || addMultiClasses.next === true) {
          for (let i = 0; i < slideBy; i++) {
            const isNext = index === (0, _helpers.modLoop)(nextSlide, i + diff, length) && addMultiClasses.next === true;
            const isPrevious = index === (0, _helpers.modLoop)(previousSlide, i, length) && addMultiClasses.previous === true;
            (0, _helpers.toggleClass)(slide, `${next}__${i}`, isNext);
            (0, _helpers.toggleClass)(slide, `${previous}__${i}`, isPrevious);
          }
        }
      });
    }
  }

  /**
   * Initially set class names
   *
   * `init` will be removed after the first interaction. It allows a 'silent' start
   * when working with CSS animations or transitions.
   * @private
   */
  addInitClassNames() {
    const { classNames } = this.options;
    this.el.classList.add(classNames.pluginLoaded);
    this.slides.forEach(slide => {
      slide.classList.add(classNames.init);
    });
    this.addClassNames();
  }

  /**
   * Batch removal of class names.
   * This is dirty but simply removes anything the plugin could have set.
   * @todo Find a better way to do this.
   * @private
   */
  removeClassNames() {
    const { classNames } = this.options;
    const classList = Object.keys(classNames).map(key => classNames[key]);

    this.el.classList.remove(...classList);
    this.slides.forEach(slide => {
      slide.classList.remove(...classList);
    });
  }

  /**
   * Add `previous` and `next` classes around the `current` slide.
   * This function respects pager clicks, which modify the next or previous element.
   * @private
   */
  addSides() {
    const { slideBy } = this.options;
    const { currentSlide, requestedNext, requestedPrevious } = this.state;
    const { length } = this.slides;
    // Respect requested slides.
    // {goTo} could set these values.
    const originalNext = (0, _helpers.modLoop)(currentSlide, slideBy, length);
    const originalPrevious = (0, _helpers.modLoop)(currentSlide, -1 * slideBy, length);
    const nextSlide = (0, _helpers.eitherOr)(requestedNext, originalNext);
    const previousSlide = (0, _helpers.eitherOr)(requestedPrevious, originalPrevious);
    this.setState({ nextSlide, previousSlide });
  }

  /**
   * Moves to the next slide via trigger.
   * @param {?Event} [e=null] optionally pass the event to prevent it
   */
  nextSlide(e = null) {
    /* istanbul ignore next */
    if (e && 'preventDefault' in e) {
      e.preventDefault();
    }
    /* istanbul ignore next */
    if (this.state.init) {
      this.setState({ init: false });
      this.slides.forEach(slide => {
        slide.classList.remove(this.options.classNames.init);
      });
    }
    this.addSides();
    this.addClassNames();
    this.spring(0, 1, this.options.speed);
    return this.state.nextSlide;
  }

  /**
   * Moves to the previous slide via trigger.
   * @param {?Event} [e=null] optionally pass the event to prevent it
   */
  prevSlide(e = null) {
    /* istanbul ignore next */
    if (e && 'preventDefault' in e) {
      e.preventDefault();
    }
    /* istanbul ignore next */
    if (this.state.init) {
      this.setState({ init: false });
      this.slides.forEach(slide => {
        slide.classList.remove(this.options.classNames.init);
      });
    }
    this.addSides();
    this.addClassNames();
    this.spring(0, -1, this.options.speed);
    return this.state.previousSlide;
  }

  /**
   * Moves to the nth slide via trigger. Respects left/right movement
   * @param {number} n index of requested slide
   */
  goTo(n) {
    if (n > this.state.currentSlide) {
      this.setState({ requestedNext: n });
      return this.nextSlide();
      /* istanbul ignore next */
    } else /* istanbul ignore next */if (n < this.state.currentSlide) {
        this.setState({ requestedPrevious: n });
        return this.prevSlide();
      }
  }

  /**
   * Handles the snap animation
   * @private
   * @param {number} progress Current value
   * @param {number} end Final value
   * @param {number} duration Time to pass the until animation is done.
   */
  spring(progress, end, duration) {
    // Cancel previous animations
    global.cancelAnimationFrame(this.animation);
    /**
     * Animation cache to allow canceling
     */
    const { currentSlide, nextSlide, previousSlide } = this.state;
    const { loop, visibleSlides, slideBy } = this.options;
    const { length } = this.slides;
    let theEnd = end;
    if (!loop) {
      theEnd = end < 0 && previousSlide > currentSlide ? 0 : theEnd;
      theEnd = end > 0 && (0, _helpers.modLoop)(nextSlide, visibleSlides - slideBy, length) < currentSlide ? 0 : theEnd;
    }
    /**
     * Animation flag. Calls the animation and stores the function to allow `cancelAnimationFrame`
     * @private
     * @type {loop}
     */
    this.animation = (0, _helpers.animate)(duration, progress, theEnd, p => {
      this.setState({
        x: p * this.el.offsetWidth
      });
      if (p === theEnd) {
        this.handleEnd(theEnd);
      } else {
        this.handleProgress();
      }
    });
  }

  /* istanbul ignore next */
  /**
   * Find clientX from the event.
   * This helper will return the correct value for touch or mouse.
   * @private
   * @param {Event} e Mouse or touch event
   * @returns {number} THe clientX of the event
   */
  getClientX(e) {
    const { touches = [] } = e;
    const { clientX } = touches[0] || e;
    return clientX;
  }

  /**
   * Prepares return values
   * @private
   * @param {boolean} direction
   * @returns {object}
   */
  getReturnValues(direction = true) {
    const { length } = this.slides;
    const { visibleSlides, slideBy, loop } = this.options;
    const { currentSlide, nextSlide, previousSlide } = this.state;
    const progress = this.state.x / this.el.offsetWidth;
    const right = progress * -1;
    const currentItems = [];
    for (let i = 0; i < visibleSlides; i++) {
      currentItems.push((0, _helpers.modLoop)(currentSlide, i, length));
    }
    // We only need the lower value
    const nextItems = [null];
    const useNext = currentSlide < (0, _helpers.modLoop)(nextSlide, visibleSlides - slideBy, length) || loop;
    /* istanbul ignore next */
    const returnNext = progress > right && direction;
    /* istanbul ignore next */
    if (useNext && returnNext || !direction) {
      nextItems.pop();
      for (let i = 0; i < visibleSlides; i++) {
        nextItems.push((0, _helpers.modLoop)(nextSlide, i, length));
      }
    }
    const previousItems = [null];
    const usePrevious = currentSlide > previousSlide || loop;
    /* istanbul ignore next */
    const returnPrevious = progress < right && direction;
    /* istanbul ignore next */
    if (usePrevious && returnPrevious || !direction) {
      previousItems.pop();
      for (let i = 0; i < slideBy; i++) {
        previousItems.push((0, _helpers.modLoop)(previousSlide, i, length));
      }
    }

    const rest = this.slides.map((el, index) => index).filter(originalIndex => [...previousItems, ...currentItems, ...nextItems].filter(x => x !== 0).indexOf(originalIndex) === -1);

    return {
      rest,
      previous: (0, _helpers.arrayOrValue)(previousItems),
      next: (0, _helpers.arrayOrValue)(nextItems),
      current: (0, _helpers.arrayOrValue)(currentItems),
      progress: Math.abs(progress)
    };
  }

  /* istanbul ignore next */
  /**
   * First interaction with the mouse or per touch will be used to set flags and
   * define initial values.
   * @private
   * @param {Event} e Mouse or touch event
   */
  handleDown(e) {
    const clientX = this.getClientX(e);
    /* istanbul ignore next */
    if (this.state.init) {
      this.slides.forEach(slide => {
        slide.classList.remove(this.options.classNames.init);
      });
    }
    // Flag down
    // set start coordinate,
    // set current progress
    this.setState({
      down: true,
      xStart: clientX,
      x: 0,
      init: false
    });
  }

  /* istanbul ignore next */
  /**
   * Last interaction with the mouse or per touch will be used to set flags
   * and define initial values.
   * Only fires if down is active. Prevents unintended behavior when the first
   * touch or mousedown was outside the element.
   * @private
   */
  handleUp() {
    // Only proceed if the plugin signals a previous down event.
    const { down, blocked } = this.state;
    if (down && blocked) {
      const { snapBackAt } = this.options;
      const progress = this.state.x / this.el.offsetWidth;
      let end = 0;
      if (progress <= -1 * snapBackAt) {
        end = -1;
      } else if (progress >= snapBackAt) {
        end = 1;
      }
      this.spring(progress, end, this.options.spring);
    }
    this.setState({ down: false, blocked: false });
  }

  /* istanbul ignore next */
  /**
   * Handler for mouse or touch movement.
   * Waits for a threshold and then records the movement on the `x` axis
   * @private
   * @param {Event} e Mouse or touch move event
   */
  handleMove(e) {
    if (this.state.down) {
      const { xStart, x, blocked } = this.state;
      const { threshold } = this.options;
      if (Math.abs(x) > threshold || blocked) {
        this.setState({ blocked: true });
        e.preventDefault();
        this.handleProgress();
      }
      const clientX = this.getClientX(e);
      this.setState({
        x: xStart - clientX
      });
    }
  }

  /**
   * Handles the progress. Calculates the progress from the
   * internal state and element dimension.
   * A callback is fired if set
   * @private
   */
  handleProgress() {
    const { onSlide, slideBy } = this.options;

    if (typeof onSlide === 'function') {
      const {
        progress,
        next,
        previous,
        current,
        rest
      } = this.getReturnValues();
      /**
       * Callback for progression
       * @type {onSlide}
       */
      onSlide(progress * slideBy, { next, previous, current, rest }, this.slides, this.options);
    }
  }

  /**
   * Handle the end of the slide animation.
   * If there is a callback called `onEnd` call it.
   * @private
   * @param {number} end Final value
   */
  handleEnd(end) {
    const { onEnd } = this.options;
    if (end === -1) {
      this.setState({
        currentSlide: this.state.previousSlide
      });
      /* istanbul ignore next */
    } else /* istanbul ignore next */if (end === 1) {
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
    global.cancelAnimationFrame(this.animation);

    if (typeof onEnd === 'function') {
      const {
        next,
        previous,
        current,
        rest
      } = this.getReturnValues(false);
      /**
       * Callback for the end
       * @public
       * @type {onEnd}
       */
      onEnd({ next, previous, current, rest }, this.slides, this.options);
    }
  }
}

exports.default = Glider;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"53":53,"55":55}],55:[function(require,module,exports){
(function (global){
'use strict';

exports.__esModule = true;
/* global document */
/**
 * A collection of helper functions.
 *
 * @file helpers.js
 * @module helpers
 * @author Gregor Adams <greg@pixelass.com>
 */

/* istanbul ignore next */
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
const animate = (speed, from, to, callback) => {
  const now = Date.now();
  const step = (to - from) / speed;

  /**
   * Loop function
   * Runs until end is reached
   */
  const loop = () => {
    const then = Date.now();
    const diff = then - now;
    const timeLeft = speed - diff;

    if (timeLeft > 0) {
      global.requestAnimationFrame(loop);
      callback(from + step * diff);
    } else {
      global.cancelAnimationFrame(loop);
      callback(to);
    }
  };
  loop();
  return loop;
};
/**
 * @typedef animationCallback
 * @private
 * @type {function}
 * @param {number} progress Current value between `from` and `to`
 * @example
 * animate(1000, 0, 1,
 *   p => {
 *     console.log(p)
 *   }
 * )
 */

/* istanbul ignore next */
/**
 * Helper to get elements. Similar to jQuery's `$(selector, context)`
 * @private
 * @param {string} selector selector to find
 * @param {Element} [context=document] Context to search in
 * @returns {array} A list of matching elements
 * @example
 * findAll('.foo') // => [...]
 */
const findAll = (selector, context = document) => Array.from(context.querySelectorAll(selector));

/* istanbul ignore next */
/**
 * Helper to get elements. Similar to jQuery's `$(selector, context)[0]`
 * @private
 * @param {string} selector selector to find
 * @param {Element} [context=document] Context to search in
 * @returns {Element} The first matching element
 * @example
 * findFirst('.foo') // => <div .../>
 */
const findFirst = (selector, context = document) => context.querySelector(selector);

/* istanbul ignore next */

/**
 * Toggle class ponyFill to support IE11 and other awkward browsers.
 * IE11 can't use a second argument in `element.classList.toggle`
 * @see https://connect.microsoft.com/IE/Feedback/details/878564/
 * @private
 * @param {Element} el
 * @param {string} className
 * @param {boolean} bool
 * @author Gregor Adams <greg@pixelass.com>
 * @version [version]
 * @example
 * const element = document.querySelector('a')
 * const isActive = true
 * toggle(element, active, isActive) // add active
 * toggle(element, active, 1) // add active
 * toggle(element, active, !0) // add active
 * toggle(element, active, !!1) // add active
 * toggle(element, active, 'yes') // add active
 * toggle(element, active, 'no') // add active
 * toggle(element, active, null) // toggle active
 * toggle(element, active) // toggle active
 * toggle(element, active, false) // remove active
 * toggle(element, active, 0) // remove active
 * toggle(element, active, !!0) // remove active
 * toggle(element, active, '') // remove active
 */
const toggleClass = (el, className, bool = null) => {
  if (bool === null) {
    el.classList.toggle(className);
  } else if (bool) {
    el.classList.add(className);
  } else {
    el.classList.remove(className);
  }
};

/**
 * Returns either the first or second value depending on truthness.
 * Any number is considered true.
 * @private
 * @param {any} either
 * @param {any} or
 * @returns {any} One of the two input values
 * @example
 * eiterOr(0, 4) // => 0
 * eiterOr('0', 4) // => '0'
 * eiterOr('foo', 4) // => 'foo'
 * eiterOr('', 4) // => 4
 * eiterOr(false, 4) // => 4
 * eiterOr(undefined, 4) // => 4
 * eiterOr(null, 4) // => 4
 * eiterOr({}, 4) // => {}
 * eiterOr([], 4) // => []
 * eiterOr(() => {}, 4) // => () => {}
 */
const eitherOr = (either, or) => typeof either === 'number' ? either : either || or;

/**
 * A loop using modulo
 * @private
 * @param {number} current Current value
 * @param {number} addition Addition to the current value
 * @param {number} length Maximum value.
 * @returns {number} Resulting number
 * @example
 * modLoop(1, 2, 3) // => 0
 * modLoop(2, 3, 4) // => 1
 * modLoop(2, -3, 4) // => 3
 * modLoop(20, -3, 20) // => 17
 * modLoop(20, -30, 20) // => 10
 */
const modLoop = (current, addition, length) => (current + addition + length) % length;

/**
 * Takes an array and returns a single value if it is the only item.
 * Otherwise it returns the original array.
 * @private
 * @param {array} arr Array to check
 * @returns {?any}
 * @example
 * arrayOrValue([null, 1, 2]) // => [null, 1, 2]
 * arrayOrValue([1]) // => 1
 * arrayOrValue(['a']) // => 'a'
 * arrayOrValue([1,'1']) // => [1,'1']
 * arrayOrValue([null]) // => null
 */
const arrayOrValue = arr => arr.length > 1 ? arr : arr[0];

/* istanbul ignore next */
/**
 * Parse dataset with nested object strings to a true object
 * @private
 * @param {dataset} dataset
 * @returns {object} valid JSON
 * @example
 * const data = parseObject(document.querySelector('.foo').dataset)
 */
const parseObject = dataset => {
  const obj = {};
  Object.keys(dataset).forEach(key => {
    let value = dataset[key];
    try {
      value = isNaN(value) ? JSON.parse(value) : Number(value);
    } catch (err) {
      // Ignore error
    }
    obj[key] = value;
  });
  return obj;
};

/* istanbul ignore next */
/**
 * Prevents default event
 * @private
 * @param {Event} e
 * @example
 * el.addEventListener('mousemove', preventDefault)
 * el.addEventListener('dragstart', e => {
 *   preventDefault(e)
 *   // ...
 * })
 */
const preventDefault = e => e.preventDefault();

exports.findAll = findAll;
exports.findFirst = findFirst;
exports.toggleClass = toggleClass;
exports.animate = animate;
exports.modLoop = modLoop;
exports.eitherOr = eitherOr;
exports.arrayOrValue = arrayOrValue;
exports.parseObject = parseObject;
exports.preventDefault = preventDefault;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],56:[function(require,module,exports){
'use strict';

exports.__esModule = true;

require(52);

require(51);

require(50);

var _glider = require(54);

var _glider2 = _interopRequireDefault(_glider);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * Main export file of Paraglider
 *
 * @file index.js
 * @module Paraglider
 * @author Gregor Adams <greg@pixelass.com>
 */
exports.default = _glider2.default; // eslint-disable-line import/no-unassigned-import

},{"50":50,"51":51,"52":52,"54":54}]},{},[56]);
(56); });