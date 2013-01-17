var checkRequired, debug, mixin_keywords, moduleKeywords, root,
  __slice = [].slice,
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

root = typeof window !== "undefined" && window !== null ? window : typeof global !== "undefined" && global !== null ? global : this;

debug = true;

root.extend = function(obj, mixin) {
  var method, name;
  for (name in mixin) {
    method = mixin[name];
    obj[name] = method;
  }
  return obj;
};

checkRequired = function(ctx, Inf) {
  var key, type, val, _ref, _results;
  _ref = Inf.required;
  _results = [];
  for (key in _ref) {
    type = _ref[key];
    val = ctx[key];
    if (type === Number && _.isNumber(val)) {
      _results.push(true);
    } else if (type === String && _.isString(val)) {
      _results.push(true);
    } else if (ctx[key] instanceof type || ctx[key] === null) {
      _results.push(true);
    } else {
      throw new Error("Invalid Type: " + key + ":[" + val + "] is not " + (type != null ? type.name : void 0));
    }
  }
  return _results;
};

mixin_keywords = ['initialize', 'required'];

root.mixin = function() {
  var I, Infs, ctx, method, name, _i, _j, _len, _len1, _ref, _ref1, _results;
  ctx = arguments[0], Infs = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
  for (_i = 0, _len = Infs.length; _i < _len; _i++) {
    I = Infs[_i];
    _ref = I.prototype;
    for (name in _ref) {
      method = _ref[name];
      if (__indexOf.call(mixin_keywords, name) < 0) {
        ctx[name] = method;
      }
    }
  }
  _results = [];
  for (_j = 0, _len1 = Infs.length; _j < _len1; _j++) {
    I = Infs[_j];
    if ((I.required != null) && debug) {
      checkRequired(ctx, I);
    }
    _results.push((_ref1 = I.prototype.initialize) != null ? _ref1.apply(ctx) : void 0);
  }
  return _results;
};

/*
class IPoint3d
  @required:
    x: Number
    y: Number

  initialize: ->
    @z = 0

  getZ: -> @z

class Point
  constructor: (@x, @y) ->
    mixin @, IPoint3d

p = new Point
console.log p.getZ
*/


root.include = function(klass, mixin) {
  return extend(klass.prototype, mixin);
};

moduleKeywords = ['extended', 'included'];

root.Module = (function() {

  function Module() {}

  Module.extend = function(obj) {
    var key, value, _ref;
    for (key in obj) {
      value = obj[key];
      if (__indexOf.call(moduleKeywords, key) < 0) {
        this[key] = value;
      }
    }
    if ((_ref = obj.extended) != null) {
      _ref.apply(this);
    }
    return this;
  };

  Module.include = function(obj) {
    var key, value, _ref;
    for (key in obj) {
      value = obj[key];
      if (__indexOf.call(moduleKeywords, key) < 0) {
        this.prototype[key] = value;
      }
    }
    if ((_ref = obj.included) != null) {
      _ref.apply(this);
    }
    return this;
  };

  return Module;

})();
