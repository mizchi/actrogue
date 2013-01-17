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
          monster = new App.Entity.Monster;
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
