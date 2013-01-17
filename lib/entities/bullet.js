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
