_module_ "App.View", (App) ->
  Field = App.Scene.Field
  {abs, sin, cos, atan2} = Math

  class @Bullet extends enchant.Group
    size: 10
    constructor: (@model)->
      super
      @x = @model.x
      @y = @model.y

      @model.on 'change:x change:y', =>
        @x = @model.x
        @y = @model.y
      @draw()

    isExpired: ->
      @age > App.instance.fps * 1

    within: (other) ->
      abs(@x - other.x) < @size and abs(@y - other.y) < @size

    draw: ->
      @addChild new App.Object.Circle(0,0,10, 'black', 'stroke')
