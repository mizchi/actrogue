var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Entity.DamageLabel = (function(_super) {

  __extends(DamageLabel, _super);

  function DamageLabel(text, x, y, color) {
    if (color == null) {
      color = 'red';
    }
    this.enterframe = __bind(this.enterframe, this);

    DamageLabel.__super__.constructor.apply(this, arguments);
    this.x = x;
    this.y = y;
    this.addDiffByOther();
    this.lifetime = 1;
    this.color = color;
    this.on('enterframe', this.enterframe);
  }

  DamageLabel.prototype.addDiffByOther = function() {
    var _ref,
      _this = this;
    return _.each((_ref = this.parentNode) != null ? _ref.childNodes : void 0, function(node) {
      if (node instanceof DamageLabel) {
        if (Math.abs(node.x - _this.x) < 8 && Math.abs(node.y - _this.y) < 8) {
          p('add diff');
          _this.x += 8;
          return _this.y += 8;
        }
      }
    });
  };

  DamageLabel.prototype.enterframe = function() {
    var progress;
    progress = this.age / (app.fps * this.lifetime);
    if (progress < 1) {
      this.y -= 0.5;
      return this.opacity = 1 - progress;
    } else {
      return this.remove();
    }
  };

  return DamageLabel;

})(enchant.Label);
