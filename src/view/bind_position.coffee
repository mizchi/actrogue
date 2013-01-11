_module_ "App.View", (App, View) ->

  m2v = (x) -> 16 * x

  @bindPosition = (view, model) ->
    unless model.x? and model.y?
      throw 'not enough interface'

    view.x = m2v model.x
    view.y = m2v model.y
    model.on 'change:x change:y', =>
      view.x = m2v model.x
      view.y = m2v model.y
