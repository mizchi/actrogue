_module_ "App.View", (App, View) ->
  Field = App.Scene.Field
  class @Bullet extends View.BindGroup
    constructor: (@model)->
      super
      @draw()

    draw: ->
      @addChild new App.Object.Circle(0,0,10, 'black', 'stroke')
