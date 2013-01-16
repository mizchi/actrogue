class App.Entity.Map extends enchant.Sprite
  WALL = 1
  PASSABLE = 0

  constructor: (@cell_x, @cell_y) ->
    super
    @cell_size = 48
    @tile_size = 16
    @maptip = app.assets['img/map1.png']

    @width  = @cell_size * @cell_x
    @height = @cell_size * @cell_y
    @setMaze()
    @draw()

  setMaze: ->
    @hitmap =
      for x in [0...@cell_x]
         for y in [0...@cell_y]
            null

    map = new ROT.Map.Uniform(@cell_x, @cell_y)
    map.create (x, y, val) =>
      @hitmap[x][y] = val

  isWall: (x, y) ->
    !! @hitmap[~~(y / @cell_size)][~~(x / @cell_size)]

  passable: (x, y) -> not @isWall x, y

  getRandomPssable: ->
    x = ~~(Math.random() * @cell_x)
    y = ~~(Math.random() * @cell_y)
    if @hitmap[y][x] is PASSABLE
      x: (x + 0.5) * @cell_size
      y: (y + 0.5) * @cell_size
    else @getRandomPssable()

  draw: ->
    surface = new enchant.Surface(@width, @height)
    g = surface.context
    g.beginPath()
    for row, y in @hitmap
      for val, x in row
        if PASSABLE is val
          @drawTip g, x, y, 1, 0
        else
          @drawTip g, x, y, 1, 5
    @image = surface

  TILE_SIZE = 16
  drawTip: (g, x, y, tile_x, tile_y) ->
    g.drawImage @maptip._element,
      tile_x * TILE_SIZE, tile_y * TILE_SIZE, TILE_SIZE, TILE_SIZE,
        x * @cell_size, y * @cell_size, @cell_size, @cell_size

