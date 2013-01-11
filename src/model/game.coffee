_module_ 'App.Model', (App, Model)->
  {abs, sin, cos, atan2} = Math
  class @Base extends Backbone.Model
    constructor: ->
      super
      _.each @attributes, (value, key) =>
        Object.defineProperty @, key,
          get : () => @get key
          set : (val) => @set key, val

  class @Entity extends @Base
    defaults:
      x: 0
      y: 0
      cnt: 0

  class @Bullet extends @Entity
    defaults:
      x: 0
      y: 0
      rad: 0
      speed: 1

    initialize: ({rad, speed}) ->
      @x_speed = ~~(cos(rad) * 10)
      @y_speed = ~~(sin(rad) * 10)

      @on 'enterframe', =>
        @x += @x_speed
        @y += @y_speed

  class @Player extends @Entity
    defaults:
      x: 0
      y: 0
      move_speed: 10

    initialize: =>
      @on 'click_left', ({x, y}) =>
        radForMouse = Math.atan2(y - @y, x - @x)
        bullet = new Model.Bullet
          x: @x
          y: @y
          rad: radForMouse
        bulletView = new App.View.Bullet(@x, @y, radForMouse, 10)
        App.Scene.Field.board.addChild bulletView

  class ObjectCollection extends Backbone.Collection
    model: Model.Entity

  @instance = null
  class @Game extends Backbone.Model
    constructor: ->
      super
      Model.instance = @
      App.game = @
      Game.input = App.instance.input
      @player = new Model.Player

      @objects = new ObjectCollection []

    enterframe: ->
      @move_speed = @player.move_speed
      {up,down,right,left,w,a,s,d} = App.input
      if up or w   then @moveBy 0, -@move_speed
      if down or s then @moveBy 0, +@move_speed
      if right or d then @moveBy +@move_speed, 0
      if left or a then @moveBy -@move_speed, 0

    moveBy: (dx, dy)->
      p dx, dy
      @player.x += dx
      @player.y += dy
