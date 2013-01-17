class App.Entity.Monster extends App.Entity.Mover
  passable: false
  constructor: ->
    super
    @destination = null
    mixin @, App.Entity.IStatus
    @on 'hit', @hit

  onDead: -> # TODO
  hit: ({other}) =>
    @damage(2)
    if @isDead()
      _.each @parentNode?.childNodes, (i) =>
        if i.group_id is other.group_id
          i.gainExp?(1)
      @remove()
