
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
  Entity: {}
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
    group_id: Number
  };

  ISearcher.prototype.findEnemy = function(range) {
    var _this = this;
    return _.find(this.parentNode.childNodes, function(node) {
      if ((node != null ? node.group_id : void 0) != null) {
        if (node.group_id !== _this.group_id) {
          return node.group_id && Math.abs(_this.x - node.x) < range && Math.abs(_this.y - node.y) < range;
        }
      } else {
        return false;
      }
    });
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
    var nx, ny;
    nx = this._until(this.x, this.x + dx, max_x);
    ny = this._until(this.y, this.y + dy, max_y);
    if (nx === this.x && ny === this.y) {
      return false;
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
    Core.__super__.constructor.apply(this, arguments);
    window.app = this;
    this.fps = 30;
    this.keybind('W'.charCodeAt(0), 'w');
    this.keybind('A'.charCodeAt(0), 'a');
    this.keybind('S'.charCodeAt(0), 's');
    this.keybind('D'.charCodeAt(0), 'd');
    this.onload = function() {
      return this.pushScene(new App.Scene.Field);
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

  function Bullet(_arg) {
    var dx, dy, group_id, move_speed, rad, range, x, y;
    x = _arg.x, y = _arg.y, rad = _arg.rad, move_speed = _arg.move_speed, group_id = _arg.group_id;
    this.enterframe = __bind(this.enterframe, this);

    Bullet.__super__.constructor.apply(this, arguments);
    this.x = x;
    this.y = y;
    this.move_speed = move_speed != null ? move_speed : 16;
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
    this.goAhead();
    this.findEnemy(18);
    if (this.isDead()) {
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

App.Entity.Monster = (function(_super) {

  __extends(Monster, _super);

  function Monster() {
    this.enterframe = __bind(this.enterframe, this);
    Monster.__super__.constructor.apply(this, arguments);
    this.destination = null;
    this.group_id = App.Entity.GroupId.Enemy;
  }

  Monster.prototype.setRandomDestination = function() {
    return this.setDestination(this.x + Math.random() * 10 - 5, this.y + Math.random() * 10 - 5);
  };

  Monster.prototype.enterframe = function() {
    var success;
    Monster.__super__.enterframe.apply(this, arguments);
    if (!this.hasDestination()) {
      return this.setRandomDestination();
    } else {
      success = this.goAhead();
      if (!success) {
        return this.removeDestination();
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
    return this.addChild(new App.Entity.Circle(0, 0, 8, 'blue'));
  };

  Mouse.prototype.enterframe = function() {
    this.x = MouseEvent.offsetX;
    this.y = MouseEvent.offsetY;
    this.alt = MouseEvent.altKey;
    return this.shift = MouseEvent.shiftKey;
  };

  return Mouse;

})(App.Entity.Mover);

var MultiShot, Skill,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Skill = (function() {

  function Skill() {}

  return Skill;

})();

MultiShot = (function(_super) {

  __extends(MultiShot, _super);

  function MultiShot(actor) {
    this.actor = actor;
  }

  MultiShot.prototype.exec = function(x, y) {
    var blur_x, blur_y, bullet, i, move_speed, _i, _results;
    _results = [];
    for (i = _i = 1; _i <= 100; i = ++_i) {
      blur_x = i * (9 * Math.random() - 4);
      blur_y = i * (9 * Math.random() - 4);
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

})(Skill);

App.Entity.IShooter = (function() {

  function IShooter() {}

  IShooter.required = {
    x: Number,
    y: Number,
    parentNode: Object
  };

  IShooter.prototype.singleShot = function(x, y) {
    var bullet;
    bullet = new App.Entity.Bullet({
      rad: Math.atan2(y - this.y, x - this.x),
      move_speed: 16,
      x: this.x,
      y: this.y,
      group_id: this.group_id
    });
    return this.parentNode.addChild(bullet);
  };

  IShooter.prototype.multiShot = function(x, y) {
    var blur_x, blur_y, bullet, i, move_speed, _i, _results;
    _results = [];
    for (i = _i = 1; _i <= 100; i = ++_i) {
      blur_x = i * (9 * Math.random() - 4);
      blur_y = i * (9 * Math.random() - 4);
      move_speed = 16 - Math.random() * 8;
      bullet = new App.Entity.Bullet({
        rad: Math.atan2(y - this.y + blur_y, x - this.x + blur_x),
        move_speed: move_speed,
        x: this.x,
        y: this.y,
        group_id: this.group_id
      });
      _results.push(this.parentNode.addChild(bullet));
    }
    return _results;
  };

  return IShooter;

})();

App.Entity.ISkillSelector = (function() {

  function ISkillSelector() {}

  ISkillSelector.prototype.required = {
    skills: Array
  };

  ISkillSelector.prototype.initialize = function() {
    return this._skill_index = 0;
  };

  ISkillSelector.prototype.switchNextSkill = function() {
    return this._skill_index += 1;
  };

  ISkillSelector.prototype.switchPrevSkill = function() {
    return this._skill_index -= 1;
  };

  ISkillSelector.prototype._selectedSkill = function() {
    return this.skills[this._skill_index];
  };

  ISkillSelector.prototype.fire = function(e) {
    return this._selectedSkill().exec(this, e.x, e.y);
  };

  return ISkillSelector;

})();

App.Entity.Player = (function(_super) {

  __extends(Player, _super);

  function Player() {
    this.enterframe = __bind(this.enterframe, this);

    this.fire = __bind(this.fire, this);
    Player.__super__.constructor.apply(this, arguments);
    this.group_id = App.Entity.GroupId.Player;
    this.move_speed = 6;
    this.multi = new MultiShot(this);
    this.on('fire', this.fire);
  }

  Player.prototype.draw = function() {
    return this.addChild(new App.Entity.Circle(0, 0, 8));
  };

  Player.prototype.fire = function(e) {
    return this.multi.exec(e.x, e.y);
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
    this.parentNode.x = app.width / 2 - this.x;
    return this.parentNode.y = app.height / 2 - this.y;
  };

  return Player;

})(App.Entity.Mover);

var ObjectBoard,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ObjectBoard = (function(_super) {

  __extends(ObjectBoard, _super);

  function ObjectBoard() {
    this.spawn = __bind(this.spawn, this);
    ObjectBoard.__super__.constructor.apply(this, arguments);
    this.addChild(new Label('0'));
    this.player = new App.Entity.Player;
    this.addChild(this.player);
    this.on('enterframe', this.enterframe);
  }

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
