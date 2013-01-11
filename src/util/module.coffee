root =
  if window? then window
  else if global? then global
  else this

root._module_ = (ns, f) =>
  context = root
  hist = []
  for name in ns.split('.')
    unless context[name]?
      context[name] = {}
    context = context[name]
    hist.push context
  f.apply context, hist