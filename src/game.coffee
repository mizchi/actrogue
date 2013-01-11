_module_ "App", (App) ->
  @instance = null
  @input = null

  class @Core extends enchant.Core
    constructor: ->
      super
      App.instance = @
      App.input = @input
      @fps = 30

      @keybind('W'.charCodeAt(0), 'w')
      @keybind('A'.charCodeAt(0), 'a')
      @keybind('S'.charCodeAt(0), 's')
      @keybind('D'.charCodeAt(0), 'd')

      @onload = ->
        field = new App.Scene.Field
        @pushScene field

      @start()
