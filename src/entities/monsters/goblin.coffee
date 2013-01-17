class App.Entity.Goblin extends App.Entity.Monster
  constructor: ->
    @move_speed = 4
    @sight_range = 220
    @max_hp = 20

    super
    @group_id = App.Entity.GroupId.Enemy

    mixin @, App.Entity.IBasicAI

  onDead: -> # TODO

  enterframe: =>
    super
    @guess()

  draw: ->
    @sprite = new GoblinSprite
    @width = @sprite.width
    @height = @sprite.height
    @addChild @sprite

  onMove: (x, y) ->
    @sprite.update x, y


class GoblinSprite extends App.Entity.UditorSprite
  constructor: ->
    super 'img/Data/CharaChip/[Monster]Goblin1_tapis.png'
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
