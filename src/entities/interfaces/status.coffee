class App.Entity.IStatus
  @required:
    max_hp: Number
    parentNode: enchant.Node
    onDead: Function

  initialize: ->
    @hp = @max_hp

  damage: (point) ->
    @hp = Math.max @hp - point, 0
    @checkAlive()

    color =
      if @ instanceof App.Entity.Player then 'purple'
      else 'red'
    @parentNode?.addChild new App.Entity.DamageLabel "#{point}",
      @x + 8, @y, color

  checkAlive: ->
    if @isDead() then @onDead()

  isDead: -> @hp <= 0
  isAlive: -> not @isDead()
