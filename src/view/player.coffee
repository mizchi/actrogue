_module_ "App.View", (App) ->
  class @Player extends enchant.Group
    constructor: ->
      super
      @addChild new App.Object.Circle 0, 0, 20
      @move_speed = 3
      @on 'enterframe', =>
        if App.input.up    then @moveBy 0, -@move_speed
        if App.input.down  then @moveBy 0, +@move_speed
        if App.input.right then @moveBy +@move_speed, 0
        if App.input.left  then @moveBy -@move_speed, 0

    moveBy: (dx, dy)->
      @x = @x + dx
      @y = @y + dy
