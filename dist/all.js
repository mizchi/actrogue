
window.p = function() {
  return console.log.apply(console, arguments);
};

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


window.MouseEvent = {};

window.onmousemove = function(e) {
  return window.MouseEvent = e;
};

window.App = {
  Scene: {},
  Entity: {},
  Skill: {},
  UI: {}
};

window.app = {};

App.Entity.GroupId = {
  Player: 101,
  Enemy: 1001
};

window.onload = function() {
  enchant();
  return new App.Core(320, 240);
};


App.Skill.Base = (function() {

  function Base(actor, lv) {
    this.actor = actor;
    this.lv = lv != null ? lv : 1;
  }

  Base.prototype.fire = function(x, y) {};

  Base.prototype.center = function() {
    return [this.actor.x + this.actor.width / 2, this.actor.y + this.actor.height / 2];
  };

  return Base;

})();

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Entity.UditorSprite = (function(_super) {

  __extends(UditorSprite, _super);

  function UditorSprite(chartip_name) {
    var image;
    image = app.assets[chartip_name];
    this.width = image.width;
    this.height = image.height;
    this.row = 6;
    UditorSprite.__super__.constructor.call(this, image.width / 6, image.height / 4);
    this.image = image;
  }

  return UditorSprite;

})(enchant.Sprite);

var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Entity.ISearcher = (function() {

  function ISearcher() {}

  ISearcher.required = {
    group_id: Number,
    sight_range: Number
  };

  ISearcher.prototype.find = function(group_id, range) {
    var _this = this;
    if (this.parentNode == null) {
      return false;
    }
    return _.find(this.parentNode.childNodes, function(node) {
      var p1, p2;
      if ((node != null ? node.group_id : void 0) != null) {
        p1 = _this.center();
        p2 = node.center();
        if (node.group_id === group_id) {
          return node.group_id && Math.abs(p1.x - p2.x) < range && Math.abs(p1.y - p2.y) < range;
        }
      } else {
        return false;
      }
    });
  };

  ISearcher.prototype.findInSight = function(group_id) {
    return this.find(group_id, this.sight_range);
  };

  return ISearcher;

})();

App.Entity.IDrawer = (function() {

  function IDrawer() {}

  IDrawer.prototype.draw = function() {};

  IDrawer.prototype.drawByFrame = function() {};

  return IDrawer;

})();

App.Entity.ITracer = (function() {

  function ITracer() {}

  ITracer.required = {
    move_speed: Number,
    x: Number,
    y: Number,
    direction: Number,
    onMove: Function
  };

  ITracer.prototype.initialize = function() {
    this.destination = null;
    this.x_speed = 0;
    return this.y_speed = 0;
  };

  ITracer.prototype.goAhead = function() {
    this.onMove(this.x_speed, this.y_speed);
    return this.go(this.x_speed, this.y_speed, this.destination.x, this.destination.y);
  };

  ITracer.prototype.update_direction = function(dx, dy) {
    return this.direction = Math.atan2(dy, dx);
  };

  ITracer.prototype.setDestination = function(x, y) {
    this.destination = {
      x: x,
      y: y
    };
    this.direction = Math.atan2(this.destination.y - this.y, this.destination.x - this.x);
    this.x_speed = Math.cos(this.direction) * this.move_speed;
    return this.y_speed = Math.sin(this.direction) * this.move_speed;
  };

  ITracer.prototype.removeDestination = function() {
    this.destination = null;
    this.x_speed = 0;
    return this.y_speed = 0;
  };

  ITracer.prototype.hasDestination = function() {
    return this.destination != null;
  };

  ITracer.prototype.go = function(dx, dy, max_x, max_y) {
    var inhibitor, nx, ny, _ref, _ref1,
      _this = this;
    nx = this._until(this.x, this.x + dx, max_x);
    ny = this._until(this.y, this.y + dy, max_y);
    if (nx === this.x && ny === this.y) {
      return false;
    }
    if (!this.passable) {
      inhibitor = _.find((_ref = this.parentNode) != null ? _ref.childNodes : void 0, function(i) {
        if (i === _this) {
          return false;
        }
        if (i.passable === false) {
          if (Math.abs(nx - i.x) < 8) {
            if (Math.abs(ny - i.y) < 8) {
              return true;
            }
          }
        }
        return false;
      });
      if (inhibitor != null) {
        return false;
      }
    }
    if ((_ref1 = this.parentNode) != null ? _ref1.map.isWall(nx, ny) : void 0) {
      return false;
    } else {
      this.x = nx;
      this.y = ny;
    }
    return true;
  };

  ITracer.prototype._until = function(value, next, dest) {
    var r;
    if (!(dest != null) || (next === dest)) {
      return next;
    }
    r = (value < next ? 1 : -1);
    return r * (r * next < r * dest ? r * next : r * dest);
  };

  return ITracer;

})();

