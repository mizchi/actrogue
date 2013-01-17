class App.Entity.ILeveler
  @required:
    lv: Number
    exp: Number
    next_level_exp: Function
    onLevelUp: Function

  gainExp: (point) ->
    @exp += point
    if @next_level_exp() <= @exp
      @lv += 1
      @exp = 0
      @onLevelUp()


