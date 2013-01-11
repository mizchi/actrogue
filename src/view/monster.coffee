_module_ "App.View", (App) ->

  class @Monster extends enchant.Group
    constructor: (x, y)->
      super
      @x = x
      @y = y
      @addChild new App.Object.Circle 0, 0, 20, "red"
      @on 'enterframe', @enterframe

    enterframe: =>
