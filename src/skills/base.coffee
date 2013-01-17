class App.Skill.Base
  constructor: (@actor, @lv=1)->
  fire: (x, y) ->
  center: ->
    [
      @actor.x + @actor.width/2
      @actor.y + @actor.height/2
    ]

