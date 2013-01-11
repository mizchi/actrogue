root =
  if window? then window
  else if global? then global
  else this

root.extend = (obj, mixin) ->
  obj[name] = method for name, method of mixin
  obj

root.include = (klass, mixin) ->
  extend klass.prototype, mixin

class root.Module
  @extend: (obj) ->
    for key, value of obj when key not in moduleKeywords
      @[key] = value

    obj.extended?.apply(@)
    this

  @include: (obj) ->
    for key, value of obj when key not in moduleKeywords
      # Assign properties to the prototype
      @::[key] = value

    obj.included?.apply(@)
    this