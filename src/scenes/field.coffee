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
