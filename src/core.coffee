class App.Core extends enchant.Core
  constructor: ->
    super
    window.app = @
    @fps = 30
    @keybind('W'.charCodeAt(0), 'w')
    @keybind('A'.charCodeAt(0), 'a')
    @keybind('S'.charCodeAt(0), 's')
    @keybind('D'.charCodeAt(0), 'd')
    @keybind('E'.charCodeAt(0), 'e')
    @keybind('Q'.charCodeAt(0), 'q')
    @preload ["img/chara0.png"]

    @onload = ->
      @pushScene new App.Scene.Field

    @start()

