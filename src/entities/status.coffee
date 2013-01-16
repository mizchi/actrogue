class App.Entity.DamageLabel extends enchant.Label
  constructor:(text, x, y, color = 'red') ->
    super
    @x = x
    @y = y
    @addDiffByOther()

    @lifetime = 1
    @color = color
    @on 'enterframe', @enterframe

  addDiffByOther: ->
    _.each @parentNode?.childNodes, (node) =>
      if node instanceof DamageLabel
        if Math.abs(node.x - @x) < 8 and Math.abs(node.y - @y) < 8
          p 'add diff'
          @x += 8
          @y += 8

  enterframe: =>
    progress = @age/(app.fps * @lifetime)
    if progress < 1
      @y -= 0.5
      @opacity = 1 - progress
    else
      @remove()

class App.Entity.IStatus
  @required:
    max_hp: Number
    parentNode: enchant.Node

  initialize: ->
    @hp = @max_hp

  damage: (point) ->
    @hp = Math.max @hp - point, 0
    color =
      if @ instanceof App.Entity.Player then 'purple'
      else 'red'
    @parentNode?.addChild new App.Entity.DamageLabel "#{point}",
      @x + 8, @y, color

  isDead: -> @hp <= 0
  isAlive: -> not @isDead()

