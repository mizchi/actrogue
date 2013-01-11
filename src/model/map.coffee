_module_ "App.Model", (App) ->
  class @Tile
    constructor: (@x, @y) ->

  class @Layer
    constructor: ->
      @width = 12
      @height = 8
      @tiles =
        for i in [0...(@width * @height)]
          x = i%@width
          y = ~~(i/@width)
          new App.Model.Tile(x, y)

    at: (x, y) ->
      return null if x > @row
      @tiles[x + y * @width]

