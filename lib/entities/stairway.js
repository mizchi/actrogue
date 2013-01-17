var IStairway,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

IStairway = (function() {

  function IStairway() {
    this.searchAndExec = __bind(this.searchAndExec, this);

  }

  IStairway.required = {
    x: Number,
    y: Number,
    exec_range: Number,
    event_type: String
  };

  IStairway.prototype.searchAndExec = function() {
    var _ref,
      _this = this;
    return _.each((_ref = this.parentNode) != null ? _ref.childNodes : void 0, function(i) {
      var e;
      if (i instanceof App.Entity.Player) {
        if (Math.abs(i.x - _this.x) < _this.exec_range) {
          if (Math.abs(i.y - _this.y) < _this.exec_range) {
            e = new enchant.Event(_this.event_type);
            return _this.scene.dispatchEvent(e);
          }
        }
      }
    });
  };

  return IStairway;

})();

App.Entity.StairwayUp = (function(_super) {

  __extends(StairwayUp, _super);

  function StairwayUp() {
    var l;
    StairwayUp.__super__.constructor.apply(this, arguments);
    l = new Label('<');
    this.addChild(l);
    this.event_type = 'stairup';
    this.exec_range = 10;
    mixin(this, IStairway);
    this.on('enterframe', this.searchAndExec);
  }

  return StairwayUp;

})(enchant.Group);

App.Entity.StairwayDown = (function(_super) {

  __extends(StairwayDown, _super);

  function StairwayDown() {
    var l;
    StairwayDown.__super__.constructor.apply(this, arguments);
    l = new Label('>');
    this.addChild(l);
    this.event_type = 'stairdown';
    this.exec_range = 10;
    mixin(this, IStairway);
    this.on('enterframe', this.searchAndExec);
  }

  return StairwayDown;

})(enchant.Group);
