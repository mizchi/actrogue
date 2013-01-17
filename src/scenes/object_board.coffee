class App.Scene.ObjectBoard extends enchant.Group
  constructor: (@player) ->
    super
    @createMap()
    @addPlayer()
    @on 'enterframe', @enterframe

  addPlayer: ->
    @addChild @player
    @popPlayer()

  popPlayer: ->
    {x, y} = @map.getRandomPssable()
    @player.x = x
    @player.y = y

  createMap: ->
    @map = new App.Entity.Map 64, 64
    @addChild @map

    {x, y} = @map.getRandomPssable()
    stairup = new App.Entity.StairwayUp
    stairup.x = x
    stairup.y = y
    @addChild stairup

    {x, y} = @map.getRandomPssable()
    stairdown = new App.Entity.StairwayDown
    stairdown.x = x
    stairdown.y = y
    @addChild stairdown

  enterframe: ->
    @spawn()

  spawn: =>
    canditates = [
      App.Entity.Slime
      App.Entity.Goblin
    ]

    items = _.select @childNodes, (i) -> i instanceof App.Entity.Monster
    if items.length < 90
      {x, y} = @map.getRandomPssable()
      add_monster = =>
        nx = x + Math.random() * @map.cell_size
        ny = y + Math.random() * @map.cell_size
        unless @map.isWall(nx, ny)
          Monster = canditates[~~(Math.random() * canditates.length)]
          monster = new Monster
          monster.x = nx
          monster.y = ny
          @addChild monster
        else
          add_monster()
      for i in [1..3]
        add_monster()