App.Entity.Mover = (function(_super) {

  __extends(Mover, _super);

  function Mover() {
    this.enterframe = __bind(this.enterframe, this);
    Mover.__super__.constructor.apply(this, arguments);
    this.group_id = 0;
    this.direction = 0;
    this.move_speed = 1;
    this.sight_range = 50;
    this.on('enterframe', this.enterframe);
    this.draw();
    mixin(this, App.Entity.ITracer, App.Entity.ISearcher, App.Entity.IDrawer);
  }

  Mover.prototype.onMove = function() {};

  Mover.prototype.enterframe = function() {
    return this.drawByFrame();
  };

  Mover.prototype.center = function() {
    var _ref, _ref1;
    return {
      x: this.x + ((_ref = this.width) != null ? _ref : 16) / 2,
      y: this.y + ((_ref1 = this.height) != null ? _ref1 : 16) / 2
    };
  };

  return Mover;

})(enchant.Group);

var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Entity.Monster = (function(_super) {

  __extends(Monster, _super);

  Monster.prototype.passable = false;

  function Monster() {
    this.hit = __bind(this.hit, this);
    Monster.__super__.constructor.apply(this, arguments);
    this.destination = null;
    mixin(this, App.Entity.IStatus);
    this.on('hit', this.hit);
  }

  Monster.prototype.onDead = function() {};

  Monster.prototype.hit = function(_arg) {
    var other, _ref,
      _this = this;
    other = _arg.other;
    this.damage(2);
    if (this.isDead()) {
      _.each((_ref = this.parentNode) != null ? _ref.childNodes : void 0, function(i) {
        if (i.group_id === other.group_id) {
          return typeof i.gainExp === "function" ? i.gainExp(1) : void 0;
        }
      });
      return this.remove();
    }
  };

  return Monster;

})(App.Entity.Mover);

App.AI = {};

App.AI.IBasic = (function() {

  function IBasic() {
    this.guess = __bind(this.guess, this);

  }

  IBasic.required = {
    move_speed: Number,
    sight_range: Number,
    group_id: Number,
    setDestination: Function
  };

  IBasic.prototype.initialize = function() {
    return this.mode = 'idle';
  };

  IBasic.prototype.guess = function() {
    var attack_interval, attack_power, attack_range, enemy_in_range, target, _ref;
    switch (this.mode) {
      case "idle":
        target = this.findInSight(App.Entity.GroupId.Player);
        if (target) {
          this.mode = "trace";
          return this.setDestination(target.x, target.y);
        } else {
          if (Math.random() < 1 / app.fps) {
            this.mode = "wander";
            return this.setRandomDestination();
          }
        }
        break;
      case "trace":
        attack_range = 10;
        attack_interval = app.fps;
        attack_power = 1;
        if ((_ref = this.cnt) == null) {
          this.cnt = 0;
        }
        enemy_in_range = this.find(App.Entity.GroupId.Player, attack_range);
        if (enemy_in_range instanceof App.Entity.Player) {
          if (!(this.cnt++ % attack_interval)) {
            enemy_in_range.damage(attack_power);
          }
          return;
        }
        if (!this.goAhead()) {
          target = this.findInSight(App.Entity.GroupId.Player);
          if (target) {
            return this.setDestination(target.x, target.y);
          } else {
            this.removeDestination();
            return this.mode = "idle";
          }
        }
        break;
      case "wander":
        if (!this.goAhead()) {
          return this.mode = "idle";
        }
    }
  };

  IBasic.prototype.setRandomDestination = function() {
    return this.setDestination(this.x + (Math.random() - 0.5) * this.sight_range, this.y + (Math.random() - 0.5) * this.sight_range);
  };

  return IBasic;

})();

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Entity.Circle = (function(_super) {

  __extends(Circle, _super);

  function Circle(x, y, size, color, style) {
    this.size = size;
    this.color = color != null ? color : 'black';
    this.style = style != null ? style : 'fill';
    Circle.__super__.constructor.apply(this, arguments);
    this.width = this.size;
    this.height = this.size;
    this.draw();
  }

  Circle.prototype.draw = function() {
    var surface;
    surface = new enchant.Surface(this.size, this.size);
    this.g = surface.context;
    this.g.beginPath();
    this.g.fillStyle = this.color;
    this.g.strokeStyle = this.color;
    this.g.arc(this.size / 2, this.size / 2, this.size / 2, 0, Math.PI * 2, true);
    if (this.style === 'fill') {
      this.g.fill();
    }
    if (this.style === 'stroke') {
      this.g.stroke();
    }
    return this.image = surface;
  };

  return Circle;

})(enchant.Sprite);

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Core = (function(_super) {

  __extends(Core, _super);

  function Core() {
    var _this = this;
    Core.__super__.constructor.call(this, 640, 480);
    window.app = this;
    this.fps = 30;
    this.keybind('W'.charCodeAt(0), 'w');
    this.keybind('A'.charCodeAt(0), 'a');
    this.keybind('S'.charCodeAt(0), 's');
    this.keybind('D'.charCodeAt(0), 'd');
    this.keybind('E'.charCodeAt(0), 'e');
    this.keybind('Q'.charCodeAt(0), 'q');
    this.keybind('I'.charCodeAt(0), 'i');
    this.keybind('C'.charCodeAt(0), 'c');
    this.keybind('B'.charCodeAt(0), 'b');
    this.preload(["img/chara0.png", 'img/roguetile.gif', 'img/char/player.png', 'img/char/mochi1.png', 'img/map0.png', 'img/map1.png', 'img/Data/CharaChip/[Chara]Civilian_Male_A.png', 'img/Data/CharaChip/[Monster]Slime1_pochi.png']);
    this.onload = function() {
      _this.player = new App.Entity.Player;
      return _this.pushScene(new App.Scene.Field(_this.player));
    };
    this.start();
  }

  Core.prototype._key_free = {};

  Core.prototype.isKeyFree = function(key) {
    if (!this._key_free[key]) {
      this._key_free[key] = new Date().getTime();
      return true;
    } else {
      if (new Date().getTime() - this._key_free[key] > 1000 / 3) {
        this._key_free[key] = new Date().getTime();
        return true;
      } else {
        return false;
      }
    }
  };

  return Core;

})(enchant.Core);

