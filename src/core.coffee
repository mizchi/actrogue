class App.Core extends enchant.Core
  constructor: ->
    super 640, 480
    window.app = @
    @fps = 30
    @keybind('W'.charCodeAt(0), 'w')
    @keybind('A'.charCodeAt(0), 'a')
    @keybind('S'.charCodeAt(0), 's')
    @keybind('D'.charCodeAt(0), 'd')
    @keybind('E'.charCodeAt(0), 'e')
    @keybind('Q'.charCodeAt(0), 'q')

    @preload [
        "img/chara0.png"
        'img/roguetile.gif'
        'img/char/player.png'
        'img/char/mochi1.png'
        'img/map1.png'
    ]

    @onload = =>
      @pushScene new App.Scene.Field

    @start()

