_module_ "App", (App) ->
  @instance = null
  @input = null

  class @Core extends enchant.Core
    constructor: ->
      super
      App.instance = @
      App.input = @input
      @fps = 30

      @onload = ->
        field = new App.Scene.Field
        @pushScene field

      @start()
