_module_ 'App.Model', (App, Model)->
  {abs, sin, cos, atan2} = Math

  class @Player extends @Entity
    defaults: ->
      _.extend super,
        move_speed: 0.2

    constructor: ->
      super
      @x = 3
      @y = 3

    initialize: =>
      @floor = App.Model.currentFloor()
      @floor.on 'enterframe', @enterframe
      @on 'click_left', @click_left

    enterframe: =>
      if App.input.up    or App.input.w then @moveBy 0, -@move_speed
      else if App.input.down  or App.input.s then @moveBy 0, +@move_speed
      if App.input.right or App.input.d then @moveBy +@move_speed, 0
      else if App.input.left  or App.input.a then @moveBy -@move_speed, 0

    click_left: ({x, y}) =>
      # @registerEvent =>
        @floor.objectList.add new Model.Bullet
          x: @x
          y: @y
          rad: atan2(y - @y, x - @x)

    moveBy: (dx, dy)->
      layer = App.Scene.Field.map.layers[0]
      nx = @x + dx
      ny = @y + dy
      if layer.isPassable(nx, ny)
        @x = nx
        @y = ny