var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Entity.Bullet = (function(_super) {

  __extends(Bullet, _super);

  Bullet.prototype.passable = true;

  function Bullet(_arg) {
    var dx, dy, group_id, move_speed, rad, range, x, y;
    x = _arg.x, y = _arg.y, rad = _arg.rad, move_speed = _arg.move_speed, group_id = _arg.group_id;
    this.enterframe = __bind(this.enterframe, this);

    Bullet.__super__.constructor.apply(this, arguments);
    this.x = x;
    this.y = y;
    this.move_speed = move_speed != null ? move_speed : 8;
    this.lifetime = 0.8;
    this.group_id = group_id != null ? group_id : 0;
    range = this.getRange();
    dx = this.x + Math.cos(rad) * range;
    dy = this.y + Math.sin(rad) * range;
    this.setDestination(dx, dy);
  }

  Bullet.prototype.getRange = function() {
    return this.move_speed * this.lifetime * app.fps;
  };

  Bullet.prototype.draw = function() {
    return this.addChild(new App.Entity.Circle(0, 0, 4, 'black', 'stroke'));
  };

  Bullet.prototype.isDead = function() {
    return this.age / app.fps > this.lifetime;
  };

  Bullet.prototype.enterframe = function() {
    var event, target;
    if (!this.goAhead()) {
      this.remove();
    }
    if (this.isDead()) {
      this.remove();
    }
    target = this.find(App.Entity.GroupId.Enemy, 8);
    if (target) {
      event = new enchant.Event("hit");
      event.other = this;
      target.dispatchEvent(event);
      return this.remove();
    }
  };

  return Bullet;

})(App.Entity.Mover);

var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Entity.DamageLabel = (function(_super) {

  __extends(DamageLabel, _super);

  function DamageLabel(text, x, y, color) {
    if (color == null) {
      color = 'red';
    }
    this.enterframe = __bind(this.enterframe, this);

    DamageLabel.__super__.constructor.apply(this, arguments);
    this.x = x;
    this.y = y;
    this.addDiffByOther();
    this.lifetime = 1;
    this.color = color;
    this.on('enterframe', this.enterframe);
  }

  DamageLabel.prototype.addDiffByOther = function() {
    var _ref,
      _this = this;
    return _.each((_ref = this.parentNode) != null ? _ref.childNodes : void 0, function(node) {
      if (node instanceof DamageLabel) {
        if (Math.abs(node.x - _this.x) < 8 && Math.abs(node.y - _this.y) < 8) {
          p('add diff');
          _this.x += 8;
          return _this.y += 8;
        }
      }
    });
  };

  DamageLabel.prototype.enterframe = function() {
    var progress;
    progress = this.age / (app.fps * this.lifetime);
    if (progress < 1) {
      this.y -= 0.5;
      return this.opacity = 1 - progress;
    } else {
      return this.remove();
    }
  };

  return DamageLabel;

})(enchant.Label);


