class App.Entity.Map extends enchant.Sprite
  WALL = 1
  PASSABLE = 0

  constructor: (@cell_x, @cell_y) ->
    super
    @cell_size = 48

    @tile_size = 16

    @width  = @cell_size * @cell_x
    @height = @cell_size * @cell_y

    p @width, @height

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
        g.fillStyle =
          if val is WALL then '#111'
          else if val is PASSABLE then '#fff'
        g.fillRect x * @cell_size, y * @cell_size, @cell_size, @cell_size
    @image = surface

class ObjectBoard extends enchant.Group
  constructor: (@map) ->
    super
    @createMap()
    @addPlayer()

    # @addChild new Label('0')

    @on 'enterframe', @enterframe

  addPlayer: ->
    @player = new App.Entity.Player

    {x, y} = @map.getRandomPssable()
    p x , y
    @player.x = x
    @player.y = y
    @addChild @player


  createMap: ->
    @map = new App.Entity.Map 32,32
    @addChild @map

  enterframe: ->
    @spawn()

  spawn: =>
    items = _.select @childNodes, (i) -> i instanceof App.Entity.Monster
    if items.length < 10
      monster = new App.Entity.Monster
      monster.x = Math.random() * 100
      monster.y = Math.random() * 100
      @addChild monster

class App.Scene.Field extends enchant.Scene
  constructor: ->
    super
    @objectBoard = new ObjectBoard
    @addChild @objectBoard

    @mouse = new App.Entity.Mouse
    @addChild @mouse
    @on 'touchstart', @touchstart

  touchstart: ->
    e = new enchant.Event "fire"
    e.x = @objectBoard.player.x + @mouse.x - app.width/2
    e.y = @objectBoard.player.y + @mouse.y - app.height/2
    @objectBoard.player.dispatchEvent e
