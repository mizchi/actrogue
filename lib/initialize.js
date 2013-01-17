
window.MouseEvent = {};

window.onmousemove = function(e) {
  return window.MouseEvent = e;
};

window.App = {
  Scene: {},
  Entity: {},
  Skill: {},
  UI: {}
};

window.app = {};

App.Entity.GroupId = {
  Player: 101,
  Enemy: 1001
};

window.onload = function() {
  enchant();
  return new App.Core(320, 240);
};
