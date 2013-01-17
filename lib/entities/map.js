var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Entity.Map = (function(_super) {
  var PASSABLE, TILE_SIZE, WALL;

  __extends(Map, _super);

  WALL = 1;

  PASSABLE = 0;

  TILE_SIZE = 16;

  function Map(cell_x, cell_y) {
    this.cell_x = cell_x;
    this.cell_y = cell_y;
    Map.__super__.constructor.apply(this, arguments);
    this.cell_size = 48;
    this.tile_size = 16;
    this.maptip = app.assets['img/map1.png'];
    this.width = this.cell_size * this.cell_x;
    this.height = this.cell_size * this.cell_y;
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
    this.layer = [];
    map = new ROT.Map.Uniform(this.cell_x, this.cell_y);
    return map.create(function(x, y, val) {
      return _this.hitmap[x][y] = val;
    });
  };

  Map.prototype.isWall = function(x, y) {
    return !!this.hitmap[~~(y / this.cell_size)][~~(x / this.cell_size)];
  };

  Map.prototype.passable = function(x, y) {
    return !this.isWall(x, y);
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
        if (PASSABLE === val) {
          this.drawTip(g, x, y, 1, 0);
        } else {
          this.drawTip(g, x, y, 1, 5);
        }
      }
    }
    return this.image = surface;
  };

  Map.prototype.createMiniMapSprite = function() {
    var g, inner_size, minimap, row, surface, val, x, y, _i, _j, _len, _len1, _ref;
    inner_size = 2;
    minimap = new Sprite(inner_size * this.cell_x, inner_size * this.cell_y);
    minimap.backgroundColor = 'white';
    surface = new enchant.Surface(this.width, this.height);
    g = surface.context;
    g.beginPath();
    _ref = this.hitmap;
    for (y = _i = 0, _len = _ref.length; _i < _len; y = ++_i) {
      row = _ref[y];
      for (x = _j = 0, _len1 = row.length; _j < _len1; x = ++_j) {
        val = row[x];
        if (WALL === val) {
          g.color = 'black';
          g.fillRect(x * inner_size, y * inner_size, inner_size, inner_size);
        }
      }
    }
    minimap.image = surface;
    return minimap;
  };

  Map.prototype.drawTip = function(g, x, y, tile_x, tile_y) {
    return g.drawImage(this.maptip._element, tile_x * TILE_SIZE, tile_y * TILE_SIZE, TILE_SIZE, TILE_SIZE, x * this.cell_size, y * this.cell_size, this.cell_size, this.cell_size);
  };

  return Map;

})(enchant.Sprite);
