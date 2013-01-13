class Position
  constructor: (@x, @y) ->

class App.Entity.Monster extends App.Entity.Mover
  constructor: ->
    super
    @destination = null
    @group_id = App.Entity.GroupId.Enemy

  setRandomDestination: ->
    @setDestination(
      @x + Math.random() * 10 - 5,
      @y + Math.random() * 10 - 5)

  enterframe: =>
    super
    unless @hasDestination()
      @setRandomDestination()
    else
      success = @goAhead()
      unless success then @removeDestination()

  draw: ->
    @addChild new App.Entity.Circle 0, 0, 8, 'red'

