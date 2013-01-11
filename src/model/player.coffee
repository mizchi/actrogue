_module_ 'App.Model', (App, Model)->
  {abs, sin, cos, atan2} = Math

  class @Player extends @Entity
    defaults: ->
      _.extend super,
        move_speed: 0.2

    initialize: =>
      floor = App.Model.currentFloor()
      floor.on 'enterframe', =>
        {up,down,right,left,w,a,s,d} = App.input
        if up or w    then @moveBy 0, -@move_speed
        if down or s  then @moveBy 0, +@move_speed
        if right or d then @moveBy +@move_speed, 0
        if left or a  then @moveBy -@move_speed, 0

      @on 'click_left', ({x, y}) =>
        floor = App.Model.currentFloor()
        @registerEvent =>
          floor.objectList.add new Model.Bullet
            x: @x
            y: @y
            rad: atan2(y - @y, x - @x)

    constructor: ->
      super
      @x = 3
      @y = 3

    moveBy: (dx, dy)->
      layer = App.Scene.Field.map.layers[0]
      nx = @x + dx
      ny = @y + dy
      if layer.isPassable(nx, ny)
        @x = nx
        @y = ny
