_module_ "App.View", (App, View) ->
  class @BindGroup extends enchant.Group
    constructor: (model)->
      super
      @x = model.x
      @y = model.y
      model.on 'change:x change:y', =>
        @x = model.x
        @y = model.y
