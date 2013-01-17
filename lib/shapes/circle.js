var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Entity.Circle = (function(_super) {

  __extends(Circle, _super);

  function Circle(x, y, size, color, style) {
    this.size = size;
    this.color = color != null ? color : 'black';
    this.style = style != null ? style : 'fill';
    Circle.__super__.constructor.apply(this, arguments);
    this.width = this.size;
    this.height = this.size;
    this.x -= this.width / 2;
    this.y -= this.height / 2;
    this.draw();
  }

  Circle.prototype.draw = function() {
    var surface;
    surface = new enchant.Surface(this.size, this.size);
    this.g = surface.context;
    this.g.beginPath();
    this.g.fillStyle = this.color;
    this.g.strokeStyle = this.color;
    this.g.arc(this.size / 2, this.size / 2, this.size / 2, 0, Math.PI * 2, true);
    if (this.style === 'fill') {
      this.g.fill();
    }
    if (this.style === 'stroke') {
      this.g.stroke();
    }
    return this.image = surface;
  };

  return Circle;

})(enchant.Sprite);
