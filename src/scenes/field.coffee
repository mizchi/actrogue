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
    @on 'enterframe', @enterframe

  addPlayer: ->
    @player = new App.Entity.Player
    {x, y} = @map.getRandomPssable()
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
    if items.length < 30
      {x, y} = @map.getRandomPssable()
      add_monster = =>
        nx = x + Math.random() * @map.cell_size
        ny = y + Math.random() * @map.cell_size
        unless @map.isWall(nx, ny)
          monster = new App.Entity.Monster
          monster.x = nx
          monster.y = ny
          @addChild monster
        else
          add_monster()

      for i in [1..3]
        add_monster()

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
