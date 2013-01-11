window.MouseEvent = {}
window.onmousemove = (e) -> window.MouseEvent = e

_module_ "App", (App) ->
  App.game = null     # App.Model.Game
  App.instance = null # App.Main
  App.VIEW_SCALE = 16

_module_ "App.View", (App, View) ->
  @CELL_SIZE = 16

window.onload = ->
  enchant()
  new App.Core(320, 240)

