class App.Entity.IBasicAI
  @required:
    move_speed: Number
    sight_range: Number
    group_id: Number
    setDestination: Function

  initialize: ->
    @mode = 'idle'

  guess: =>
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

  setRandomDestination: ->
    @setDestination(
      @x + (Math.random() - 0.5) * @sight_range,
      @y + (Math.random() - 0.5) * @sight_range)

