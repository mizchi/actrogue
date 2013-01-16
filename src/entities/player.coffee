class App.Entity.ISkillSelector
  required:
    skills: Array
    age: Number

  initialize: ->
    @_skill_index = 0
    @_last_switch_age = @age

  _keyWaitEnough: ->
    @age - @_last_switch_age > 0.3*app.fps

  _updateKeyWait: ->
    @_last_switch_age = @age

  switchNextSkill: ->
    if @_keyWaitEnough()
      @_updateKeyWait()

      if @_skill_index + 1 < @skills.length
        @_skill_index += 1
      else
        @_skill_index = 0

  switchPrevSkill: ->
    if @_skill_index - 1 >= 0
      @_skill_index -= 1
    else
      @_skill_index = @skills.length - 1

  _selectedSkill: -> @skills[@_skill_index]

  fire: (e) ->
    @_selectedSkill().exec(e.x, e.y)

class App.Entity.Player extends App.Entity.Mover
  passable: false

  constructor: ->
    super
    @group_id = App.Entity.GroupId.Player
    @move_speed = 6
    @sight_range = 10
    @skills = [
      new App.Skill.MultiShot(@)
      new App.Skill.SingleShot(@)
    ]
    mixin @, App.Entity.ISkillSelector
    @on 'fire', @fire


  draw: ->
    @sprite = new PlayerSprite
    @addChild @sprite

  enterframe: =>
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
    @sprite.update nx, ny

    if app.input.e
      @switchNextSkill()
    else if app.input.q
      @switchPrevSkill()

    @parentNode.x = app.width/2 - @x
    @parentNode.y = app.height/2 - @y

class PlayerSprite extends enchant.Sprite
  constructor: ->
    super 32,32
    @row = 3

    @image = app.assets['img/char/player.png']
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
      # @frame = @age % 3
        # switch @frame
        #   when 0 then 1
        #   when 1 then 2
        #   when 2 then 1

  #   @on 'enterframe', @enterframe

  # enterframe: =>
