_module_ "App.View", (App, View) ->
  class @Player extends enchant.Group
    constructor: ->
      super
      @model = App.game.player
      View.bindPosition(@, @model)
      @draw()

    draw: ->
      @addChild new App.Object.Circle 0, 0, 8
