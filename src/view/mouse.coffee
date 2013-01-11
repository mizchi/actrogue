_module_ "App.View", (App) ->
  class @Mouse extends enchant.Group
    constructor: (size)->
      super
      @addChild new App.Object.Circle(0,0, size, 'green', 'stroke')
