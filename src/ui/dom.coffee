class App.UI.Dom extends enchant.Label
  css: (params) ->
    for key, val of params
      @_style[key] = val
