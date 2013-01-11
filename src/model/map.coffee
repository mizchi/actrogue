_module_ "App.Model", (App) ->
  class @Map
    constructor: ->
      super
      @layers = []
      @layers[0] = new App.Model.Layer
      @render()

    bottom: -> @layers[0]

  class @Tile
    constructor: (@x, @y) ->
      @passable = true

  class @Layer
    constructor: ->
      @width = 30
      @height = 24
      @tiles =
        for i in [0...(@width * @height)]
          x = i%@width
          y = ~~(i/@width)
          tile = new App.Model.Tile(x, y)
          tile.passable =
            if x in [0, @width-1] or y in [0, @height-1]
              false
            else
              true
          tile

    at: (x, y) ->
      return null if x > @row
      @tiles[x + y * @width]

    isPassable: (x, y) ->
      tile = @at(~~x, ~~y)
      tile.passable

    getRandomPassble: ->
      x = @width * Math.random()
      y = @height * Math.random()
      if @isPassable x, y
        [x, y]
      else
        @getRandomPassble()
