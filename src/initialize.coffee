# define ['underscore', 'enchantjs'], ->
#   console.log 'affda'

window.onload = ->
  define (require) ->
    enchant = require 'enchantjs'
    enchant()
    game = new App.Core(320, 240)

window.Mouse = {}
window.onmousemove = (e) -> window.Mouse = e
