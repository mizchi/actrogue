
App.Entity.ISkillSelector = (function() {

  function ISkillSelector() {}

  ISkillSelector.prototype.required = {
    skills: Array,
    age: Number
  };

  ISkillSelector.prototype.initialize = function() {
    this._skill_index = 0;
    return this._last_switch_age = this.age;
  };

  ISkillSelector.prototype._keyWaitEnough = function() {
    return this.age - this._last_switch_age > 0.3 * app.fps;
  };

  ISkillSelector.prototype._updateKeyWait = function() {
    return this._last_switch_age = this.age;
  };

  ISkillSelector.prototype.switchNextSkill = function() {
    if (this._keyWaitEnough()) {
      this._updateKeyWait();
      if (this._skill_index + 1 < this.skills.length) {
        return this._skill_index += 1;
      } else {
        return this._skill_index = 0;
      }
    }
  };

  ISkillSelector.prototype.switchPrevSkill = function() {
    if (this._skill_index - 1 >= 0) {
      return this._skill_index -= 1;
    } else {
      return this._skill_index = this.skills.length - 1;
    }
  };

  ISkillSelector.prototype.selected_skill = function() {
    return this.skills[this._skill_index];
  };

  ISkillSelector.prototype.fire = function(e) {
    return this.selected_skill().exec(e.x, e.y);
  };

  return ISkillSelector;

})();
