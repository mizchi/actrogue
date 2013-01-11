window.onload = ->
  enchant()
  game = new App.Core(320, 240)
window.MouseEvent = {}
window.onmousemove = (e) -> window.MouseEvent = e
_module_ "App", (App) ->
  App.game = null     # App.Model.Game
  App.instance = null # App.Main
