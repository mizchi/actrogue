class App.Entity.ISearcher
  @required:
    group_id: Number
    sight_range: Number

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

  findInSight: (group_id) ->
    @find(group_id, @sight_range)

class App.Entity.IDrawer
  draw: ->
  drawByFrame: ->

class App.Entity.ITracer
  @required:
    move_speed: Number
    x: Number
    y: Number
    direction: Number
    onMove: Function

  initialize: ->
    @destination = null
    @x_speed = 0
    @y_speed = 0

  goAhead: ->
    @onMove @x_speed, @y_speed
    @go @x_speed, @y_speed, @destination.x, @destination.y

  update_direction: (dx, dy) ->
    @direction = Math.atan2(dy, dx)

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

    # 動いていない
    if nx is @x and ny is @y then return false

    # 自分自身が貫通属性でない
    unless @passable
      # エンティティに接触
      inhibitor = _.find @parentNode?.childNodes, (i) =>
        # 自分自身なら無視
        if i is @ then return false
        # 通行不可属性なら true
        if i.passable is false
          if Math.abs(nx - i.x) < 8
            if Math.abs(ny - i.y) < 8
              return true
        false
      if inhibitor? then return false

    # マップに接触
    # TODO
    if @parentNode?.map.isWall(nx, ny)
      return false
    else
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
    @sight_range = 50
    @on 'enterframe', @enterframe
    @draw()
    mixin @,
      App.Entity.ITracer,
      App.Entity.ISearcher,
      App.Entity.IDrawer

  onMove: ->

  enterframe: =>
    @drawByFrame()

