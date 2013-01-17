class IStairway
  @required:
    x: Number
    y: Number
    exec_range: Number
    event_type: String

  searchAndExec: =>
    _.each @parentNode?.childNodes, (i) =>
      if i instanceof App.Entity.Player
        if Math.abs(i.x - @x) < @exec_range
          if Math.abs(i.y - @y) < @exec_range
            e = new enchant.Event @event_type
            @scene.dispatchEvent e

class App.Entity.StairwayUp extends enchant.Group
  constructor: ->
    super
    l = new Label('<')
    @addChild l
    @event_type = 'stairup'
    @exec_range = 10
    mixin @, IStairway
    @on 'enterframe', @searchAndExec

class App.Entity.StairwayDown extends enchant.Group
  constructor: ->
    super
    l = new Label('>')
    @addChild l
    @event_type = 'stairdown'
    @exec_range = 10
    mixin @, IStairway
    @on 'enterframe', @searchAndExec

