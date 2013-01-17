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
