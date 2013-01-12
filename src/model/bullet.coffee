_module_ 'App.Model', ->

  class @Bullet extends @Entity
    defaults: ->
      _.extend super,
        rad: 0
        move_speed: 0.5
        size: 0.3

    constructor: ({rad}) ->
      super
      @x_speed = Math.cos(rad) * @move_speed
      @y_speed = Math.sin(rad) * @move_speed
      @floor.on 'enterframe', @enterframe

    destroy: ->
      super
      delete @x_speed
      delete @y_speed

    enterframe: =>
      if @isExpired()
        @objectList.remove(@)
        @destroy()
        return
      @searchEnemy()

      # 直進
      @x = @x + @x_speed
      @y = @y + @y_speed

    within: (other) ->
      Math.abs(@x - other.x) < 1 and Math.abs(@y - other.y) < 1

    isExpired: ->
      @cnt > App.instance.fps * 0.5

    searchEnemy: ->
      # 当たり判定
      t = @objectList.find (model) =>
        (model instanceof App.Model.Monster) and @within model
      if t?
        t?.trigger 'hit', @
        @objectList.remove @
