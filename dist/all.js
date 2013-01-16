
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
  Skill: {}
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

  function Base(actor) {
    this.actor = actor;
  }

  Base.prototype.fire = function(x, y) {};

  return Base;

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
    this.x -= this.width / 2;
    this.y -= this.height / 2;
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
      if ((node != null ? node.group_id : void 0) != null) {
        if (node.group_id === group_id) {
          return node.group_id && Math.abs(_this.x - node.x) < range && Math.abs(_this.y - node.y) < range;
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
    direction: Number
  };

  ITracer.prototype.initialize = function() {
    this.destination = null;
    this.x_speed = 0;
    return this.y_speed = 0;
  };

  ITracer.prototype.goAhead = function() {
    return this.go(this.x_speed, this.y_speed, this.destination.x, this.destination.y);
  };

  ITracer.prototype.setDestination = function(x, y) {
    this.destination = new Position(x, y);
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
    var inhibitor, nx, ny, _ref,
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
    this.x = nx;
    this.y = ny;
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

  Mover.prototype.enterframe = function() {
    return this.drawByFrame();
  };

  return Mover;

})(enchant.Group);

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Core = (function(_super) {

  __extends(Core, _super);

  function Core() {
    var _this = this;
    Core.__super__.constructor.apply(this, arguments);
    window.app = this;
    this.fps = 30;
    this.keybind('W'.charCodeAt(0), 'w');
    this.keybind('A'.charCodeAt(0), 'a');
    this.keybind('S'.charCodeAt(0), 's');
    this.keybind('D'.charCodeAt(0), 'd');
    this.keybind('E'.charCodeAt(0), 'e');
    this.keybind('Q'.charCodeAt(0), 'q');
    this.preload(["img/chara0.png", 'img/roguetile.gif']);
    this.onload = function() {
      return _this.pushScene(new App.Scene.Field);
    };
    this.start();
  }

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
    this.goAhead();
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

var Position,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Position = (function() {

  function Position(x, y) {
    this.x = x;
    this.y = y;
  }

  return Position;

})();

App.Entity.IHitPoint = (function() {

  function IHitPoint() {}

  IHitPoint.required = {
    max_hp: Number
  };

  IHitPoint.prototype.initialize = function() {
    return this.hp = this.max_hp;
  };

  IHitPoint.prototype.damage = function(point) {
    return this.hp = Math.max(this.hp - point, 0);
  };

  IHitPoint.prototype.isDead = function() {
    return this.hp <= 0;
  };

  IHitPoint.prototype.isAlive = function() {
    return !this.isDead();
  };

  return IHitPoint;

})();

App.Entity.Monster = (function(_super) {

  __extends(Monster, _super);

  Monster.prototype.passable = false;

  function Monster() {
    this.enterframe = __bind(this.enterframe, this);

    this.hit = __bind(this.hit, this);
    Monster.__super__.constructor.apply(this, arguments);
    this.destination = null;
    this.move_speed = 3;
    this.sight_range = 50;
    this.group_id = App.Entity.GroupId.Enemy;
    this.mode = 'idle';
    this.on('hit', this.hit);
    this.max_hp = 10;
    mixin(this, App.Entity.IHitPoint);
  }

  Monster.prototype.hit = function(_arg) {
    var other;
    other = _arg.other;
    this.damage(2);
    if (this.isDead()) {
      return this.remove();
    }
  };

  Monster.prototype.setRandomDestination = function() {
    return this.setDestination(this.x + (Math.random() - 0.5) * this.sight_range, this.y + (Math.random() - 0.5) * this.sight_range);
  };

  Monster.prototype.enterframe = function() {
    var target;
    Monster.__super__.enterframe.apply(this, arguments);
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

  Monster.prototype.draw = function() {
    return this.addChild(new App.Entity.Circle(0, 0, 8, 'red'));
  };

  return Monster;

})(App.Entity.Mover);

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

var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

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

  ISkillSelector.prototype._selectedSkill = function() {
    return this.skills[this._skill_index];
  };

  ISkillSelector.prototype.fire = function(e) {
    return this._selectedSkill().exec(e.x, e.y);
  };

  return ISkillSelector;

})();

App.Entity.Player = (function(_super) {

  __extends(Player, _super);

  Player.prototype.passable = false;

  function Player() {
    this.enterframe = __bind(this.enterframe, this);
    Player.__super__.constructor.apply(this, arguments);
    this.group_id = App.Entity.GroupId.Player;
    this.move_speed = 6;
    this.sight_range = 10;
    this.skills = [new App.Skill.MultiShot(this), new App.Skill.SingleShot(this)];
    mixin(this, App.Entity.ISkillSelector);
    this.on('fire', this.fire);
  }

  Player.prototype.draw = function() {
    return this.addChild(new App.Entity.Circle(0, 0, 8));
  };

  Player.prototype.enterframe = function() {
    if (app.input.up || app.input.w) {
      this.go(0, -this.move_speed);
    } else if (app.input.down || app.input.s) {
      this.go(0, +this.move_speed);
    }
    if (app.input.right || app.input.d) {
      this.go(+this.move_speed, 0);
    } else if (app.input.left || app.input.a) {
      this.go(-this.move_speed, 0);
    }
    if (app.input.e) {
      this.switchNextSkill();
      p(this._skill_index);
    } else if (app.input.q) {
      this.switchPrevSkill();
      p(this._skill_index);
    }
    this.parentNode.x = app.width / 2 - this.x;
    return this.parentNode.y = app.height / 2 - this.y;
  };

  return Player;

})(App.Entity.Mover);

var ObjectBoard,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

App.Entity.Map = (function(_super) {
  var PASSABLE, WALL;

  __extends(Map, _super);

  WALL = 1;

  PASSABLE = 0;

  function Map(cell_x, cell_y) {
    this.cell_x = cell_x;
    this.cell_y = cell_y;
    Map.__super__.constructor.apply(this, arguments);
    this.cell_size = 48;
    this.tile_size = 16;
    this.width = this.cell_size * this.cell_x;
    this.height = this.cell_size * this.cell_y;
    p(this.width, this.height);
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
    map = new ROT.Map.Uniform(this.cell_x, this.cell_y);
    return map.create(function(x, y, val) {
      return _this.hitmap[x][y] = val;
    });
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
        g.fillStyle = val === WALL ? '#111' : val === PASSABLE ? '#fff' : void 0;
        g.fillRect(x * this.cell_size, y * this.cell_size, this.cell_size, this.cell_size);
      }
    }
    return this.image = surface;
  };

  return Map;

})(enchant.Sprite);