App.Entity.ILeveler = (function() {

  function ILeveler() {}

  ILeveler.required = {
    lv: Number,
    exp: Number,
    next_level_exp: Function,
    onLevelUp: Function
  };

  ILeveler.prototype.gainExp = function(point) {
    p('gain exp', point);
    this.exp += point;
    if (this.next_level_exp() <= this.exp) {
      this.lv += 1;
      this.exp = 0;
      return this.onLevelUp();
    }
  };

  return ILeveler;

})();

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Entity.Map = (function(_super) {
  var PASSABLE, TILE_SIZE, WALL;

  __extends(Map, _super);

  WALL = 1;

  PASSABLE = 0;

  TILE_SIZE = 16;

  function Map(cell_x, cell_y) {
    this.cell_x = cell_x;
    this.cell_y = cell_y;
    Map.__super__.constructor.apply(this, arguments);
    this.cell_size = 48;
    this.tile_size = 16;
    this.maptip = app.assets['img/map1.png'];
    this.width = this.cell_size * this.cell_x;
    this.height = this.cell_size * this.cell_y;
    this.setMaze();
    this.draw();
  }

  Map.prototype.setMaze = function() {
    var map, x, y,
      _this = this;
    this.hitmap = (function() {
      var _i, _ref, _results;
      _results = [];
      for (x = _i = 0, _ref = this.cell_x; 0 <= _ref ? _i < _ref : _i > _ref; x = 0 <= _ref ? ++_i : --_i) {
        _results.push((function() {
          var _j, _ref1, _results1;
          _results1 = [];
          for (y = _j = 0, _ref1 = this.cell_y; 0 <= _ref1 ? _j < _ref1 : _j > _ref1; y = 0 <= _ref1 ? ++_j : --_j) {
            _results1.push(null);
          }
          return _results1;
        }).call(this));
      }
      return _results;
    }).call(this);
    this.layer = [];
    map = new ROT.Map.Uniform(this.cell_x, this.cell_y);
    return map.create(function(x, y, val) {
      return _this.hitmap[x][y] = val;
    });
  };

  Map.prototype.isWall = function(x, y) {
    return !!this.hitmap[~~(y / this.cell_size)][~~(x / this.cell_size)];
  };

  Map.prototype.passable = function(x, y) {
    return !this.isWall(x, y);
  };

  Map.prototype.getRandomPssable = function() {
    var x, y;
    x = ~~(Math.random() * this.cell_x);
    y = ~~(Math.random() * this.cell_y);
    if (this.hitmap[y][x] === PASSABLE) {
      return {
        x: (x + 0.5) * this.cell_size,
        y: (y + 0.5) * this.cell_size
      };
    } else {
      return this.getRandomPssable();
    }
  };

  Map.prototype.draw = function() {
    var g, row, surface, val, x, y, _i, _j, _len, _len1, _ref;
    surface = new enchant.Surface(this.width, this.height);
    g = surface.context;
    g.beginPath();
    _ref = this.hitmap;
    for (y = _i = 0, _len = _ref.length; _i < _len; y = ++_i) {
      row = _ref[y];
      for (x = _j = 0, _len1 = row.length; _j < _len1; x = ++_j) {
        val = row[x];
        if (PASSABLE === val) {
          this.drawTip(g, x, y, 1, 0);
        } else {
          this.drawTip(g, x, y, 1, 5);
        }
      }
    }
    return this.image = surface;
  };

  Map.prototype.createMiniMapSprite = function() {
    var g, inner_size, minimap, row, surface, val, x, y, _i, _j, _len, _len1, _ref;
    inner_size = 2;
    minimap = new Sprite(inner_size * this.cell_x, inner_size * this.cell_y);
    minimap.backgroundColor = 'white';
    surface = new enchant.Surface(this.width, this.height);
    g = surface.context;
    g.beginPath();
    _ref = this.hitmap;
    for (y = _i = 0, _len = _ref.length; _i < _len; y = ++_i) {
      row = _ref[y];
      for (x = _j = 0, _len1 = row.length; _j < _len1; x = ++_j) {
        val = row[x];
        if (WALL === val) {
          g.color = 'black';
          g.fillRect(x * inner_size, y * inner_size, inner_size, inner_size);
        }
      }
    }
    minimap.image = surface;
    return minimap;
  };

  Map.prototype.drawTip = function(g, x, y, tile_x, tile_y) {
    return g.drawImage(this.maptip._element, tile_x * TILE_SIZE, tile_y * TILE_SIZE, TILE_SIZE, TILE_SIZE, x * this.cell_size, y * this.cell_size, this.cell_size, this.cell_size);
  };

  return Map;

})(enchant.Sprite);

var SlimeSprite,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Entity.Slime = (function(_super) {

  __extends(Slime, _super);

  function Slime() {
    this.enterframe = __bind(this.enterframe, this);
    this.move_speed = 1;
    this.sight_range = 120;
    this.max_hp = 10;
    this.mode = 'idle';
    Slime.__super__.constructor.apply(this, arguments);
    this.group_id = App.Entity.GroupId.Enemy;
    mixin(this, App.AI.IBasic);
  }

  Slime.prototype.onDead = function() {};

  Slime.prototype.enterframe = function() {
    Slime.__super__.enterframe.apply(this, arguments);
    return this.guess();
  };

  Slime.prototype.draw = function() {
    this.sprite = new SlimeSprite;
    this.width = this.sprite.width;
    this.height = this.sprite.height;
    return this.addChild(this.sprite);
  };

  Slime.prototype.onMove = function(x, y) {
    return this.sprite.update(x, y);
  };

  return Slime;

})(App.Entity.Monster);

SlimeSprite = (function(_super) {

  __extends(SlimeSprite, _super);

  function SlimeSprite() {
    SlimeSprite.__super__.constructor.call(this, 'img/Data/CharaChip/[Monster]Slime1_pochi.png');
    this.state_count = 0;
  }

  SlimeSprite.prototype.update = function(x, y) {
    var index, prefix;
    prefix = this.row * (y > 0 ? 0 : x < 0 ? 1 : x > 0 ? 2 : y < 0 ? 3 : void 0);
    if (prefix !== this.last_prefix) {
      this.state_count = 0;
    } else {
      this.state_count++;
    }
    this.last_prefix = prefix;
    index = (function() {
      switch (~~(this.state_count / 5) % 4) {
        case 0:
          return 1;
        case 1:
          return 2;
        case 2:
          return 1;
        case 3:
          return 0;
      }
    }).call(this);
    return this.frame = prefix + index;
  };

  return SlimeSprite;

})(App.Entity.UditorSprite);

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Entity.Mouse = (function(_super) {

  __extends(Mouse, _super);

  function Mouse() {
    return Mouse.__super__.constructor.apply(this, arguments);
  }

  Mouse.prototype.draw = function() {
    return this.addChild(new App.Entity.Circle(0, 0, 8, 'green', 'stroke'));
  };

  Mouse.prototype.enterframe = function() {
    this.x = MouseEvent.offsetX;
    this.y = MouseEvent.offsetY;
    this.alt = MouseEvent.altKey;
    return this.shift = MouseEvent.shiftKey;
  };

  return Mouse;

})(App.Entity.Mover);

