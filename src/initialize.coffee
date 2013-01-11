window.onload = ->
  enchant()
  game = new App.Core(320, 240)
window.MouseEvent = {}
window.onmousemove = (e) -> window.MouseEvent = e
