class App.UI.Menu extends enchant.DomLayer
  constructor: (@player) ->
    super
    @x = 0
    @y = 0
    hp_label = new HPLabel @player
    hp_label.x = 0
    hp_label.y = app.height - hp_label.height
    @backgroundColor = 'black'
    @addChild hp_label
