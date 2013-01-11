_module_ "App.Object", (App) ->
  class Base extends enchant.Sprite
    constructor: ->
      super

    fixOffset: ->
      @x -= @width/2
      @y -= @height/2

  class @Circle extends Base
    constructor: (x, y, size, color= 'black')->
      super
      @width = size
      @height = size

      @fixOffset()

      surface = new enchant.Surface(size, size)

      @g = surface.context
      @g.fillStyle = color

      @g.beginPath()
      @g.arc(size/2, size/2, size/2, 0, Math.PI*2, true)
      @g.fill()

      @image = surface

  class @Square extends Base
    constructor: (x, y, width, height, color= 'black')->
      super
      @width = width
      @height = height
      @fixOffset()

      surface = new enchant.Surface(@width, @height)
      g = surface.context
      @image = surface

      g.fillStyle = color
      g.fillRect(0, 0, @width, @height)


