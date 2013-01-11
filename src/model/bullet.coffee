_module_ 'App.Model', (App, Model)->
  {abs, sin, cos, atan2} = Math

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
        if @isExpired()
          @registerEvent ->
            App.game.objects.remove(@)

    within: (other) ->
      abs(@x - other.x) < @size and abs(@y - other.y) < @size

    isExpired: ->
      @cnt > App.instance.fps * 1