var PlayerSprite,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Entity.Player = (function(_super) {

  __extends(Player, _super);

  Player.prototype.passable = false;

  function Player() {
    this.enterframe = __bind(this.enterframe, this);
    Player.__super__.constructor.apply(this, arguments);
    this.group_id = App.Entity.GroupId.Player;
    this.move_speed = 6;
    this.sight_range = 1200;
    this.skills = [new App.Skill.MultiShot(this), new App.Skill.SingleShot(this)];
    mixin(this, App.Entity.ISkillSelector);
    this.on('fire', this.fire);
    this.max_hp = 10;
    this.exp = 0;
    this.lv = 1;
    mixin(this, App.Entity.IStatus, App.Entity.ILeveler);
    mixin(this, App.IStoraged);
    this.load('player');
  }

  Player.prototype.onLoad = function(obj) {
    if (obj === null) {
      p('player initialize');
      this.save('player', {
        lv: 1,
        exp: 0,
        status: {
          str: 5,
          int: 5,
          dex: 5
        },
        skills: [
          {
            skill_name: 'MultiShot',
            lv: 1
          }
        ]
      });
      return this.load('player');
    } else {
      this.lv = obj.lv;
      this.exp = obj.exp;
      this.status = obj.status;
      return p(this);
    }
  };

  Player.prototype.savePlayData = function() {
    return this.save('player', {
      lv: this.lv,
      exp: 0,
      status: {
        str: this.status.str,
        int: this.status.int,
        dex: this.status.dex
      },
      skills: [
        {
          skill_name: 'MultiShot',
          lv: 1
        }
      ]
    });
  };

  Player.prototype.next_level_exp = function() {
    return this.lv * 10;
  };

  Player.prototype.onLevelUp = function() {
    p('level up');
    this.hp = this.max_hp;
    return this.savePlayData();
  };

  Player.prototype.onDead = function() {
    this.parentNode.popPlayer();
    return this.hp = this.max_hp;
  };

  Player.prototype.draw = function() {
    this.sprite = new PlayerSprite;
    this.width = this.sprite.width;
    this.height = this.sprite.height;
    return this.addChild(this.sprite);
  };

  Player.prototype.enterframe = function() {
    var nx, ny, tx, ty;
    if (app.input.b) {
      tx = this.x + Math.cos(this.direction) * 200;
      ty = this.y + Math.sin(this.direction) * 200;
      this.fire({
        x: tx,
        y: ty
      });
    }
    nx = 0;
    ny = 0;
    if (app.input.up || app.input.w) {
      ny = -1;
    } else if (app.input.down || app.input.s) {
      ny = +1;
    }
    if (app.input.right || app.input.d) {
      nx += 1;
    } else if (app.input.left || app.input.a) {
      nx -= 1;
    }
    nx *= this.move_speed;
    ny *= this.move_speed;
    this.go(nx, ny);
    if (nx || ny) {
      this.sprite.update(nx, ny);
      this.update_direction(nx, ny);
    }
    if (app.input.e) {
      this.switchNextSkill();
    } else if (app.input.q) {
      this.switchPrevSkill();
    }
    this.parentNode.x = app.width / 2 - this.x;
    return this.parentNode.y = app.height / 2 - this.y;
  };

  return Player;

})(App.Entity.Mover);

App.IStoraged = (function() {

  function IStoraged() {}

  IStoraged.required = {
    lv: Number,
    exp: Number,
    onLoad: Function
  };

  IStoraged.prototype.initialize = function() {
    return this._storage = window.localStorage;
  };

  IStoraged.prototype.save = function(name, obj) {
    return this._storage[name] = JSON.stringify(obj);
  };

  IStoraged.prototype.load = function(name) {
    var obj;
    obj = this._storage[name];
    if (obj != null) {
      return this.onLoad(JSON.parse(obj));
    } else {
      return this.onLoad(null);
    }
  };

  return IStoraged;

})();

App.Entity.UditorSprite = (function(_super) {

  __extends(UditorSprite, _super);

  function UditorSprite(chartip_name) {
    var image;
    image = app.assets[chartip_name];
    this.width = image.width;
    this.height = image.height;
    this.row = 6;
    UditorSprite.__super__.constructor.call(this, image.width / 6, image.height / 4);
    this.image = image;
  }

  return UditorSprite;

})(enchant.Sprite);

PlayerSprite = (function(_super) {

  __extends(PlayerSprite, _super);

  function PlayerSprite() {
    PlayerSprite.__super__.constructor.call(this, 'img/Data/CharaChip/[Chara]Civilian_Male_A.png');
    this.state_count = 0;
  }

  PlayerSprite.prototype.update = function(x, y) {
    var index, prefix;
    index = 1;
    prefix = this.row * (x && y ? (index += 3, x < 0 && y > 0 ? 0 : x > 0 && y > 0 ? 1 : x < 0 && y < 0 ? 2 : x > 0 && y < 0 ? 3 : void 0) : y > 0 ? 0 : x < 0 ? 1 : x > 0 ? 2 : y < 0 ? 3 : void 0);
    index += (function() {
      switch (~~(this.state_count / 5) % 4) {
        case 0:
          return 0;
        case 1:
          return +1;
        case 2:
          return 0;
        case 3:
          return -1;
      }
    }).call(this);
    if (prefix !== this.last_prefix) {
      this.state_count = 0;
    } else {
      this.state_count++;
    }
    this.last_prefix = prefix;
    return this.frame = prefix + index;
  };

  return PlayerSprite;

})(App.Entity.UditorSprite);


