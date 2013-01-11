var root,
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

root = typeof window !== "undefined" && window !== null ? window : typeof global !== "undefined" && global !== null ? global : this;

root.extend = function(obj, mixin) {
  var method, name;
  for (name in mixin) {
    method = mixin[name];
    obj[name] = method;
  }
  return obj;
};

root.include = function(klass, mixin) {
  return extend(klass.prototype, mixin);
};

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

var root,
  _this = this;

root = typeof window !== "undefined" && window !== null ? window : typeof global !== "undefined" && global !== null ? global : this;

root._module_ = function(ns, f) {
  var context, hist, name, _i, _len, _ref;
  context = root;
  hist = [];
  _ref = ns.split('.');
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    name = _ref[_i];
    if (context[name] == null) {
      context[name] = {};
    }
    context = context[name];
    hist.push(context);
  }
  return f.apply(context, hist);
};


require(['underscore', 'enchantjs'], function() {});

window.onload = function() {
  var game;
  enchant();
  return game = new App.Core(320, 240);
};

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

_module_("App", function(App) {
  this.instance = null;
  this.input = null;
  return this.Core = (function(_super) {

    __extends(Core, _super);

    function Core() {
      Core.__super__.constructor.apply(this, arguments);
      App.instance = this;
      App.input = this.input;
      this.fps = 30;
      this.onload = function() {
        var field;
        field = new App.Scene.Field;
        return this.pushScene(field);
      };
      this.start();
    }

    return Core;

  })(enchant.Core);
});

var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

_module_("App.View", function(App) {
  return this.Monster = (function(_super) {

    __extends(Monster, _super);

    function Monster(x, y) {
      this.enterframe = __bind(this.enterframe, this);
      Monster.__super__.constructor.apply(this, arguments);
      this.x = x;
      this.y = y;
      this.addChild(new App.Object.Circle(0, 0, 20, "red"));
      this.on('enterframe', this.enterframe);
    }

    Monster.prototype.enterframe = function() {};

    return Monster;

  })(enchant.Group);
});




var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

_module_("App.Object", function(App) {
  var Base;
  Base = (function(_super) {

    __extends(Base, _super);

    function Base() {
      Base.__super__.constructor.apply(this, arguments);
    }

    Base.prototype.fixOffset = function() {
      this.x -= this.width / 2;
      return this.y -= this.height / 2;
    };

    return Base;

  })(enchant.Sprite);
  this.Circle = (function(_super) {

    __extends(Circle, _super);

    function Circle(x, y, size, color) {
      var surface;
      if (color == null) {
        color = 'black';
      }
      Circle.__super__.constructor.apply(this, arguments);
      this.width = size;
      this.height = size;
      this.fixOffset();
      surface = new enchant.Surface(size, size);
      this.g = surface.context;
      this.g.fillStyle = color;
      this.g.beginPath();
      this.g.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2, true);
      this.g.fill();
      this.image = surface;
    }

    return Circle;

  })(Base);
  return this.Square = (function(_super) {

    __extends(Square, _super);

    function Square(x, y, width, height, color) {
      var g, surface;
      if (color == null) {
        color = 'black';
      }
      Square.__super__.constructor.apply(this, arguments);
      this.width = width;
      this.height = height;
      this.fixOffset();
      surface = new enchant.Surface(this.width, this.height);
      g = surface.context;
      this.image = surface;
      g.fillStyle = color;
      g.fillRect(0, 0, this.width, this.height);
    }

    return Square;

  })(Base);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

_module_("App.Scene", function(App) {
  return this.Field = (function(_super) {

    __extends(Field, _super);

    function Field() {
      var i, x, y, _i;
      Field.__super__.constructor.apply(this, arguments);
      this.addChild(new App.View.Player(0, 0));
      this.monsters = [];
      for (i = _i = 0; _i < 9; i = ++_i) {
        x = Math.random() * App.instance.width;
        y = Math.random() * App.instance.height;
        this.addChild(new App.View.Monster(~~x, ~~y));
      }
    }

    return Field;

  })(enchant.Scene);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

_module_("App.Scene", function(App) {
  return this.Field = (function(_super) {

    __extends(Field, _super);

    function Field() {
      var i, x, y, _i;
      Field.__super__.constructor.apply(this, arguments);
      this.addChild(new App.View.Player(0, 0));
      this.monsters = [];
      for (i = _i = 0; _i < 9; i = ++_i) {
        x = Math.random() * App.instance.width;
        y = Math.random() * App.instance.height;
        this.addChild(new App.View.Monster(~~x, ~~y));
      }
    }

    return Field;

  })(enchant.Scene);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

_module_("App.View", function(App) {
  return this.Player = (function(_super) {

    __extends(Player, _super);

    function Player() {
      var _this = this;
      Player.__super__.constructor.apply(this, arguments);
      this.addChild(new App.Object.Circle(0, 0, 20));
      this.move_speed = 3;
      this.on('enterframe', function() {
        if (App.input.up) {
          _this.moveBy(0, -_this.move_speed);
        }
        if (App.input.down) {
          _this.moveBy(0, +_this.move_speed);
        }
        if (App.input.right) {
          _this.moveBy(+_this.move_speed, 0);
        }
        if (App.input.left) {
          return _this.moveBy(-_this.move_speed, 0);
        }
      });
    }

    Player.prototype.moveBy = function(dx, dy) {
      this.x = this.x + dx;
      return this.y = this.y + dy;
    };

    return Player;

  })(enchant.Group);
});
