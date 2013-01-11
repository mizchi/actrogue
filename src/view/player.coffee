_module_ "App.View", (App) ->
  class @Player extends enchant.Group
    constructor: ->
      super
      @model = App.game.player
      App.View.bindPosition(@, @model)
      @draw()

    draw: ->
      @addChild new App.Object.Circle 0, 0, 8