ObjectBoard = (function(_super) {

  __extends(ObjectBoard, _super);

  function ObjectBoard(map) {
    this.map = map;
    this.spawn = __bind(this.spawn, this);

    ObjectBoard.__super__.constructor.apply(this, arguments);
    this.createMap();
    this.addPlayer();
    this.on('enterframe', this.enterframe);
  }

  ObjectBoard.prototype.addPlayer = function() {
    var x, y, _ref;
    this.player = new App.Entity.Player;
    _ref = this.map.getRandomPssable(), x = _ref.x, y = _ref.y;
    p(x, y);
    this.player.x = x;
    this.player.y = y;
    return this.addChild(this.player);
  };

  ObjectBoard.prototype.createMap = function() {
    this.map = new App.Entity.Map(32, 32);
    return this.addChild(this.map);
  };

  ObjectBoard.prototype.enterframe = function() {
    return this.spawn();
  };

  ObjectBoard.prototype.spawn = function() {
    var items, monster;
    items = _.select(this.childNodes, function(i) {
      return i instanceof App.Entity.Monster;
    });
    if (items.length < 10) {
      monster = new App.Entity.Monster;
      monster.x = Math.random() * 100;
      monster.y = Math.random() * 100;
      return this.addChild(monster);
    }
  };

  return ObjectBoard;

})(enchant.Group);

App.Scene.Field = (function(_super) {

  __extends(Field, _super);

  function Field() {
    Field.__super__.constructor.apply(this, arguments);
    this.objectBoard = new ObjectBoard;
    this.addChild(this.objectBoard);
    this.mouse = new App.Entity.Mouse;
    this.addChild(this.mouse);
    this.on('touchstart', this.touchstart);
  }

  Field.prototype.touchstart = function() {
    var e;
    e = new enchant.Event("fire");
    e.x = this.objectBoard.player.x + this.mouse.x - app.width / 2;
    e.y = this.objectBoard.player.y + this.mouse.y - app.height / 2;
    return this.objectBoard.player.dispatchEvent(e);
  };

  return Field;

})(enchant.Scene);

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Skill.MultiShot = (function(_super) {

  __extends(MultiShot, _super);

  function MultiShot() {
    return MultiShot.__super__.constructor.apply(this, arguments);
  }

  MultiShot.prototype.exec = function(x, y) {
    var blur_x, blur_y, bullet, i, move_speed, num, _i, _results;
    num = 10;
    _results = [];
    for (i = _i = 1; 1 <= num ? _i <= num : _i >= num; i = 1 <= num ? ++_i : --_i) {
      blur_x = 4 * (9 * Math.random() - 4);
      blur_y = 4 * (9 * Math.random() - 4);
      move_speed = 16 - Math.random() * 8;
      bullet = new App.Entity.Bullet({
        rad: Math.atan2(y - this.actor.y + blur_y, x - this.actor.x + blur_x),
        move_speed: move_speed,
        x: this.actor.x,
        y: this.actor.y,
        group_id: this.group_id
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
