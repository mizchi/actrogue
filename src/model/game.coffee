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
      speed: 10

    constructor: ({rad}) ->
      super
      @x_speed = ~~(cos(rad) * @speed)
      @y_speed = ~~(sin(rad) * @speed)

    initialize: ->
      App.game.on 'enterframe', =>
        @x = @x + @x_speed
        @y = @y + @y_speed

  class @Player extends @Entity
    defaults:
      x: 0
      y: 0
      move_speed: 10

    initialize: =>
      @on 'click_left', ({x, y}) =>
        bullet_model = new Model.Bullet
          x: @x
          y: @y
          rad: atan2(y - @y, x - @x)
        bullet = new App.View.Bullet(bullet_model)
        App.Scene.Field.board.addChild bullet

  class ObjectCollection extends Backbone.Collection
    model: Model.Entity

  class @Game extends Backbone.Model
    constructor: ->
      super
      App.game = @
      Game.input = App.instance.input
      @player = new Model.Player
      @objects = new ObjectCollection []

      @on 'enterframe', =>
        @move_speed = @player.move_speed
        {up,down,right,left,w,a,s,d} = App.input
        if up or w    then @moveBy 0, -@move_speed
        if down or s  then @moveBy 0, +@move_speed
        if right or d then @moveBy +@move_speed, 0
        if left or a  then @moveBy -@move_speed, 0

    moveBy: (dx, dy)->
      @player.x += dx
      @player.y += dy
