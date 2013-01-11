_module_ "App.View", (App, View) ->
  Field = App.Scene.Field

  class @BindGroup extends enchant.Group
    constructor: (model)->
      super
      @x = @model.x
      @y = @model.y
      model.on 'change:x change:y', =>
        @x = model.x
        @y = model.y

  class @Bullet extends View.BindGroup
    constructor: (@model)->
      super
      @draw()

    draw: ->
      @addChild new App.Object.Circle(0,0,10, 'black', 'stroke')
