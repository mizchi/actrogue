var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Scene.Menu = (function(_super) {

  __extends(Menu, _super);

  function Menu(player, key) {
    this.enterframe = __bind(this.enterframe, this);
    Menu.__super__.constructor.call(this, 640, 480);
    this.addChild(new Label('#############'));
    this.on('enterframe', this.enterframe);
  }

  Menu.prototype.enterframe = function() {
    if (app.input.c && app.isKeyFree('c')) {
      return app.popScene();
    }
  };

  return Menu;

})(enchant.Scene);

App.Scene.Field = (function(_super) {

  __extends(Field, _super);

  function Field(player) {
    var dom;
    this.player = player;
    this.enterframe = __bind(this.enterframe, this);

    this.prevFloor = __bind(this.prevFloor, this);

    this.nextFloor = __bind(this.nextFloor, this);

    Field.__super__.constructor.apply(this, arguments);
    this.initializeBoard();
    this.mouse = new App.Entity.Mouse;
    this.addChild(this.mouse);
    this.ui = new App.UI.Main(this.player);
    this.addChild(this.ui);
    dom = new enchant.DomLayer;
    this.addChild(dom);
    this.on('touchstart', this.touchstart);
    this.on('enterframe', this.enterframe);
    this.on('stairdown', this.nextFloor);
    this.on('stairup', this.prevFloor);
  }

  Field.prototype.initializeBoard = function() {
    var _ref, _ref1;
    if ((_ref = this.objectBoard) != null) {
      _ref.remove();
    }
    this.objectBoard = new App.Scene.ObjectBoard(this.player);
    this.addChild(this.objectBoard);
    if ((_ref1 = this.minimap) != null) {
      _ref1.remove();
    }
    this.minimap = new App.UI.MiniMap(this.objectBoard);
    this.minimap.x = app.width - this.minimap.width;
    return this.addChild(this.minimap);
  };

  Field.prototype.nextFloor = function() {
    return this.initializeBoard();
  };

  Field.prototype.prevFloor = function() {
    return this.initializeBoard();
  };

  Field.prototype.enterframe = function() {
    if (app.input.c && app.isKeyFree('c')) {
      app.pushScene(new App.Scene.Menu);
    }
    if (app.input.i && app.isKeyFree('i')) {
      return this.nextFloor();
    }
  };

  Field.prototype.touchstart = function() {
    var e;
    e = new enchant.Event("fire");
    e.x = this.objectBoard.player.x + this.mouse.x - app.width / 2;
    e.y = this.objectBoard.player.y + this.mouse.y - app.height / 2;
    return this.objectBoard.player.dispatchEvent(e);
  };

  return Field;

})(enchant.Scene);
