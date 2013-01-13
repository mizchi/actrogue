window.MouseEvent = {}
window.onmousemove = (e) -> window.MouseEvent = e

window.App =
  Scene: {}
  Entity: {}
window.app = {}

App.Entity.GroupId =
  Player: 101
  Enemy : 1001

window.onload = ->
  enchant()
  new App.Core(320, 240)

