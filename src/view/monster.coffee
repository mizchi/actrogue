_module_ "App.View", (App, View) ->
  class @Monster extends enchant.Group
    constructor: (@model) ->
      super
      View.bindPosition(@, @model)
      @draw()

    draw: ->
      @addChild new App.Object.Circle 0, 0, 20, "red"

