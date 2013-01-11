_module_ 'App.Model', (App, Model)->
  class ObjectList extends Backbone.Collection
    model: Model.Entity

  class @Game extends Backbone.Model
    constructor: ->
      super
      App.game = @
      Game.input = App.instance.input
      @player = new Model.Player
      @objects = new ObjectList []

    spawn: ->
      for i in [0...10]
        x = Math.random() * App.instance.width
        y = Math.random() * App.instance.height
        @objects.add new Model.Monster
          x: ~~x
          y: ~~y
