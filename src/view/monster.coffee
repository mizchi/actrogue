_module_ "App.View", (App, View) ->
  class @Monster extends View.BindGroup
    constructor: (@model) ->
      super
      @draw()

    draw: ->
      @addChild new App.Object.Circle 0, 0, 20, "red"

