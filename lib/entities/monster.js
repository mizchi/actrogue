var MochiSprite, Position,
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

  Monster.prototype.passable = false;

  function Monster() {
    this.enterframe = __bind(this.enterframe, this);

    this.hit = __bind(this.hit, this);
    Monster.__super__.constructor.apply(this, arguments);
    this.destination = null;
    this.move_speed = 1;
    this.sight_range = 120;
    this.group_id = App.Entity.GroupId.Enemy;
    this.mode = 'idle';
    this.on('hit', this.hit);
    this.max_hp = 10;
    mixin(this, App.Entity.IStatus);
  }

  Monster.prototype.hit = function(_arg) {
    var other, _ref,
      _this = this;
    other = _arg.other;
    this.damage(2);
    if (this.isDead()) {
      _.each((_ref = this.parentNode) != null ? _ref.childNodes : void 0, function(i) {
        if (i.group_id === other.group_id) {
          p('gain exp 1 to ', i.group_id);
          return typeof i.gainExp === "function" ? i.gainExp(1) : void 0;
        }
      });
      return this.remove();
    }
  };

  Monster.prototype.onDead = function() {};

  Monster.prototype.setRandomDestination = function() {
    return this.setDestination(this.x + (Math.random() - 0.5) * this.sight_range, this.y + (Math.random() - 0.5) * this.sight_range);
  };

  Monster.prototype.enterframe = function() {
    var attack_interval, attack_power, attack_range, enemy_in_range, target, _ref;
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

  Monster.prototype.draw = function() {
    this.sprite = new MochiSprite;
    return this.addChild(this.sprite);
  };

  Monster.prototype.onMove = function(x, y) {
    return this.sprite.update(x, y);
  };

  return Monster;

})(App.Entity.Mover);

MochiSprite = (function(_super) {

  __extends(MochiSprite, _super);

  function MochiSprite() {
    MochiSprite.__super__.constructor.call(this, 20, 28);
    this.row = 6;
    this.image = app.assets['img/char/mochi1.png'];
    this.x -= this.width / 2;
    this.y -= this.height / 2;
    this.state_count = 0;
  }

  MochiSprite.prototype.update = function(x, y) {
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

  return MochiSprite;

})(enchant.Sprite);
