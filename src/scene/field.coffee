_module_ "App.Scene", (App, Scene) ->
  class ObjectBoard extends enchant.Group
    constructor: (@objectList) ->
      super
      @x += App.instance.width/2
      @y += App.instance.height/2
      Scene.Field.board = @
      @setupMap()

      @objectList.on 'add', (model) =>
        if model instanceof App.Model.Bullet
          @addChild new App.View.Bullet(model)

        else if model instanceof App.Model.Monster
          @addChild new App.View.Monster(model)

      @objectList.on 'remove', (model) =>
        p 'remove', model.cid
        target = _.find @childNodes, (node) => node.model is model
        target?.remove()

    setupMap: ->
      map_renderer = new App.View.Map()
      @addChild map_renderer

    registerCamera: (view) ->
      view.model.on 'change:x change:y', (model) =>
        @x = App.instance.width/2 - model.x * App.VIEW_SCALE
        @y = App.instance.height/2 - model.y * App.VIEW_SCALE

  class @Field extends enchant.Scene
    @board = null
    constructor: ->
      super
      @game = App.game

      @setupBoard()
      @setupPlayer()
      @setupMouse()

      @on 'enterframe', =>
        @game.trigger 'enterframe'

      @on 'touchstart', (e) =>
        x = @player.x + @mouse.x - App.instance.width/2
        y = @player.y + @mouse.y - App.instance.height/2

        @player.model.trigger 'click_left',
          x: x/App.VIEW_SCALE
          y: y/App.VIEW_SCALE

      @on 'touchend', (e) =>
      @on 'touchmove', (e) =>

      @game.spawn()

    setupPlayer: ->
      @player = new App.View.Player(0, 0)
      @board.addChild @player
      @board.registerCamera(@player)

    setupBoard: ->
      @board = new ObjectBoard @game.objectList
      @addChild @board

    setupMouse: ->
      @mouse = new App.View.Mouse(10)
      @addChild @mouse
