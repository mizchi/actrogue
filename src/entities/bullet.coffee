class App.Entity.Bullet extends App.Entity.Mover
  passable: true
  constructor: ({x, y, rad, move_speed, group_id}) ->
    super
    @x = x
    @y = y
    @move_speed = move_speed ? 8
    @lifetime = 0.8
    @group_id = group_id ? 0

    range = @getRange()
    dx = @x + Math.cos(rad) * range
    dy = @y + Math.sin(rad) * range
    @setDestination dx, dy

  getRange: ->
    @move_speed * @lifetime * app.fps

  draw: ->
    circle = new App.Entity.Circle 0, 0, 4, 'black', 'stroke'
    @addChild circle

  isDead: -> @age/app.fps > @lifetime

  enterframe: =>
    super
    unless @goAhead() then @remove()
    if @isDead() then @remove()

    target = @find(App.Entity.GroupId.Enemy, 8)
    if target
      event = new enchant.Event("hit")
      event.other = @
      target.dispatchEvent event
      @remove()
