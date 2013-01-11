_module_ "App.Scene", (App) ->

  class @Field extends enchant.Scene
    constructor: ->
      super
      @board = new enchant.Group
      @addChild @board

      @board.x += App.instance.width/2
      @board.y += App.instance.height/2

      @player = new App.View.Player(0, 0)
      @board.addChild @player

      @spawnMonster()
      @on 'enterframe', @enterframe

      @mouse = new App.View.Mouse(10)

      @addChild @mouse

      @on 'touchstart', (e) =>
        @mouse.x = e.x
        @mouse.y = e.y

      @on 'touchend', (e) =>

      @on 'touchmove', (e) =>
        @mouse.x = e.x
        @mouse.y = e.y

    spawnMonster: ->
      for i in [0...10]
        x = Math.random() * App.instance.width
        y = Math.random() * App.instance.height
        @board.addChild new App.View.Monster(~~x, ~~y)

    enterframe: =>
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
