_module_ "App.Scene", (App, Scene) ->
  class @Field extends enchant.Scene
    @board = null
    constructor: ->
      super
      @game = new App.Model.Game

      @setupBoard()
      @setupMap()
      @setupPlayer()
      @setupMouse()

      @on 'enterframe', =>
        @game.trigger 'enterframe'
        @draw()

      @on 'touchstart', (e) =>
        x = @player.x + @mouse.x - App.instance.width/2
        y = @player.y + @mouse.y - App.instance.height/2
        @player.model.trigger 'click_left',
          x: x
          y: y
      @on 'touchend', (e) =>
      @on 'touchmove', (e) =>
        @mouse.x = e.x
        @mouse.y = e.y

      @game.objects.on 'add', (model) =>
        if model instanceof App.Model.Bullet
          @board.addChild new App.View.Bullet(model)

        else if model instanceof App.Model.Monster
          @board.addChild new App.View.Monster(model)

      @game.objects.on 'remove', (model) =>
        for object in @board.childNodes when objects.model is model
          @board.removeChild object

      @game.spawn()


    draw: ->

    setupMap: ->
      map_renderer = new App.View.Map()
      @board.addChild map_renderer

    setupPlayer: ->
      @player = new App.View.Player(0, 0)
      @board.addChild @player
      # カメラ中央合わせ
      @player.model.on 'change:x change:y', (model) =>
        @board.x = App.instance.width/2 - model.x
        @board.y = App.instance.height/2 - model.y

    setupBoard: ->
      @board = new enchant.Group
      @addChild @board
      @board.x += App.instance.width/2
      @board.y += App.instance.height/2
      Scene.Field.board = @board

    setupMouse: ->
      @mouse = new App.View.Mouse(10)
      @addChild @mouse
