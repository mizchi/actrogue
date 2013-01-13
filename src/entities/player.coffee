class Skill
class MultiShot extends Skill
  constructor: (@actor)->
  exec: (x, y) ->
    for i in [1..100]
      blur_x = i*(9*Math.random()-4)
      blur_y = i*(9*Math.random()-4)
      move_speed = 16 - Math.random() * 8
      bullet = new App.Entity.Bullet
        rad: Math.atan2(y - @actor.y + blur_y, x - @actor.x + blur_x)
        move_speed: move_speed
        x: @actor.x
        y: @actor.y
        group_id: @group_id
      @actor.parentNode.addChild bullet

class App.Entity.IShooter
  @required:
    x: Number
    y: Number
    parentNode: Object

  singleShot: (x, y) ->
    bullet = new App.Entity.Bullet
      rad: Math.atan2(y - @y, x - @x)
      move_speed: 16
      x: @x
      y: @y
      group_id: @group_id
    @parentNode.addChild bullet

  multiShot: (x, y) ->
    for i in [1..100]
      blur_x = i*(9*Math.random()-4)
      blur_y = i*(9*Math.random()-4)
      move_speed = 16 - Math.random() * 8
      bullet = new App.Entity.Bullet
        rad: Math.atan2(y - @y + blur_y, x - @x + blur_x)
        move_speed: move_speed
        x: @x
        y: @y
        group_id: @group_id
      @parentNode.addChild bullet

class App.Entity.ISkillSelector
  required:
    skills: Array

  initialize: ->
    @_skill_index = 0

  switchNextSkill: ->
    @_skill_index +=1

  switchPrevSkill: ->
    @_skill_index -=1

  _selectedSkill: -> @skills[@_skill_index]

  fire: (e) ->
    @_selectedSkill().exec(@, e.x, e.y)

class App.Entity.Player extends App.Entity.Mover
  constructor: ->
    super
    # mixin @, App.Entity.IShooter
    @group_id = App.Entity.GroupId.Player
    @move_speed = 6

    @multi = new MultiShot(@)


    @on 'fire', @fire

  draw: ->
    @addChild new App.Entity.Circle 0, 0, 8

  fire: (e) =>
    @multi.exec(e.x, e.y)

  enterframe: =>
    if app.input.up or app.input.w
      @go 0, -@move_speed
    else if app.input.down or app.input.s
      @go 0, +@move_speed

    if app.input.right or app.input.d
      @go +@move_speed, 0
    else if app.input.left or app.input.a
      @go -@move_speed, 0

    @parentNode.x = app.width/2 - @x
    @parentNode.y = app.height/2 - @y

