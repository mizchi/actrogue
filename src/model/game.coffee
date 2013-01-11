_module_ 'App.Model', (App, Model)->

  class @Floor extends Backbone.Model
    constructor: ->
      super
      @player = null
      @objectList = new Model.ObjectList []
      @on 'enterframe', @enterframe

    enterframe: =>
      @spawn()

    spawn: =>
      models = @objectList.select (model) =>
        model instanceof App.Model.Monster

      if models.length < 10
        x = Math.random() * 10
        y = Math.random() * 10
        @objectList.push new App.Model.Monster {x, y}

    join: (@player) ->
      @objectList.add @player

    leave: (player) ->
      @objectList.remove player
      @player = null

  @currentFloor = ->
    App.game.floors[App.game.depth]

  class @Game extends Backbone.Model
    constructor: ->
      super
      App.game = @
      @floors = []
      @floors.push new Model.Floor
      @depth = 0

      @player = new Model.Player
      @currentFloor().join(@player)

    currentFloor: ->
      @floors[@depth]

    @currentFloor: ->
      App.game.floors[App.game.depth]

  class @ObjectList extends Backbone.Collection
    model: Model.Entity
    constructor: ->
      super
