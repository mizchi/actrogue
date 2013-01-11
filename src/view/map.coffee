_module_ "App.View", (App, View) ->
  class @Map extends enchant.Group
    Field = App.Scene.Field
    CELL_SIZE = View.CELL_SIZE

    constructor: ->
      super
      @layers = []
      @layers[0] = new App.Model.Layer
      @render()
      App.Game

    render: ->
      for layer in @layers
        for x in [0...layer.width]
          for y in [0...layer.height]
            tile = layer.at(x,y)
            @drawTile tile

    drawTile: (tile) ->
      color = if tile.passable then '#eee' else '#888'
      @addChild new App.Object.Square(
        tile.x * CELL_SIZE ,tile.y * CELL_SIZE ,
        CELL_SIZE, CELL_SIZE, color
        )
