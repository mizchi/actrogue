class App.UI.MiniMap extends enchant.Group
  WALL = 1
  PASSABLE = 0

  inner_size = 2

  constructor: (objectBoard) ->
    @map = objectBoard.map
    @cell_x = @map.cell_x
    @cell_y = @map.cell_y

    super @cell_x * inner_size, @cell_y * inner_size
    @minimap = @map.createMiniMapSprite()
    @addChild @minimap
    @width = @minimap.width
    @height = @minimap.height

    @avatar = new Label('.')
    @avatar.color= 'blue'
    @addChild @avatar
    @on 'enterframe' , @enterframe

  enterframe: =>
    @avatar.x = ~~(app.player.x/@map.cell_size) * inner_size - 2
    @avatar.y = ~~(app.player.y/@map.cell_size) * inner_size - 10

