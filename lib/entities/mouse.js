var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Entity.Mouse = (function(_super) {

  __extends(Mouse, _super);

  function Mouse() {
    return Mouse.__super__.constructor.apply(this, arguments);
  }

  Mouse.prototype.draw = function() {
    return this.addChild(new App.Entity.Circle(0, 0, 8, 'green', 'stroke'));
  };

  Mouse.prototype.enterframe = function() {
    this.x = MouseEvent.offsetX;
    this.y = MouseEvent.offsetY;
    this.alt = MouseEvent.altKey;
    return this.shift = MouseEvent.shiftKey;
  };

  return Mouse;

})(App.Entity.Mover);
