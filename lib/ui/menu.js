var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.UI.Menu = (function(_super) {

  __extends(Menu, _super);

  function Menu(player) {
    var hp_label;
    this.player = player;
    Menu.__super__.constructor.apply(this, arguments);
    this.x = 0;
    this.y = 0;
    hp_label = new HPLabel(this.player);
    hp_label.x = 0;
    hp_label.y = app.height - hp_label.height;
    this.backgroundColor = 'black';
    this.addChild(hp_label);
  }

  return Menu;

})(enchant.DomLayer);
