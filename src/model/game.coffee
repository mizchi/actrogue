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
    defaults: ->
      x: 0
      y: 0

    constructor: ->
      super
      @cnt = 0
      App.game.on 'enterframe', =>
        @cnt++

  class @Bullet extends @Entity
    defaults: ->
      _.extend super,
        rad: 0
        move_speed: 10

    constructor: ({rad}) ->
      super
      @x_speed = ~~(cos(rad) * @move_speed)
      @y_speed = ~~(sin(rad) * @move_speed)

    initialize: ->
      App.game.on 'enterframe', =>
        @x = @x + @x_speed
        @y = @y + @y_speed

  class @Player extends @Entity
    defaults: ->
      _.extend super,
        move_speed: 10

    initialize: =>
      App.game.on 'enterframe', =>
        {up,down,right,left,w,a,s,d} = App.input
        if up or w    then @moveBy 0, -@move_speed
        if down or s  then @moveBy 0, +@move_speed
        if right or d then @moveBy +@move_speed, 0
        if left or a  then @moveBy -@move_speed, 0

      @on 'click_left', ({x, y}) =>
        bullet_model = new Model.Bullet
          x: @x
          y: @y
          rad: atan2(y - @y, x - @x)
        bullet = new App.View.Bullet(bullet_model)
        App.Scene.Field.board.addChild bullet

    moveBy: (dx, dy)->
      @x += dx
      @y += dy

  class ObjectCollection extends Backbone.Collection
    model: Model.Entity

  class @Game extends Backbone.Model
    constructor: ->
      super
      App.game = @
      Game.input = App.instance.input
      @player = new Model.Player
      @objects = new ObjectCollection []
