class Position
  constructor: (@x, @y) ->


class App.Entity.Monster extends App.Entity.Mover
  passable: false
  constructor: ->
    super
    @destination = null
    @move_speed = 1
    @sight_range = 120
    @group_id = App.Entity.GroupId.Enemy

    @mode = 'idle'
    @on 'hit', @hit

    @max_hp = 10
    mixin @, App.Entity.IStatus

  hit: ({other}) =>
    @damage(2)
    if @isDead()
      _.each @parentNode?.childNodes, (i) =>
        if i.group_id is other.group_id

          p 'gain exp 1 to ', i.group_id
          i.gainExp?(1)
      @remove()

  onDead: -> # TODO

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
        attack_range = 10
        attack_interval = app.fps
        attack_power = 1
        @cnt ?= 0

        enemy_in_range = @find App.Entity.GroupId.Player, attack_range
        if enemy_in_range instanceof App.Entity.Player
          unless @cnt++ % attack_interval
            enemy_in_range.damage(attack_power)
          return

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
    @sprite = new MochiSprite
    @addChild @sprite

  onMove: (x, y) ->
    @sprite.update x, y

class MochiSprite extends enchant.Sprite
  constructor: ->
    super 20,28
    @row = 6
    @image = app.assets['img/char/mochi1.png']
    @x -= @width/2
    @y -= @height/2
    @state_count = 0

  update: (x, y) ->
    prefix = @row *
      if y > 0 then 0
      else if x < 0 then 1
      else if x > 0 then 2
      else if y < 0 then 3

    if prefix isnt @last_prefix
      @state_count = 0
    else
      @state_count++
    @last_prefix = prefix

    index =
      switch ~~(@state_count/5)%4
        when 0 then 1
        when 1 then 2
        when 2 then 1
        when 3 then 0
    @frame = prefix + index