App.Entity.ISkillSelector = (function() {

  function ISkillSelector() {}

  ISkillSelector.prototype.required = {
    skills: Array,
    age: Number
  };

  ISkillSelector.prototype.initialize = function() {
    this._skill_index = 0;
    return this._last_switch_age = this.age;
  };

  ISkillSelector.prototype._keyWaitEnough = function() {
    return this.age - this._last_switch_age > 0.3 * app.fps;
  };

  ISkillSelector.prototype._updateKeyWait = function() {
    return this._last_switch_age = this.age;
  };

  ISkillSelector.prototype.switchNextSkill = function() {
    if (this._keyWaitEnough()) {
      this._updateKeyWait();
      if (this._skill_index + 1 < this.skills.length) {
        return this._skill_index += 1;
      } else {
        return this._skill_index = 0;
      }
    }
  };

  ISkillSelector.prototype.switchPrevSkill = function() {
    if (this._skill_index - 1 >= 0) {
      return this._skill_index -= 1;
    } else {
      return this._skill_index = this.skills.length - 1;
    }
  };

  ISkillSelector.prototype.selected_skill = function() {
    return this.skills[this._skill_index];
  };

  ISkillSelector.prototype.fire = function(e) {
    return this.selected_skill().exec(e.x, e.y);
  };

  return ISkillSelector;

})();

var IStairway,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

IStairway = (function() {

  function IStairway() {
    this.searchAndExec = __bind(this.searchAndExec, this);

  }

  IStairway.required = {
    x: Number,
    y: Number,
    exec_range: Number,
    event_type: String
  };

  IStairway.prototype.searchAndExec = function() {
    var _ref,
      _this = this;
    return _.each((_ref = this.parentNode) != null ? _ref.childNodes : void 0, function(i) {
      var e;
      if (i instanceof App.Entity.Player) {
        if (Math.abs(i.x - _this.x) < _this.exec_range) {
          if (Math.abs(i.y - _this.y) < _this.exec_range) {
            e = new enchant.Event(_this.event_type);
            return _this.scene.dispatchEvent(e);
          }
        }
      }
    });
  };

  return IStairway;

})();

App.Entity.StairwayUp = (function(_super) {

  __extends(StairwayUp, _super);

  function StairwayUp() {
    var l;
    StairwayUp.__super__.constructor.apply(this, arguments);
    l = new Label('<');
    this.addChild(l);
    this.event_type = 'stairup';
    this.exec_range = 10;
    mixin(this, IStairway);
    this.on('enterframe', this.searchAndExec);
  }

  return StairwayUp;

})(enchant.Group);

App.Entity.StairwayDown = (function(_super) {

  __extends(StairwayDown, _super);

  function StairwayDown() {
    var l;
    StairwayDown.__super__.constructor.apply(this, arguments);
    l = new Label('>');
    this.addChild(l);
    this.event_type = 'stairdown';
    this.exec_range = 10;
    mixin(this, IStairway);
    this.on('enterframe', this.searchAndExec);
  }

  return StairwayDown;

})(enchant.Group);


App.Entity.IStatus = (function() {

  function IStatus() {}

  IStatus.required = {
    max_hp: Number,
    parentNode: enchant.Node,
    onDead: Function
  };

  IStatus.prototype.initialize = function() {
    return this.hp = this.max_hp;
  };

  IStatus.prototype.damage = function(point) {
    var color, _ref;
    this.hp = Math.max(this.hp - point, 0);
    this.checkAlive();
    color = this instanceof App.Entity.Player ? 'purple' : 'red';
    return (_ref = this.parentNode) != null ? _ref.addChild(new App.Entity.DamageLabel("" + point, this.x + 8, this.y, color)) : void 0;
  };

  IStatus.prototype.checkAlive = function() {
    if (this.isDead()) {
      return this.onDead();
    }
  };

  IStatus.prototype.isDead = function() {
    return this.hp <= 0;
  };

  IStatus.prototype.isAlive = function() {
    return !this.isDead();
  };

  return IStatus;

})();

var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Scene.Menu = (function(_super) {

  __extends(Menu, _super);

  function Menu(player, key) {
    this.enterframe = __bind(this.enterframe, this);
    Menu.__super__.constructor.call(this, 640, 480);
    this.addChild(new Label('#############'));
    this.on('enterframe', this.enterframe);
  }

  Menu.prototype.enterframe = function() {
    if (app.input.c && app.isKeyFree('c')) {
      return app.popScene();
    }
  };

  return Menu;

})(enchant.Scene);

