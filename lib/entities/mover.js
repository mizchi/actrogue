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

  return Mover;

})(enchant.Group);
