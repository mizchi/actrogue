class App.Skill.MultiShot extends App.Skill.Base
  exec: (x, y) ->
    num = 10
    for i in [1..3]
      blur_x = 4*(9*Math.random()-4)
      blur_y = 4*(9*Math.random()-4)
      move_speed = 16 - Math.random() * 8
      bullet = new App.Entity.Bullet
        rad: Math.atan2(y - @actor.y + blur_y, x - @actor.x + blur_x)
        move_speed: move_speed
        x: @actor.x
        y: @actor.y
        group_id: @group_id
      @actor.parentNode.addChild bullet
