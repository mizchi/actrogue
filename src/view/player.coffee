_module_ "App.View", (App) ->
  class @Player extends enchant.Group
    constructor: ->
      super
      @addChild new App.Object.Circle 0, 0, 20
      @move_speed = 3
