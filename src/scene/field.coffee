_module_ "App.Scene", (App, Scene) ->
  class ObjectBoard extends enchant.Group
    constructor: (@objectList) ->
      super
      @x += App.instance.width/2
      @y += App.instance.height/2
      Scene.Field.board = @

      @objectList.on 'add', (model) =>
        if model instanceof App.Model.Bullet
          @addChild new App.View.Bullet(model)
        else if model instanceof App.Model.Monster
          @addChild new App.View.Monster(model)

      @objectList.on 'remove', (model) =>
        target = _.find @childNodes, (node) => node.model is model
        if target?
          target.remove()
          target.model?.off()
          App.game.off(null, null, target)

    registerCamera: (view) ->
      do fixCamera = =>
        @x = App.instance.width/2 - view.model.x * App.VIEW_SCALE
        @y = App.instance.height/2 - view.model.y * App.VIEW_SCALE

      view.model.on 'change:x change:y', (model) =>
        fixCamera()

  class @Field extends enchant.Scene
    @board = null
    constructor: ->
      super
      @game = App.game

      @setupBoard()
      @setupMap()
      @setupPlayer()
      @setupMouse()

      @on 'enterframe', =>
        floor = App.Model.currentFloor()
        floor.trigger 'enterframe'

      @on 'touchstart', (e) =>
        x = @player.x + @mouse.x - App.instance.width/2
        y = @player.y + @mouse.y - App.instance.height/2

        @player.model.trigger 'click_left',
          x: x/App.VIEW_SCALE
          y: y/App.VIEW_SCALE

      @on 'touchend', (e) =>
      @on 'touchmove', (e) =>

    setupMap: ->
      map = new App.View.Map()
      Scene.Field.map = map
      @board.addChild map

    setupPlayer: ->
      @player = new App.View.Player
      @board.addChild @player
      @board.registerCamera(@player)

    setupBoard: ->
      floor = App.Model.currentFloor()
      @board = new ObjectBoard floor.objectList
      @addChild @board

    setupMouse: ->
      @mouse = new App.View.Mouse(10)
      @addChild @mouse
