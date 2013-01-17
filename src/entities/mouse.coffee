class App.Entity.Mouse extends App.Entity.Mover
  constructor:->
    @move_speed = 0
    @sight_range = 0
    super

  draw: ->
    @addChild new App.Entity.Circle 0, 0, 8, 'green', 'stroke'

  enterframe: ->
    @x = MouseEvent.offsetX
    @y = MouseEvent.offsetY
    @alt = MouseEvent.altKey
    @shift = MouseEvent.shiftKey

