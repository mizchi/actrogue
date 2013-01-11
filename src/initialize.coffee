window.onload = ->
  enchant()
  game = new App.Core(320, 240)

window.Mouse = {}
window.onmousemove = (e) -> window.Mouse = e
