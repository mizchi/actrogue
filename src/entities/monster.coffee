class Position
  constructor: (@x, @y) ->

class App.Entity.IModalPattern
  @required:
    mode: String

  guess: ->


class App.Entity.Monster extends App.Entity.Mover
  constructor: ->
    super
    @destination = null
    @move_speed = 3
    @group_id = App.Entity.GroupId.Enemy

    @mode = 'idle'

  setRandomDestination: ->
    @setDestination(
      @x + Math.random() * 10 - 5,
      @y + Math.random() * 10 - 5)

  enterframe: =>
    super
    switch @mode
      when "trace" #=> idle
        unless @goAhead()
          target = @find App.Entity.GroupId.Player, 100
          if target
            @setDestination(target.x, target.y)
          else
            @removeDestination()
            @mode = "idle"

      when "wander" #=> trace
        unless @goAhead()
          @mode = "idle"

      when "idle" #=> trace, wander
        target = @find App.Entity.GroupId.Player, 100
        if target
          @mode = "trace"
          @setDestination(target.x, target.y)
        else
          @mode = "wander"
          @setRandomDestination()

  draw: ->
    @addChild new App.Entity.Circle 0, 0, 8, 'red'
