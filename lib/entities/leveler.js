
App.Entity.ILeveler = (function() {

  function ILeveler() {}

  ILeveler.required = {
    lv: Number,
    exp: Number,
    next_level_exp: Function,
    onLevelUp: Function
  };

  ILeveler.prototype.gainExp = function(point) {
    p('gain exp', point);
    this.exp += point;
    if (this.next_level_exp() <= this.exp) {
      this.lv += 1;
      this.exp = 0;
      return this.onLevelUp();
    }
  };

  return ILeveler;

})();
