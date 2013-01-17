
App.Entity.IStatus = (function() {

  function IStatus() {}

  IStatus.required = {
    max_hp: Number,
    parentNode: enchant.Node,
    onDead: Function
  };

  IStatus.prototype.initialize = function() {
    return this.hp = this.max_hp;
  };

  IStatus.prototype.damage = function(point) {
    var color, _ref;
    this.hp = Math.max(this.hp - point, 0);
    this.checkAlive();
    color = this instanceof App.Entity.Player ? 'purple' : 'red';
    return (_ref = this.parentNode) != null ? _ref.addChild(new App.Entity.DamageLabel("" + point, this.x + 8, this.y, color)) : void 0;
  };

  IStatus.prototype.checkAlive = function() {
    if (this.isDead()) {
      return this.onDead();
    }
  };

  IStatus.prototype.isDead = function() {
    return this.hp <= 0;
  };

  IStatus.prototype.isAlive = function() {
    return !this.isDead();
  };

  return IStatus;

})();