App.Scene.Field = (function(_super) {

  __extends(Field, _super);

  function Field(player) {
    var dom;
    this.player = player;
    this.enterframe = __bind(this.enterframe, this);

    this.prevFloor = __bind(this.prevFloor, this);

    this.nextFloor = __bind(this.nextFloor, this);

    Field.__super__.constructor.apply(this, arguments);
    this.initializeBoard();
    this.mouse = new App.Entity.Mouse;
    this.addChild(this.mouse);
    this.ui = new App.UI.Main(this.player);
    this.addChild(this.ui);
    dom = new enchant.DomLayer;
    this.addChild(dom);
    this.on('touchstart', this.touchstart);
    this.on('enterframe', this.enterframe);
    this.on('stairdown', this.nextFloor);
    this.on('stairup', this.prevFloor);
  }

  Field.prototype.initializeBoard = function() {
    var _ref, _ref1;
    if ((_ref = this.objectBoard) != null) {
      _ref.remove();
    }
    this.objectBoard = new App.Scene.ObjectBoard(this.player);
    this.addChild(this.objectBoard);
    if ((_ref1 = this.minimap) != null) {
      _ref1.remove();
    }
    this.minimap = new App.UI.MiniMap(this.objectBoard);
    this.minimap.x = app.width - this.minimap.width;
    return this.addChild(this.minimap);
  };

  Field.prototype.nextFloor = function() {
    return this.initializeBoard();
  };

  Field.prototype.prevFloor = function() {
    return this.initializeBoard();
  };

  Field.prototype.enterframe = function() {
    if (app.input.c && app.isKeyFree('c')) {
      app.pushScene(new App.Scene.Menu);
    }
    if (app.input.i && app.isKeyFree('i')) {
      return this.nextFloor();
    }
  };

  Field.prototype.touchstart = function() {
    var e;
    e = new enchant.Event("fire");
    e.x = this.objectBoard.player.x + this.mouse.x - app.width / 2;
    e.y = this.objectBoard.player.y + this.mouse.y - app.height / 2;
    return this.objectBoard.player.dispatchEvent(e);
  };

  return Field;

})(enchant.Scene);

var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Scene.ObjectBoard = (function(_super) {

  __extends(ObjectBoard, _super);

  function ObjectBoard(player) {
    this.player = player;
    this.spawn = __bind(this.spawn, this);

    ObjectBoard.__super__.constructor.apply(this, arguments);
    this.createMap();
    this.addPlayer();
    this.on('enterframe', this.enterframe);
  }

  ObjectBoard.prototype.addPlayer = function() {
    this.addChild(this.player);
    return this.popPlayer();
  };

  ObjectBoard.prototype.popPlayer = function() {
    var x, y, _ref;
    _ref = this.map.getRandomPssable(), x = _ref.x, y = _ref.y;
    this.player.x = x;
    return this.player.y = y;
  };

  ObjectBoard.prototype.createMap = function() {
    var stairdown, stairup, x, y, _ref, _ref1;
    this.map = new App.Entity.Map(64, 64);
    this.addChild(this.map);
    _ref = this.map.getRandomPssable(), x = _ref.x, y = _ref.y;
    stairup = new App.Entity.StairwayUp;
    stairup.x = x;
    stairup.y = y;
    this.addChild(stairup);
    _ref1 = this.map.getRandomPssable(), x = _ref1.x, y = _ref1.y;
    stairdown = new App.Entity.StairwayDown;
    stairdown.x = x;
    stairdown.y = y;
    return this.addChild(stairdown);
  };

  ObjectBoard.prototype.enterframe = function() {
    return this.spawn();
  };

  ObjectBoard.prototype.spawn = function() {
    var add_monster, i, items, x, y, _i, _ref, _results,
      _this = this;
    items = _.select(this.childNodes, function(i) {
      return i instanceof App.Entity.Monster;
    });
    if (items.length < 30) {
      _ref = this.map.getRandomPssable(), x = _ref.x, y = _ref.y;
      add_monster = function() {
        var monster, nx, ny;
        nx = x + Math.random() * _this.map.cell_size;
        ny = y + Math.random() * _this.map.cell_size;
        if (!_this.map.isWall(nx, ny)) {
          monster = new App.Entity.Slime;
          monster.x = nx;
          monster.y = ny;
          return _this.addChild(monster);
        } else {
          return add_monster();
        }
      };
      _results = [];
      for (i = _i = 1; _i <= 3; i = ++_i) {
        _results.push(add_monster());
      }
      return _results;
    }
  };

  return ObjectBoard;

})(enchant.Group);

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Skill.MultiShot = (function(_super) {

  __extends(MultiShot, _super);

  function MultiShot() {
    return MultiShot.__super__.constructor.apply(this, arguments);
  }

  MultiShot.prototype.exec = function(x, y) {
    var blur_x, blur_y, bullet, cx, cy, i, move_speed, num, _i, _ref, _results;
    num = 10;
    _results = [];
    for (i = _i = 1; _i <= 3; i = ++_i) {
      _ref = this.center(), cx = _ref[0], cy = _ref[1];
      blur_x = 4 * (9 * Math.random() - 4);
      blur_y = 4 * (9 * Math.random() - 4);
      move_speed = 16 - Math.random() * 8;
      bullet = new App.Entity.Bullet({
        rad: Math.atan2(y - cy + blur_y, x - cx + blur_x),
        move_speed: move_speed,
        x: cx,
        y: cy,
        group_id: this.actor.group_id
      });
      _results.push(this.actor.parentNode.addChild(bullet));
    }
    return _results;
  };

  return MultiShot;

})(App.Skill.Base);

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Skill.SingleShot = (function(_super) {

  __extends(SingleShot, _super);

  function SingleShot() {
    return SingleShot.__super__.constructor.apply(this, arguments);
  }

  SingleShot.prototype.exec = function(x, y) {
    var bullet, move_speed;
    move_speed = 16;
    bullet = new App.Entity.Bullet({
      rad: Math.atan2(y - this.actor.y, x - this.actor.x),
      move_speed: move_speed,
      x: this.actor.x,
      y: this.actor.y,
      group_id: this.group_id
    });
    return this.actor.parentNode.addChild(bullet);
  };

  return SingleShot;

})(App.Skill.Base);

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Skill.Slash = (function(_super) {

  __extends(Slash, _super);

  function Slash() {
    return Slash.__super__.constructor.apply(this, arguments);
  }

  Slash.prototype.exec = function(x, y) {
    var bullet, move_speed;
    move_speed = 16;
    bullet = new App.Entity.Bullet({
      rad: Math.atan2(y - this.actor.y, x - this.actor.x),
      move_speed: move_speed,
      x: this.actor.x,
      y: this.actor.y,
      group_id: this.group_id
    });
    return this.actor.parentNode.addChild(bullet);
  };

  return Slash;

})(App.Skill.Base);

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.UI.Dom = (function(_super) {

  __extends(Dom, _super);

  function Dom() {
    return Dom.__super__.constructor.apply(this, arguments);
  }

  Dom.prototype.css = function(params) {
    var key, val, _results;
    _results = [];
    for (key in params) {
      val = params[key];
      _results.push(this._style[key] = val);
    }
    return _results;
  };

  return Dom;

})(enchant.Label);

