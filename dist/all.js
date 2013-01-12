
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

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

_module_('App.Model', function(App, Model) {
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
  return this.Entity = (function(_super) {

    __extends(Entity, _super);

    Entity.prototype.defaults = function() {
      return {
        x: 0,
        y: 0
      };
    };

    function Entity() {
      this.destroy = __bind(this.destroy, this);

      this.enterframe = __bind(this.enterframe, this);
      Entity.__super__.constructor.apply(this, arguments);
      this.cnt = 0;
      this.floor = App.Model.currentFloor();
      this.objectList = this.floor.objectList;
      this.floor.on('enterframe', this.enterframe);
    }

    Entity.prototype.enterframe = function() {
      return this.cnt++;
    };

    Entity.prototype.destroy = function() {
      this.floor.off('enterframe', this.enterframe);
      this.floor.off(null, null, this);
      this.off();
      delete this.floor;
      delete this.objectList;
      delete this.x_speed;
      delete this.y_speed;
      return delete this.cnt;
    };

    Entity.prototype.registerEvent = function(f) {
      return this.floor.once('enterframe', function() {
        return f();
      });
    };

    return Entity;

  })(this.Base);
});


window.MouseEvent = {};

window.onmousemove = function(e) {
  return window.MouseEvent = e;
};

_module_("App", function(App) {
  App.game = null;
  App.instance = null;
  return App.VIEW_SCALE = 16;
});

_module_("App.View", function(App, View) {
  return this.CELL_SIZE = 16;
});

window.onload = function() {
  enchant();
  return new App.Core(320, 240);
};

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

