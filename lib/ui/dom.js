var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.UI.Dom = (function(_super) {

  __extends(Dom, _super);

  function Dom() {
    return Dom.__super__.constructor.apply(this, arguments);
  }

  Dom.prototype.css = function(params) {
    var key, val, _results;
    _results = [];
    for (key in params) {
      val = params[key];
      _results.push(this._style[key] = val);
    }
    return _results;
  };

  return Dom;

})(enchant.Label);
