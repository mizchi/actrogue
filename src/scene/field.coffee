_module_ "App.Scene", (App) ->
  class @Field extends enchant.Scene
    @board = null
    constructor: ->
      super
      @game = new App.Model.Game

      # boardインスタンスの初期化
      @setupBoard()

      # map
      map_renderer = new App.View.Map()
      @board.addChild map_renderer

      @setupPlayer()
      @spawnMonster()
      @setupMouse()

      @on 'enterframe', @enterframe
      @on 'touchstart', (e) =>
        x = @player.x + @mouse.y - App.instance.height/2
        y = @player.y + @mouse.x - App.instance.width/2

        radForMouse = Math.atan2(
          @mouse.y - App.instance.height/2,
          @mouse.x - App.instance.width/2
        )

        @player.shoot(radForMouse)
        @player.dispatchEvent("click" ,x, y)

      @on 'touchend', (e) =>
      @on 'touchmove', (e) =>
        @mouse.x = e.x
        @mouse.y = e.y

    setupPlayer: ->
      @player = new App.View.Player(0, 0)
      @board.addChild @player

    setupBoard: ->
      @board = new enchant.Group
      @addChild @board
      App.Scene.Field.board = @board

      @board.x += App.instance.width/2
      @board.y += App.instance.height/2

    setupMouse: ->
      @mouse = new App.View.Mouse(10)
      @addChild @mouse

    spawnMonster: ->
      for i in [0...10]
        x = Math.random() * App.instance.width
        y = Math.random() * App.instance.height

        @board.addChild new App.View.Monster(~~x, ~~y)

    enterframe: =>
      @game.enterframe()
      @move_speed = @player.move_speed
      {up,down,right,left,w,a,s,d} = App.input
      if up or w   then @moveBy 0, -@move_speed
      if down or s then @moveBy 0, +@move_speed
      if right or d then @moveBy +@move_speed, 0
      if left or a then @moveBy -@move_speed, 0
      @mouse.x = Mouse.offsetX
      @mouse.y = Mouse.offsetY

    moveBy: (dx, dy)->
      @board.x -= dx
      @board.y -= dy
      @player.x += dx
      @player.y += dy

