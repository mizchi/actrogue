class App.Entity.Player extends App.Entity.Mover
  passable: false

  constructor: ->
    @move_speed = 6
    @sight_range = 1200
    super
    @group_id = App.Entity.GroupId.Player
    @skills = [
      new App.Skill.MultiShot(@)
      new App.Skill.SingleShot(@)
    ]

    mixin @, App.Entity.ISkillSelector
    @on 'fire', @fire

    @max_hp = 10

    @exp = 0
    @lv = 1
    mixin @, App.Entity.IStatus, App.Entity.ILeveler
    mixin @, App.IStoraged
    @load 'player'

  onLoad: (obj) ->
    if obj is null
      p 'player initialize'
      @save 'player',
        lv: 1
        exp: 0
        status:
          str: 5
          int: 5
          dex: 5
        skills: [
          {
            skill_name: 'MultiShot'
            lv: 1
          }
        ]
      @load 'player'
    else
      @lv = obj.lv
      @exp = obj.exp
      @status = obj.status
      p @

  savePlayData: ->
    @save 'player',
      lv: @lv
      exp: 0
      status:
        str: @status.str
        int: @status.int
        dex: @status.dex
      skills: [
        {
          skill_name: 'MultiShot'
          lv: 1
        }
      ]

  next_level_exp: ->
    @lv * 10

  onLevelUp: ->
    p 'level up'
    @hp = @max_hp
    @savePlayData()

  onDead: ->
    @parentNode.popPlayer()
    @hp = @max_hp

  draw: ->
    @sprite = new PlayerSprite
    @width = @sprite.width
    @height = @sprite.height
    @addChild @sprite

  enterframe: =>
    if app.input.b
      tx = @x + Math.cos(@direction) * 200
      ty = @y + Math.sin(@direction) * 200
      @fire x:tx, y:ty

    nx = 0
    ny = 0

    if app.input.up or app.input.w
      ny = -1
    else if app.input.down or app.input.s
      ny = +1
    if app.input.right or app.input.d
      nx += 1
    else if app.input.left or app.input.a
      nx -= 1
    nx *= @move_speed
    ny *= @move_speed

    @go nx, ny
    if nx or ny
      @sprite.update nx, ny
      @update_direction nx, ny

    if app.input.e
      @switchNextSkill()
    else if app.input.q
      @switchPrevSkill()

    @parentNode.x = app.width/2 - @x
    @parentNode.y = app.height/2 - @y

class App.IStoraged
  @required:
    lv: Number
    exp: Number
    onLoad: Function # (obj) ->

  initialize: ->
    @_storage = window.localStorage

  save: (name, obj) ->
    @_storage[name] = JSON.stringify obj

  load: (name) ->
    obj = @_storage[name]
    if obj? then @onLoad JSON.parse obj
    else @onLoad null

class PlayerSprite extends App.Entity.UditorSprite
  constructor: ->
    super 'img/Data/CharaChip/[Chara]Civilian_Male_A.png'
    @state_count = 0

  update: (x, y) ->
    index = 1
    prefix = @row *
      if x and y
        index += 3
        if x < 0 and y > 0 then 0
        else if x > 0 and y > 0 then 1
        else if x < 0 and y < 0 then 2
        else if x > 0 and y < 0 then 3
      else
        if y > 0 then 0
        else if x < 0 then 1
        else if x > 0 then 2
        else if y < 0 then 3
    index +=
      switch ~~(@state_count/5)%4
        when 0 then 0
        when 1 then +1
        when 2 then 0
        when 3 then -1

    # 前回から更新されたか
    if prefix isnt @last_prefix
      @state_count = 0
    else
      @state_count++
    @last_prefix = prefix
    @frame = prefix + index
