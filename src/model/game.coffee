_module_ 'App.Model', (App, Game)->
  class Player
    constructor: ->
      @x = 0
      @y = 0

  class @Game
    constructor: ->
      Game.input = App.instance.input

    enterframe: ->

