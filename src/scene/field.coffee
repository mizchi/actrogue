_module_ "App.Scene", (App) ->
  class @Field extends enchant.Scene
    constructor: ->
      super
      @addChild new App.View.Player(0, 0)
      @monsters = []
      for i in [0...9]
        x = Math.random() * App.instance.width
        y = Math.random() * App.instance.height
        @addChild new App.View.Monster(~~x, ~~y)
