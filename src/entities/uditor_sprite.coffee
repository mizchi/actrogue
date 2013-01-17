class App.Entity.UditorSprite extends enchant.Sprite
  constructor: (chartip_name) ->
    image = app.assets[chartip_name]
    @width = image.width
    @height = image.height
    @row = 6

    super image.width / 6, image.height / 4
    @image = image
