_module_ "App.View", (App) ->
  Field = App.Scene.Field

  class @Player extends enchant.Group
    constructor: ->
      super
      @addChild new App.Object.Circle 0, 0, 20

      @model = App.game.player
      @model.on 'change:x change:y', (model) =>
        @x = model.x
        @y = model.y

    shoot: (rad) ->
      Field.board.addChild new App.View.Bullet(@x, @y, rad, 10)

