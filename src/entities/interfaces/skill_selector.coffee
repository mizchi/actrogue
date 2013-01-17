class App.Entity.ISkillSelector
  required:
    skills: Array
    age: Number

  initialize: ->
    @_skill_index = 0
    @_last_switch_age = @age

  _keyWaitEnough: ->
    @age - @_last_switch_age > 0.3*app.fps

  _updateKeyWait: ->
    @_last_switch_age = @age

  switchNextSkill: ->
    if @_keyWaitEnough()
      @_updateKeyWait()

      if @_skill_index + 1 < @skills.length
        @_skill_index += 1
      else
        @_skill_index = 0

  switchPrevSkill: ->
    if @_skill_index - 1 >= 0
      @_skill_index -= 1
    else
      @_skill_index = @skills.length - 1

  selected_skill: -> @skills[@_skill_index]

  fire: (e) ->
    @selected_skill().exec(e.x, e.y)

