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
  constructor: ->
    super
    @group_id = App.Entity.GroupId.Player
    @move_speed = 6
    @skills = [
      new App.Skill.SingleShot(@)
      new App.Skill.MultiShot(@)
    ]
    mixin @, App.Entity.ISkillSelector
    @on 'fire', @fire

  draw: ->
    @addChild new App.Entity.Circle 0, 0, 8

  enterframe: =>
    if app.input.up or app.input.w
      @go 0, -@move_speed
    else if app.input.down or app.input.s
      @go 0, +@move_speed

    if app.input.right or app.input.d
      @go +@move_speed, 0
    else if app.input.left or app.input.a
      @go -@move_speed, 0

    if app.input.e
      @switchNextSkill()
      p @_skill_index
    else if app.input.q
      @switchPrevSkill()
      p @_skill_index

    @parentNode.x = app.width/2 - @x
    @parentNode.y = app.height/2 - @y