var HPLabel,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

HPLabel = (function(_super) {

  __extends(HPLabel, _super);

  function HPLabel(player) {
    this.player = player;
    this.enterframe = __bind(this.enterframe, this);

    HPLabel.__super__.constructor.call(this);
    this.css({
      color: 'white'
    });
    this.width = app.width * 1;
    this.height = app.height * 0.1;
    this.backgroundColor = 'black';
    this.$el = $(this._element);
    this.on('enterframe', this.enterframe);
    this.template = Handlebars.compile("<div>\n  Lv:<span style='color:red'>{{player.lv}}</span>\n  ({{player.exp}}/{{next_level_exp}})\n  HP:{{player.hp}}/{{player.max_hp}}\n  STR:{{player.status.str}} INT:{{player.status.int}} DEX: {{player.status.dex}}\n</div>\n<div> {{skill.constructor.name}} Lv.{{skill.lv}} </div>");
  }

  HPLabel.prototype.enterframe = function() {
    var skill, skills;
    skill = this.player.selected_skill();
    this.text = this.template({
      player: this.player,
      skill: this.player.selected_skill(),
      next_level_exp: this.player.next_level_exp()
    });
    return skills = (function() {
      var _i, _len, _ref, _results;
      _ref = this.player.skills;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        skill = _ref[_i];
        _results.push(p.constructor.name);
      }
      return _results;
    }).call(this);
  };

  return HPLabel;

})(App.UI.Dom);

App.UI.Main = (function(_super) {

  __extends(Main, _super);

  function Main(player) {
    var hp_label;
    this.player = player;
    Main.__super__.constructor.apply(this, arguments);
    this.x = 0;
    this.y = 0;
    hp_label = new HPLabel(this.player);
    hp_label.x = 0;
    hp_label.y = app.height - hp_label.height;
    this.addChild(hp_label);
  }

  return Main;

})(enchant.DomLayer);

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.UI.Menu = (function(_super) {

  __extends(Menu, _super);

  function Menu(player) {
    var hp_label;
    this.player = player;
    Menu.__super__.constructor.apply(this, arguments);
    this.x = 0;
    this.y = 0;
    hp_label = new HPLabel(this.player);
    hp_label.x = 0;
    hp_label.y = app.height - hp_label.height;
    this.backgroundColor = 'black';
    this.addChild(hp_label);
  }

  return Menu;

})(enchant.DomLayer);

var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.UI.MiniMap = (function(_super) {
  var PASSABLE, WALL, inner_size;

  __extends(MiniMap, _super);

  WALL = 1;

  PASSABLE = 0;

  inner_size = 2;

  function MiniMap(objectBoard) {
    this.enterframe = __bind(this.enterframe, this);
    this.map = objectBoard.map;
    this.cell_x = this.map.cell_x;
    this.cell_y = this.map.cell_y;
    MiniMap.__super__.constructor.call(this, this.cell_x * inner_size, this.cell_y * inner_size);
    this.minimap = this.map.createMiniMapSprite();
    this.addChild(this.minimap);
    this.width = this.minimap.width;
    this.height = this.minimap.height;
    this.avatar = new Label('.');
    this.avatar.color = 'blue';
    this.addChild(this.avatar);
    this.on('enterframe', this.enterframe);
  }

  MiniMap.prototype.enterframe = function() {
    this.avatar.x = ~~(app.player.x / this.map.cell_size) * inner_size - 2;
    return this.avatar.y = ~~(app.player.y / this.map.cell_size) * inner_size - 10;
  };

  return MiniMap;

})(enchant.Group);
