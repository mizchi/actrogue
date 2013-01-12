_module_ 'App.Model', (App, Model)->
  class @Monster extends @Entity
    defaults: ->
      _.extend super,
        move_speed: 0.5
        hp: 5

    constructor: ->
      super
      @objectList = @floor.objectList
      @on 'hit', @hit

    hit: (other) =>
      @set hp: @hp - 1
      if @hp <= 0
        @objectList.remove @
      # p 'hit', @cid, @hp


