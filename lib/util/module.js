var root,
  _this = this;

root = typeof window !== "undefined" && window !== null ? window : typeof global !== "undefined" && global !== null ? global : this;

root._module_ = function(ns, f) {
  var context, hist, name, _i, _len, _ref;
  context = root;
  hist = [];
  _ref = ns.split('.');
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    name = _ref[_i];
    if (context[name] == null) {
      context[name] = {};
    }
    context = context[name];
    hist.push(context);
  }
  return f.apply(context, hist);
};
