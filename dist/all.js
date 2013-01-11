
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


window.onload = function() {
  var game;
  enchant();
  return game = new App.Core(320, 240);
};

window.MouseEvent = {};

window.onmousemove = function(e) {
  return window.MouseEvent = e;
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

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

_module_('App.Model', function(App, Model) {
  var ObjectCollection, abs, atan2, cos, sin;
  abs = Math.abs, sin = Math.sin, cos = Math.cos, atan2 = Math.atan2;
  this.Base = (function(_super) {

    __extends(Base, _super);

    function Base() {
      var _this = this;
      Base.__super__.constructor.apply(this, arguments);
      _.each(this.attributes, function(value, key) {
        return Object.defineProperty(_this, key, {
          get: function() {
            return _this.get(key);
          },
          set: function(val) {
            return _this.set(key, val);
          }
        });
      });
    }

    return Base;

  })(Backbone.Model);
  this.Entity = (function(_super) {

    __extends(Entity, _super);

    Entity.prototype.defaults = function() {
      return {
        x: 0,
        y: 0
      };
    };

    function Entity() {
      var _this = this;
      Entity.__super__.constructor.apply(this, arguments);
      this.cnt = 0;
      App.game.on('enterframe', function() {
        return _this.cnt++;
      });
    }

    return Entity;

  })(this.Base);
  this.Bullet = (function(_super) {

    __extends(Bullet, _super);

    Bullet.prototype.defaults = function() {
      return _.extend(Bullet.__super__.defaults.apply(this, arguments), {
        rad: 0,
        move_speed: 10
      });
    };

    function Bullet(_arg) {
      var rad;
      rad = _arg.rad;
      Bullet.__super__.constructor.apply(this, arguments);
      this.x_speed = ~~(cos(rad) * this.move_speed);
      this.y_speed = ~~(sin(rad) * this.move_speed);
    }

    Bullet.prototype.initialize = function() {
      var _this = this;
      return App.game.on('enterframe', function() {
        _this.x = _this.x + _this.x_speed;
        return _this.y = _this.y + _this.y_speed;
      });
    };

    return Bullet;

  })(this.Entity);
  this.Player = (function(_super) {

    __extends(Player, _super);

    function Player() {
      this.initialize = __bind(this.initialize, this);
      return Player.__super__.constructor.apply(this, arguments);
    }

    Player.prototype.defaults = function() {
      return _.extend(Player.__super__.defaults.apply(this, arguments), {
        move_speed: 10
      });
    };

    Player.prototype.initialize = function() {
      var _this = this;
      App.game.on('enterframe', function() {
        var a, d, down, left, right, s, up, w, _ref;
        _ref = App.input, up = _ref.up, down = _ref.down, right = _ref.right, left = _ref.left, w = _ref.w, a = _ref.a, s = _ref.s, d = _ref.d;
        if (up || w) {
          _this.moveBy(0, -_this.move_speed);
        }
        if (down || s) {
          _this.moveBy(0, +_this.move_speed);
        }
        if (right || d) {
          _this.moveBy(+_this.move_speed, 0);
        }
        if (left || a) {
          return _this.moveBy(-_this.move_speed, 0);
        }
      });
      return this.on('click_left', function(_arg) {
        var bullet, bullet_model, x, y;
        x = _arg.x, y = _arg.y;
        bullet_model = new Model.Bullet({
          x: _this.x,
          y: _this.y,
          rad: atan2(y - _this.y, x - _this.x)
        });
        bullet = new App.View.Bullet(bullet_model);
        return App.Scene.Field.board.addChild(bullet);
      });
    };

    Player.prototype.moveBy = function(dx, dy) {
      this.x += dx;
      return this.y += dy;
    };

    return Player;

  })(this.Entity);
  ObjectCollection = (function(_super) {

    __extends(ObjectCollection, _super);

    function ObjectCollection() {
      return ObjectCollection.__super__.constructor.apply(this, arguments);
    }

    ObjectCollection.prototype.model = Model.Entity;

    return ObjectCollection;

  })(Backbone.Collection);
  return this.Game = (function(_super) {

    __extends(Game, _super);

    function Game() {
      Game.__super__.constructor.apply(this, arguments);
      App.game = this;
      Game.input = App.instance.input;
      this.player = new Model.Player;
      this.objects = new ObjectCollection([]);
    }

    return Game;

  })(Backbone.Model);
});


_module_("App.Model", function(App) {
  this.Tile = (function() {

    function Tile(x, y) {
      this.x = x;
      this.y = y;
    }

    return Tile;

  })();
  return this.Layer = (function() {

    function Layer() {
      var i, x, y;
      this.width = 4;
      this.height = 3;
      this.tiles = (function() {
        var _i, _ref, _results;
        _results = [];
        for (i = _i = 0, _ref = this.width * this.height; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
          x = i % this.width;
          y = ~~(i / this.width);
          _results.push(new App.Model.Tile(x, y));
        }
        return _results;
      }).call(this);
    }

    Layer.prototype.at = function(x, y) {
      if (x > this.row) {
        return null;
      }
      return this.tiles[x + y * this.width];
    };

    return Layer;

  })();
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
      this.x = x;
      this.y = y;
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

_module_("App.Scene", function(App, Scene) {
  return this.Field = (function(_super) {

    __extends(Field, _super);

    Field.board = null;

    function Field() {
      var _this = this;
      Field.__super__.constructor.apply(this, arguments);
      this.game = new App.Model.Game;
      this.setupBoard();
      this.setupMap();
      this.setupPlayer();
      this.spawnMonster();
      this.setupMouse();
      this.on('enterframe', function() {
        return _this.game.trigger('enterframe');
      });
      this.on('touchstart', function(e) {
        var x, y;
        x = _this.player.x + _this.mouse.x - App.instance.width / 2;
        y = _this.player.y + _this.mouse.y - App.instance.height / 2;
        return _this.player.model.trigger('click_left', {
          x: x,
          y: y
        });
      });
      this.on('touchend', function(e) {});
      this.on('touchmove', function(e) {
        _this.mouse.x = e.x;
        return _this.mouse.y = e.y;
      });
    }

    Field.prototype.setupMap = function() {
      var map_renderer;
      map_renderer = new App.View.Map();
      return this.board.addChild(map_renderer);
    };

    Field.prototype.setupPlayer = function() {
      var _this = this;
      this.player = new App.View.Player(0, 0);
      this.board.addChild(this.player);
      return this.player.model.on('change:x change:y', function(model) {
        _this.board.x = App.instance.width / 2 - model.x;
        return _this.board.y = App.instance.height / 2 - model.y;
      });
    };

    Field.prototype.setupBoard = function() {
      this.board = new enchant.Group;
      this.addChild(this.board);
      this.board.x += App.instance.width / 2;
      this.board.y += App.instance.height / 2;
      return Scene.Field.board = this.board;
    };

    Field.prototype.setupMouse = function() {
      this.mouse = new App.View.Mouse(10);
      return this.addChild(this.mouse);
    };

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

    Field.prototype.moveBy = function(dx, dy) {
      this.board.x -= dx;
      return this.board.y -= dy;
    };

    return Field;

  })(enchant.Scene);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

_module_("App.View", function(App, View) {
  return this.BindGroup = (function(_super) {

    __extends(BindGroup, _super);

    function BindGroup(model) {
      var _this = this;
      BindGroup.__super__.constructor.apply(this, arguments);
      this.x = model.x;
      this.y = model.y;
      model.on('change:x change:y', function() {
        _this.x = model.x;
        return _this.y = model.y;
      });
    }

    return BindGroup;

  })(enchant.Group);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

_module_("App.View", function(App, View) {
  var Field;
  Field = App.Scene.Field;
  return this.Bullet = (function(_super) {

    __extends(Bullet, _super);

    function Bullet(model) {
      this.model = model;
      Bullet.__super__.constructor.apply(this, arguments);
      this.draw();
    }

    Bullet.prototype.draw = function() {
      return this.addChild(new App.Object.Circle(0, 0, 10, 'black', 'stroke'));
    };

    return Bullet;

  })(View.BindGroup);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

_module_("App.View", function(App, View) {
  this.CELL_SIZE = 24;
  return this.Map = (function(_super) {
    var CELL_SIZE, Field;

    __extends(Map, _super);

    Field = App.Scene.Field;

    CELL_SIZE = View.CELL_SIZE;

    function Map() {
      Map.__super__.constructor.apply(this, arguments);
      this.layers = [];
      this.layers[0] = new App.Model.Layer;
      this.render();
      App.Game;
    }

    Map.prototype.render = function() {
      var layer, tile, x, y, _i, _len, _ref, _results;
      _ref = this.layers;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        layer = _ref[_i];
        _results.push((function() {
          var _j, _ref1, _results1;
          _results1 = [];
          for (x = _j = 0, _ref1 = layer.width; 0 <= _ref1 ? _j < _ref1 : _j > _ref1; x = 0 <= _ref1 ? ++_j : --_j) {
            _results1.push((function() {
              var _k, _ref2, _results2;
              _results2 = [];
              for (y = _k = 0, _ref2 = layer.height; 0 <= _ref2 ? _k < _ref2 : _k > _ref2; y = 0 <= _ref2 ? ++_k : --_k) {
                tile = layer.at(x, y);
                _results2.push(this.drawTile(tile));
              }
              return _results2;
            }).call(this));
          }
          return _results1;
        }).call(this));
      }
      return _results;
    };

    Map.prototype.drawTile = function(tile) {
      return Field.board.addChild(new App.Object.Square(tile.x * CELL_SIZE, tile.y * CELL_SIZE, CELL_SIZE, CELL_SIZE, '#ccc'));
    };

    return Map;

  })(enchant.Group);
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

_module_("App.View", function(App) {
  return this.Mouse = (function(_super) {

    __extends(Mouse, _super);

    function Mouse(size) {
      var _this = this;
      Mouse.__super__.constructor.apply(this, arguments);
      this.addChild(new App.Object.Circle(0, 0, size, 'green', 'stroke'));
      this.x = App.instance.width / 2;
      this.y = App.instance.height / 2;
      this.on('enterframe', function() {
        _this.x = MouseEvent.offsetX;
        return _this.y = MouseEvent.offsetY;
      });
    }

    return Mouse;

  })(enchant.Group);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

_module_("App.View", function(App, View) {
  var Field;
  Field = App.Scene.Field;
  return this.Player = (function(_super) {

    __extends(Player, _super);

    function Player() {
      this.model = App.game.player;
      Player.__super__.constructor.call(this, App.game.player);
      this.draw();
    }

    Player.prototype.draw = function() {
      return this.addChild(new App.Object.Circle(0, 0, 20));
    };

    return Player;

  })(View.BindGroup);
});
