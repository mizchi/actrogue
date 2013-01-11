_module_ "App.View", (App) ->
  Field = App.Scene.Field
  {abs, sin, cos, atan2} = Math

  class @Bullet extends enchant.Group
    size: 10
    constructor: (x, y, rad, @speed, count = 1)->
      super
      @x = x
      @y = y
      @x_speed = ~~(cos(rad) * 10)
      @y_speed = ~~(sin(rad) * 10)

      @on 'enterframe', =>
        @x += @x_speed
        @y += @y_speed
        for enemy in @enemies()
          if @within(enemy) then enemy.remove()

        if @isExpired() then @remove()

      @draw()

    isExpired: ->
      @age > App.instance.fps * 1

    enemies: ->
      _.filter Field.board.childNodes, (n) => n instanceof App.View.Monster

    within: (other) ->
      abs(@x - other.x) < @size and abs(@y - other.y) < @size

    draw: ->
      @addChild new App.Object.Circle(0,0,10, 'black', 'stroke')
