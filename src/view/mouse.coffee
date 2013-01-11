_module_ "App.View", (App) ->
  class @Mouse extends enchant.Group
    constructor: (size)->
      super
      @addChild new App.Object.Circle(0,0, size, 'green', 'stroke')
      @x = App.instance.width/2
      @y = App.instance.height/2
