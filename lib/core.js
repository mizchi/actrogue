var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Core = (function(_super) {

  __extends(Core, _super);

  function Core() {
    var _this = this;
    Core.__super__.constructor.call(this, 640, 480);
    window.app = this;
    this.fps = 30;
    this.keybind('W'.charCodeAt(0), 'w');
    this.keybind('A'.charCodeAt(0), 'a');
    this.keybind('S'.charCodeAt(0), 's');
    this.keybind('D'.charCodeAt(0), 'd');
    this.keybind('E'.charCodeAt(0), 'e');
    this.keybind('Q'.charCodeAt(0), 'q');
    this.keybind('I'.charCodeAt(0), 'i');
    this.keybind('C'.charCodeAt(0), 'c');
    this.keybind('B'.charCodeAt(0), 'b');
    this.preload(["img/chara0.png", 'img/roguetile.gif', 'img/char/player.png', 'img/char/mochi1.png', 'img/map0.png', 'img/map1.png']);
    this.onload = function() {
      _this.player = new App.Entity.Player;
      return _this.pushScene(new App.Scene.Field(_this.player));
    };
    this.start();
  }

  Core.prototype._key_free = {};

  Core.prototype.isKeyFree = function(key) {
    if (!this._key_free[key]) {
      this._key_free[key] = new Date().getTime();
      return true;
    } else {
      if (new Date().getTime() - this._key_free[key] > 1000 / 3) {
        this._key_free[key] = new Date().getTime();
        return true;
      } else {
        return false;
      }
    }
  };

  return Core;

})(enchant.Core);
