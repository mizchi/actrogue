_module_ 'App.Model', (App, Model)->
  {abs, sin, cos, atan2} = Math

  class @Bullet extends @Entity
    defaults: ->
      _.extend super,
        rad: 0
        move_speed: 1
        size: 0.3

    constructor: ({rad}) ->
      super
      @x_speed = cos(rad) * @move_speed
      @y_speed = sin(rad) * @move_speed

    initialize: ->
      @objectList = App.game.objectList

      App.game.on 'enterframe', =>
        # 時間消滅
        if @isExpired()
          @registerEvent =>
            App.game.objectList.remove(@)
          return

        # 当たり判定
        t = @objectList.find (model) =>
          (model instanceof App.Model.Monster) and @within model
        if t?
          t?.trigger 'hit', @
          @objectList.remove @

        # 直進
        @x = @x + @x_speed
        @y = @y + @y_speed


    within: (other) ->
      abs(@x - other.x) < 1 and abs(@y - other.y) < 1

    isExpired: ->
      @cnt > App.instance.fps * 0.5
