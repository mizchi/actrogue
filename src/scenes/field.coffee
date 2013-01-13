class ObjectBoard extends enchant.Group
  constructor: ->
    super

    @addChild new Label('0')
    @player = new App.Entity.Player
    @addChild @player
    @on 'enterframe', @enterframe

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
