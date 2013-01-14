class Position
  constructor: (@x, @y) ->

class App.Entity.IHitPoint
  @required:
    max_hp: Number

  initialize: ->
    @hp = @max_hp

  damage: (point) ->
    @hp = Math.max @hp - point, 0

  isDead: -> @hp <= 0
  isAlive: -> not @isDead()

class App.Entity.Monster extends App.Entity.Mover
  constructor: ->
    super
    @destination = null
    @move_speed = 3
    @group_id = App.Entity.GroupId.Enemy

    @mode = 'idle'
    @on 'hit', @hit

    @max_hp = 10
    mixin @, App.Entity.IHitPoint

  hit: ({other}) =>
    @damage(2)
    if @isDead() then @remove()

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
