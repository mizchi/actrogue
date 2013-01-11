_module_ 'App.Model', (App, Model)->
  class @Monster extends @Entity
    defaults: ->
      _.extend super,
        move_speed: 10

    initialize: =>
      App.game.on 'enterframe', =>