_module_("App", function(App) {
  this.instance = null;
  this.input = null;
  this.game = null;
  return this.Core = (function(_super) {

    __extends(Core, _super);

    function Core() {
      Core.__super__.constructor.apply(this, arguments);
      App.instance = this;
      App.input = this.input;
      App.game = new App.Model.Game;
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

_module_('App.Model', function() {
  return this.Bullet = (function(_super) {

    __extends(Bullet, _super);

    Bullet.prototype.defaults = function() {
      return _.extend(Bullet.__super__.defaults.apply(this, arguments), {
        rad: 0,
        move_speed: 0.5,
        size: 0.3
      });
    };

    function Bullet(_arg) {
      var rad;
      rad = _arg.rad;
      this.enterframe = __bind(this.enterframe, this);

      Bullet.__super__.constructor.apply(this, arguments);
      this.x_speed = Math.cos(rad) * this.move_speed;
      this.y_speed = Math.sin(rad) * this.move_speed;
      this.floor.on('enterframe', this.enterframe);
    }

    Bullet.prototype.destroy = function() {
      Bullet.__super__.destroy.apply(this, arguments);
      delete this.x_speed;
      return delete this.y_speed;
    };

    Bullet.prototype.enterframe = function() {
      if (this.isExpired()) {
        this.objectList.remove(this);
        this.destroy();
        return;
      }
      this.searchEnemy();
      this.x = this.x + this.x_speed;
      return this.y = this.y + this.y_speed;
    };

    Bullet.prototype.within = function(other) {
      return Math.abs(this.x - other.x) < 1 && Math.abs(this.y - other.y) < 1;
    };

    Bullet.prototype.isExpired = function() {
      return this.cnt > App.instance.fps * 0.5;
    };

    Bullet.prototype.searchEnemy = function() {
      var t,
        _this = this;
      t = this.objectList.find(function(model) {
        return (model instanceof App.Model.Monster) && _this.within(model);
      });
      if (t != null) {
        if (t != null) {
          t.trigger('hit', this);
        }
        return this.objectList.remove(this);
      }
    };

    return Bullet;

  })(this.Entity);
});

var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

_module_('App.Model', function() {
  this.Floor = (function(_super) {

    __extends(Floor, _super);

    function Floor() {
      this.spawn = __bind(this.spawn, this);

      this.enterframe = __bind(this.enterframe, this);
      Floor.__super__.constructor.apply(this, arguments);
      this.player = null;
      this.objectList = new App.Model.ObjectList([]);
      this.on('enterframe', this.enterframe);
    }

    Floor.prototype.enterframe = function() {
      return this.spawn();
    };

    Floor.prototype.spawn = function() {
      var models, x, y,
        _this = this;
      models = this.objectList.select(function(model) {
        return model instanceof App.Model.Monster;
      });
      if (models.length < 10) {
        x = Math.random() * 10;
        y = Math.random() * 10;
        return this.objectList.push(new App.Model.Monster({
          x: x,
          y: y
        }));
      }
    };

    Floor.prototype.join = function(player) {
      this.player = player;
      return this.objectList.add(this.player);
    };

    Floor.prototype.leave = function(player) {
      this.objectList.remove(player);
      return this.player = null;
    };

    return Floor;

  })(Backbone.Model);
  this.currentFloor = function() {
    return App.game.floors[App.game.depth];
  };
  this.Game = (function(_super) {

    __extends(Game, _super);

    function Game() {
      Game.__super__.constructor.apply(this, arguments);
      App.game = this;
      this.floors = [];
      this.floors.push(new App.Model.Floor);
      this.depth = 0;
      this.player = new App.Model.Player;
      this.currentFloor().join(this.player);
    }

    Game.prototype.currentFloor = function() {
      return this.floors[this.depth];
    };

    Game.currentFloor = function() {
      return App.game.floors[App.game.depth];
    };

    return Game;

  })(Backbone.Model);
  return this.ObjectList = (function(_super) {

    __extends(ObjectList, _super);

    ObjectList.prototype.model = App.Model.Entity;

    function ObjectList() {
      ObjectList.__super__.constructor.apply(this, arguments);
    }

    return ObjectList;

  })(Backbone.Collection);
});


_module_("App.Model", function(App) {
  this.Map = (function() {

    function Map() {
      Map.__super__.constructor.apply(this, arguments);
      this.layers = [];
      this.layers[0] = new App.Model.Layer;
      this.render();
    }

    Map.prototype.bottom = function() {
      return this.layers[0];
    };

    return Map;

  })();
  this.Tile = (function() {

    function Tile(x, y) {
      this.x = x;
      this.y = y;
      this.passable = true;
    }

    return Tile;

  })();
  return this.Layer = (function() {

    function Layer() {
      var i, tile, x, y;
      this.width = 30;
      this.height = 24;
      this.tiles = (function() {
        var _i, _ref, _results;
        _results = [];
        for (i = _i = 0, _ref = this.width * this.height; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
          x = i % this.width;
          y = ~~(i / this.width);
          tile = new App.Model.Tile(x, y);
          tile.passable = (x === 0 || x === (this.width - 1)) || (y === 0 || y === (this.height - 1)) ? false : true;
          _results.push(tile);
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

    Layer.prototype.isPassable = function(x, y) {
      var tile;
      tile = this.at(~~x, ~~y);
      return tile.passable;
    };

    Layer.prototype.getRandomPassble = function() {
      var x, y;
      x = this.width * Math.random();
      y = this.height * Math.random();
      if (this.isPassable(x, y)) {
        return [x, y];
      } else {
        return this.getRandomPassble();
      }
    };

    return Layer;

  })();
});

var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

_module_('App.Model', function(App, Model) {
  return this.Monster = (function(_super) {

    __extends(Monster, _super);

    Monster.prototype.defaults = function() {
      return _.extend(Monster.__super__.defaults.apply(this, arguments), {
        move_speed: 0.5,
        hp: 5
      });
    };

    function Monster() {
      this.hit = __bind(this.hit, this);
      Monster.__super__.constructor.apply(this, arguments);
      this.objectList = this.floor.objectList;
      this.on('hit', this.hit);
    }

    Monster.prototype.hit = function(other) {
      this.set({
        hp: this.hp - 1
      });
      if (this.hp <= 0) {
        return this.objectList.remove(this);
      }
    };

    return Monster;

  })(this.Entity);
});

var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

_module_('App.Model', function(App, Model) {
  var abs, atan2, cos, sin;
  abs = Math.abs, sin = Math.sin, cos = Math.cos, atan2 = Math.atan2;
  return this.Player = (function(_super) {

    __extends(Player, _super);

    Player.prototype.defaults = function() {
      return _.extend(Player.__super__.defaults.apply(this, arguments), {
        move_speed: 0.2
      });
    };

    function Player() {
      this.click_left = __bind(this.click_left, this);

      this.enterframe = __bind(this.enterframe, this);

      this.initialize = __bind(this.initialize, this);
      Player.__super__.constructor.apply(this, arguments);
      this.x = 3;
      this.y = 3;
    }

    Player.prototype.initialize = function() {
      this.floor = App.Model.currentFloor();
      this.floor.on('enterframe', this.enterframe);
      return this.on('click_left', this.click_left);
    };

    Player.prototype.enterframe = function() {
      if (App.input.up || App.input.w) {
        this.moveBy(0, -this.move_speed);
      } else if (App.input.down || App.input.s) {
        this.moveBy(0, +this.move_speed);
      }
      if (App.input.right || App.input.d) {
        return this.moveBy(+this.move_speed, 0);
      } else if (App.input.left || App.input.a) {
        return this.moveBy(-this.move_speed, 0);
      }
    };

    Player.prototype.click_left = function(_arg) {
      var x, y;
      x = _arg.x, y = _arg.y;
      return this.floor.objectList.add(new Model.Bullet({
        x: this.x,
        y: this.y,
        rad: atan2(y - this.y, x - this.x)
      }));
    };

    Player.prototype.moveBy = function(dx, dy) {
      var layer, nx, ny;
      layer = App.Scene.Field.map.layers[0];
      nx = this.x + dx;
      ny = this.y + dy;
      if (layer.isPassable(nx, ny)) {
        this.x = nx;
        return this.y = ny;
      }
    };

    return Player;

  })(this.Entity);
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

var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

_module_("App.Scene", function(App, Scene) {
  var ObjectBoard;
  ObjectBoard = (function(_super) {

    __extends(ObjectBoard, _super);

    function ObjectBoard(objectList) {
      this.objectList = objectList;
      this.remove = __bind(this.remove, this);

      this.add = __bind(this.add, this);

      ObjectBoard.__super__.constructor.apply(this, arguments);
      this.x += App.instance.width / 2;
      this.y += App.instance.height / 2;
      this.objectList.on('add', this.add);
      this.objectList.on('remove', this.remove);
    }

    ObjectBoard.prototype.add = function(model) {
      if (model instanceof App.Model.Bullet) {
        return this.addChild(new App.View.Bullet(model));
      } else if (model instanceof App.Model.Monster) {
        return this.addChild(new App.View.Monster(model));
      }
    };

    ObjectBoard.prototype.remove = function(model) {
      var target, _ref,
        _this = this;
      target = _.find(this.childNodes, function(node) {
        return node.model === model;
      });
      if (target != null) {
        target.remove();
        if ((_ref = target.model) != null) {
          _ref.off();
        }
        App.game.off(null, null, target);
        return target = null;
      }
    };

    ObjectBoard.prototype.registerCamera = function(view) {
      var fixCamera,
        _this = this;
      (fixCamera = function() {
        _this.x = App.instance.width / 2 - view.model.x * App.VIEW_SCALE;
        return _this.y = App.instance.height / 2 - view.model.y * App.VIEW_SCALE;
      })();
      return view.model.on('change:x change:y', fixCamera);
    };

    return ObjectBoard;

  })(enchant.Group);
  return this.Field = (function(_super) {

    __extends(Field, _super);

    function Field() {
      this.touchstart = __bind(this.touchstart, this);

      this.enterframe = __bind(this.enterframe, this);

      var _this = this;
      Field.__super__.constructor.apply(this, arguments);
      this.game = App.game;
      this.setupBoard();
      this.setupMap();
      this.setupPlayer();
      this.setupMouse();
      this.floor = App.Model.currentFloor();
      this.on('enterframe', this.enterframe);
      this.on('touchstart', this.touchstart);
      this.on('touchend', function(e) {});
      this.on('touchmove', function(e) {});
    }

    Field.prototype.enterframe = function() {
      return this.floor.trigger('enterframe');
    };

    Field.prototype.touchstart = function(e) {
      var x, y;
      x = this.player.x + this.mouse.x - App.instance.width / 2;
      y = this.player.y + this.mouse.y - App.instance.height / 2;
      return this.player.model.trigger('click_left', {
        x: x / App.VIEW_SCALE,
        y: y / App.VIEW_SCALE
      });
    };

    Field.prototype.setupMap = function() {
      var map;
      map = new App.View.Map();
      Scene.Field.map = map;
      return this.board.addChild(map);
    };

    Field.prototype.setupPlayer = function() {
      this.player = new App.View.Player;
      this.board.addChild(this.player);
      return this.board.registerCamera(this.player);
    };

    Field.prototype.setupBoard = function() {
      var floor;
      floor = App.Model.currentFloor();
      this.board = new ObjectBoard(floor.objectList);
      return this.addChild(this.board);
    };

    Field.prototype.setupMouse = function() {
      this.mouse = new App.View.Mouse(10);
      return this.addChild(this.mouse);
    };

    return Field;

  })(enchant.Scene);
});


_module_("App.View", function(App, View) {
  var m2v;
  m2v = function(x) {
    return 16 * x;
  };
  return this.bindPosition = function(view, model) {
    var _this = this;
    if (!((model.x != null) && (model.y != null))) {
      throw 'not enough interface';
    }
    view.x = m2v(model.x);
    view.y = m2v(model.y);
    return model.on('change:x change:y', function() {
      view.x = m2v(model.x);
      return view.y = m2v(model.y);
    });
  };
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
      View.bindPosition(this, this.model);
      this.draw();
    }

    Bullet.prototype.draw = function() {
      return this.addChild(new App.Object.Circle(0, 0, 10, 'black', 'stroke'));
    };

    return Bullet;

  })(enchant.Group);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

_module_("App.View", function(App, View) {
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
      var color;
      color = tile.passable ? '#eee' : '#888';
      return this.addChild(new App.Object.Square(tile.x * CELL_SIZE, tile.y * CELL_SIZE, CELL_SIZE, CELL_SIZE, color));
    };

    return Map;

  })(enchant.Group);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

_module_("App.View", function(App, View) {
  return this.Monster = (function(_super) {

    __extends(Monster, _super);

    function Monster(model) {
      this.model = model;
      Monster.__super__.constructor.apply(this, arguments);
      View.bindPosition(this, this.model);
      this.draw();
    }

    Monster.prototype.draw = function() {
      var label;
      this.addChild(new App.Object.Circle(0, 0, 8, "red"));
      label = new Label(this.model.cid);
      label.x = -8;
      return this.addChild(label);
    };

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

_module_("App.View", function(App) {
  return this.Player = (function(_super) {

    __extends(Player, _super);

    function Player() {
      Player.__super__.constructor.apply(this, arguments);
      this.model = App.game.player;
      App.View.bindPosition(this, this.model);
      this.draw();
    }

    Player.prototype.draw = function() {
      return this.addChild(new App.Object.Circle(0, 0, 8));
    };

    return Player;

  })(enchant.Group);
});
