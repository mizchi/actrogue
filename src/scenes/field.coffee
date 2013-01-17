class App.Scene.Menu extends enchant.Scene
  constructor: (player, key) ->
    super 640, 480
    @addChild new Label '#############'
    @on 'enterframe', @enterframe

  enterframe: =>
    if app.input.c and app.isKeyFree('c')
      app.popScene()

class App.Scene.Field extends enchant.Scene
  constructor: (@player) ->
    super

    @initializeBoard()
    @mouse = new App.Entity.Mouse
    @addChild @mouse

    @ui = new App.UI.Main @player
    @addChild @ui

    dom = new enchant.DomLayer
    @addChild dom
    @on 'touchstart', @touchstart
    @on 'enterframe', @enterframe

    @on 'stairdown', @nextFloor
    @on 'stairup', @prevFloor

  initializeBoard: ->
    @objectBoard?.remove()
    @objectBoard = new App.Scene.ObjectBoard @player
    @addChild @objectBoard

    @minimap?.remove()
    @minimap = new App.UI.MiniMap @objectBoard
    @minimap.x = app.width - @minimap.width
    @addChild @minimap

  nextFloor: =>
    @initializeBoard()

  prevFloor: =>
    @initializeBoard()

  enterframe: =>
    if app.input.c and app.isKeyFree('c')
      app.pushScene new App.Scene.Menu

    if app.input.i and app.isKeyFree('i')
      @nextFloor()

  touchstart: ->
    e = new enchant.Event "fire"
    e.x = @objectBoard.player.x + @mouse.x - app.width/2
    e.y = @objectBoard.player.y + @mouse.y - app.height/2
    @objectBoard.player.dispatchEvent e
