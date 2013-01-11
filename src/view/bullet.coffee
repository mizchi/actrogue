_module_ "App.View", (App) ->
  class @Mouse extends enchant.Group
    constructor: ->
      super
      @addChild new App.Object.Circle(0,0, 3, 'black', 'stroke')
      @on 'enterframe', @enterframe

    enterframe: ->
