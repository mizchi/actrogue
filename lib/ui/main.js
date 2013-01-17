var HPLabel,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

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

HPLabel = (function(_super) {

  __extends(HPLabel, _super);

  function HPLabel(player) {
    this.player = player;
    this.enterframe = __bind(this.enterframe, this);

    HPLabel.__super__.constructor.call(this);
    this.css({
      color: 'white'
    });
    this.width = app.width * 1;
    this.height = app.height * 0.1;
    this.backgroundColor = 'black';
    this.$el = $(this._element);
    this.on('enterframe', this.enterframe);
    this.template = Handlebars.compile("<div>\n  Lv:<span style='color:red'>{{player.lv}}</span>\n  ({{player.exp}}/{{next_level_exp}})\n  HP:{{player.hp}}/{{player.max_hp}}\n  STR:{{player.status.str}} INT:{{player.status.int}} DEX: {{player.status.dex}}\n</div>\n<div> {{skill.constructor.name}} Lv.{{skill.lv}} </div>");
  }

  HPLabel.prototype.enterframe = function() {
    var skill, skills;
    skill = this.player.selected_skill();
    this.text = this.template({
      player: this.player,
      skill: this.player.selected_skill(),
      next_level_exp: this.player.next_level_exp()
    });
    return skills = (function() {
      var _i, _len, _ref, _results;
      _ref = this.player.skills;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        skill = _ref[_i];
        _results.push(p.constructor.name);
      }
      return _results;
    }).call(this);
  };

  return HPLabel;

})(App.UI.Dom);

App.UI.Main = (function(_super) {

  __extends(Main, _super);

  function Main(player) {
    var hp_label;
    this.player = player;
    Main.__super__.constructor.apply(this, arguments);
    this.x = 0;
    this.y = 0;
    hp_label = new HPLabel(this.player);
    hp_label.x = 0;
    hp_label.y = app.height - hp_label.height;
    this.addChild(hp_label);
  }

  return Main;

})(enchant.DomLayer);
