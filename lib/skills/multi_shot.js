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
    for (i = _i = 1; _i <= 3; i = ++_i) {
      blur_x = 4 * (9 * Math.random() - 4);
      blur_y = 4 * (9 * Math.random() - 4);
      move_speed = 16 - Math.random() * 8;
      bullet = new App.Entity.Bullet({
        rad: Math.atan2(y - this.actor.y + blur_y, x - this.actor.x + blur_x),
        move_speed: move_speed,
        x: this.actor.x,
        y: this.actor.y,
        group_id: this.actor.group_id
      });
      _results.push(this.actor.parentNode.addChild(bullet));
    }
    return _results;
  };

  return MultiShot;

})(App.Skill.Base);
