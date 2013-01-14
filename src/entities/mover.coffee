class App.Entity.ISearcher
  @required:
    group_id: Number

  find: (group_id, range) ->
    return false unless @parentNode?
    _.find @parentNode.childNodes, (node) =>
      if node?.group_id?
        if node.group_id is group_id
          node.group_id \
          and Math.abs(@x - node.x) < range \
          and Math.abs(@y - node.y) < range
      else
        false

class App.Entity.IDrawer
  draw: ->
  drawByFrame: ->

class App.Entity.ITracer
  @required:
    move_speed: Number
    x: Number
    y: Number
    direction: Number

  initialize: ->
    @destination = null
    @x_speed = 0
    @y_speed = 0

  goAhead: ->
    @go @x_speed, @y_speed, @destination.x, @destination.y

  setDestination: (x, y) ->
    @destination = new Position(x, y)
    @direction = Math.atan2(@destination.y - @y, @destination.x - @x)
    @x_speed = Math.cos(@direction) * @move_speed
    @y_speed = Math.sin(@direction) * @move_speed

  removeDestination: ->
    @destination = null
    @x_speed = 0
    @y_speed = 0

  hasDestination: -> @destination?

  go: (dx, dy, max_x, max_y) ->
    nx = @_until @x, @x+dx, max_x
    ny = @_until @y, @y+dy, max_y
    if nx is @x and ny is @y then return false

    @x = nx
    @y = ny
    return true

  _until: (value, next, dest) ->
    if not dest? or (next is dest) then return next
    r = (if value < next then 1 else -1)
    r * (if r * next < r * dest then r * next else r * dest)


class App.Entity.Mover extends enchant.Group
  constructor: ->
    super
    @group_id = 0
    @direction = 0
    @move_speed = 1 # 移動速度
    @on 'enterframe', @enterframe
    @draw()

    mixin @,
      App.Entity.ITracer,
      App.Entity.ISearcher,
      App.Entity.IDrawer

  enterframe: =>
    @drawByFrame()

