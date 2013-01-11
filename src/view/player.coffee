_module_ "App.View", (App) ->
  Field = App.Scene.Field

  class @Player extends enchant.Group
    constructor: ->
      super
      @addChild new App.Object.Circle 0, 0, 20
      @move_speed = 3

    shoot: (rad) ->
      Field.board.addChild new App.View.Bullet(@x, @y, rad, 10)

    shotgun: ->

