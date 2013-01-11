_module_ "App.View", (App, View) ->
  @bindPosition = (view, model) ->
    unless model.x? and model.y?
      throw 'not enough interface'

    view.x = model.x
    view.y = model.y
    model.on 'change:x change:y', =>
      view.x = model.x
      view.y = model.y
