class App.Entity.DamageLabel extends enchant.Label
  constructor:(text, x, y, color = 'red') ->
    super
    @x = x
    @y = y
    @addDiffByOther()
    @lifetime = 1
    @color = color

    @tl
      .moveBy(0, -15, app.fps * 1)
      .and()
      .fadeOut(app.fps * 1)
      .removeFromScene()

  addDiffByOther: ->
    _.each @parentNode?.childNodes, (node) =>
      if node instanceof DamageLabel
        if Math.abs(node.x - @x) < 8 and Math.abs(node.y - @y) < 8
          p 'add diff'
          @x += 8
          @y += 8
