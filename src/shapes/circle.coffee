class App.Entity.Circle extends enchant.Sprite
  constructor: (x, y, @size, @color= 'black', @style='fill')->
    super
    @width = @size
    @height = @size
    @x -= @width/2
    @y -= @height/2
    @draw()

  draw: ->
    surface = new enchant.Surface(@size, @size)
    @g = surface.context
    @g.beginPath()
    @g.fillStyle = @color
    @g.strokeStyle = @color
    @g.arc(@size/2, @size/2, @size/2, 0, Math.PI*2, true)
    if @style is 'fill' then @g.fill()
    if @style is 'stroke' then @g.stroke()
    @image = surface
