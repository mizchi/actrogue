_module_ 'App.Model', (App, Model)->
  class ObjectList extends Backbone.Collection
    model: Model.Entity

  class @Game extends Backbone.Model
    constructor: ->
      super
      App.game = @
      @player = new Model.Player
      @objectList = new ObjectList []
      @spawn()

    spawn: ->
      for i in [0...10]
        x = Math.random() * 10
        y = Math.random() * 10
        @objectList.add new Model.Monster
          x: x
          y: y
