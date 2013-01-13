root =
  if window? then window
  else if global? then global
  else this

debug = true
root.extend = (obj, mixin) ->
  obj[name] = method for name, method of mixin
  obj

checkRequired = (ctx, Inf) ->
  for key, type of Inf.required
    val = ctx[key]
    if type is Number and _.isNumber(val) then true
    else if ctx[key] instanceof type or ctx[key] is null
      true
    else
      throw new Error("Invalid Type: #{key}:[#{val}] is not #{type?.name}")

mixin_keywords = ['initialize', 'required']
root.mixin = (ctx, Infs...) ->
  for I in Infs
    for name, method of I.prototype when name not in mixin_keywords
      ctx[name] = method

  for I in Infs
    if I.required? and debug
      checkRequired(ctx, I)
    I::initialize?.apply(ctx)

root.include = (klass, mixin) ->
  extend klass.prototype, mixin

moduleKeywords = ['extended', 'included']
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