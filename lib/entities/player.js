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

PlayerSprite = (function(_super) {

  __extends(PlayerSprite, _super);

  function PlayerSprite() {
    PlayerSprite.__super__.constructor.call(this, 32, 32);
    this.row = 3;
    this.image = app.assets['img/char/player.png'];
    this.x -= this.width / 2;
    this.y -= this.height / 2;
    this.state_count = 0;
  }

  PlayerSprite.prototype.update = function(x, y) {
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

  return PlayerSprite;

})(enchant.Sprite);
