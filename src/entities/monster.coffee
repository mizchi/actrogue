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
  passable: false
  constructor: ->
    super
    @destination = null
    @move_speed = 3
    @sight_range = 50
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
      @x + (Math.random() - 0.5) * @sight_range,
      @y + (Math.random() - 0.5) * @sight_range)

  enterframe: =>
    super
    switch @mode
      when "idle" #=> trace, wander
        target = @findInSight App.Entity.GroupId.Player
        if target
          @mode = "trace"
          @setDestination(target.x, target.y)
        else
          if Math.random() < 1/app.fps
            @mode = "wander"
            @setRandomDestination()

      when "trace" #=> idle
        unless @goAhead()
          target = @findInSight App.Entity.GroupId.Player
          if target
            @setDestination(target.x, target.y)
          else
            @removeDestination()
            @mode = "idle"

      when "wander" #=> trace
        unless @goAhead()
          @mode = "idle"

  draw: ->
    @addChild new App.Entity.Circle 0, 0, 8, 'red'
