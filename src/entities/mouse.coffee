class App.Entity.Mouse extends App.Entity.Mover
  draw: ->
    @addChild new App.Entity.Circle 0, 0, 8, 'green', 'stroke'

  enterframe: ->
    @x = MouseEvent.offsetX
    @y = MouseEvent.offsetY
    @alt = MouseEvent.altKey
    @shift = MouseEvent.shiftKey

