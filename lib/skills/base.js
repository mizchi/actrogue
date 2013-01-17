
App.Skill.Base = (function() {

  function Base(actor, lv) {
    this.actor = actor;
    this.lv = lv != null ? lv : 1;
  }

  Base.prototype.fire = function(x, y) {};

  return Base;

})();
