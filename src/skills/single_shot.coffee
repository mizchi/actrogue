class App.Skill.SingleShot extends App.Skill.Base
  exec: (x, y) ->
    move_speed = 16
    bullet = new App.Entity.Bullet
      rad: Math.atan2(y - @actor.y, x - @actor.x)
      move_speed: move_speed
      x: @actor.x
      y: @actor.y
      group_id: @group_id
    @actor.parentNode.addChild bullet

