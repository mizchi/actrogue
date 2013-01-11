_module_ "App.View", (App, View) ->
  Field = App.Scene.Field

  class @Player extends View.BindGroup
    constructor: ->
      @model = App.game.player
      super App.game.player
      @draw()

    draw: ->
      @addChild new App.Object.Circle 0, 0, 20

