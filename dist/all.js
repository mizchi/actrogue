
window.p = function() {
  return console.log.apply(console, arguments);
};

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

window.Mouse = {};

window.onmousemove = function(e) {
  return window.Mouse = e;
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
      this.keybind('W'.charCodeAt(0), 'w');
      this.keybind('A'.charCodeAt(0), 'a');
      this.keybind('S'.charCodeAt(0), 's');
      this.keybind('D'.charCodeAt(0), 'd');
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

    function Circle(x, y, size, color, style) {
      var surface;
      if (color == null) {
        color = 'black';
      }
      if (style == null) {
        style = 'fill';
      }
      Circle.__super__.constructor.apply(this, arguments);
      this.width = size;
      this.height = size;
      this.fixOffset();
      surface = new enchant.Surface(size, size);
      this.g = surface.context;
      this.g.fillStyle = color;
      this.g.strokeStyle = color;
      this.g.beginPath();
      this.g.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2, true);
      if (style === 'fill') {
        this.g.fill();
      }
      if (style === 'stroke') {
        this.g.stroke();
      }
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

var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

_module_("App.Scene", function(App) {
  return this.Field = (function(_super) {

    __extends(Field, _super);

    function Field() {
      this.enterframe = __bind(this.enterframe, this);

      var _this = this;
      Field.__super__.constructor.apply(this, arguments);
      this.board = new enchant.Group;
      this.addChild(this.board);
      this.board.x += App.instance.width / 2;
      this.board.y += App.instance.height / 2;
      this.player = new App.View.Player(0, 0);
      this.board.addChild(this.player);
      this.spawnMonster();
      this.on('enterframe', this.enterframe);
      this.mouse = new App.View.Mouse(10);
      this.addChild(this.mouse);
      this.on('touchstart', function(e) {
        _this.mouse.x = e.x;
        return _this.mouse.y = e.y;
      });
      this.on('touchend', function(e) {});
      this.on('touchmove', function(e) {
        _this.mouse.x = e.x;
        return _this.mouse.y = e.y;
      });
    }

    Field.prototype.spawnMonster = function() {
      var i, x, y, _i, _results;
      _results = [];
      for (i = _i = 0; _i < 10; i = ++_i) {
        x = Math.random() * App.instance.width;
        y = Math.random() * App.instance.height;
        _results.push(this.board.addChild(new App.View.Monster(~~x, ~~y)));
      }
      return _results;
    };

    Field.prototype.enterframe = function() {
      var a, d, down, left, right, s, up, w, _ref;
      this.move_speed = this.player.move_speed;
      _ref = App.input, up = _ref.up, down = _ref.down, right = _ref.right, left = _ref.left, w = _ref.w, a = _ref.a, s = _ref.s, d = _ref.d;
      if (up || w) {
        this.moveBy(0, -this.move_speed);
      }
      if (down || s) {
        this.moveBy(0, +this.move_speed);
      }
      if (right || d) {
        this.moveBy(+this.move_speed, 0);
      }
      if (left || a) {
        this.moveBy(-this.move_speed, 0);
      }
      this.mouse.x = Mouse.offsetX;
      return this.mouse.y = Mouse.offsetY;
    };

    Field.prototype.moveBy = function(dx, dy) {
      this.board.x -= dx;
      this.board.y -= dy;
      this.player.x += dx;
      return this.player.y += dy;
    };

    return Field;

  })(enchant.Scene);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

_module_("App.View", function(App) {
  return this.Mouse = (function(_super) {

    __extends(Mouse, _super);

    function Mouse() {
      Mouse.__super__.constructor.apply(this, arguments);
      this.addChild(new App.Object.Circle(0, 0, 3, 'black', 'stroke'));
      this.on('enterframe', this.enterframe);
    }

    Mouse.prototype.enterframe = function() {};

    return Mouse;

  })(enchant.Group);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

_module_("App.View", function(App) {
  return this.Mouse = (function(_super) {

    __extends(Mouse, _super);

    function Mouse(size) {
      Mouse.__super__.constructor.apply(this, arguments);
      this.addChild(new App.Object.Circle(0, 0, size, 'green', 'stroke'));
    }

    return Mouse;

  })(enchant.Group);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

_module_("App.View", function(App) {
  return this.Player = (function(_super) {

    __extends(Player, _super);

    function Player() {
      Player.__super__.constructor.apply(this, arguments);
      this.addChild(new App.Object.Circle(0, 0, 20));
      this.move_speed = 3;
    }

    return Player;

  })(enchant.Group);
});
