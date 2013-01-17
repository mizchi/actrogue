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
