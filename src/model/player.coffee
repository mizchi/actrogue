_module_ 'App.Model', (App, Model)->
  {abs, sin, cos, atan2} = Math

  class @Player extends @Entity
    defaults: ->
      _.extend super,
        move_speed: 0.5

    initialize: =>
      App.game.on 'enterframe', =>
        {up,down,right,left,w,a,s,d} = App.input
        if up or w    then @moveBy 0, -@move_speed
        if down or s  then @moveBy 0, +@move_speed
        if right or d then @moveBy +@move_speed, 0
        if left or a  then @moveBy -@move_speed, 0

      @on 'click_left', ({x, y}) =>
        @registerEvent =>
          App.game.objectList.add new Model.Bullet
            x: @x
            y: @y
            rad: atan2(y - @y, x - @x)

    moveBy: (dx, dy)->
      @x += dx
      @y += dy

