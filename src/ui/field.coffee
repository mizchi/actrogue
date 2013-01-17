class HPLabel extends App.UI.Dom
  constructor: (@player) ->
    super()
    @css
      color: 'white'

    @width = app.width * 1
    @height = app.height * 0.1
    @backgroundColor = 'black'
    @$el = $(@_element)
    @on 'enterframe', @enterframe

    @template = Handlebars.compile """
      <div>
        Lv:<span style='color:red'>{{player.lv}}</span>
        ({{player.exp}}/{{next_level_exp}})
        HP:{{player.hp}}/{{player.max_hp}}
        STR:{{player.status.str}} INT:{{player.status.int}} DEX: {{player.status.dex}}
      </div>
      <div> {{skill.constructor.name}} Lv.{{skill.lv}} </div>
    """

  enterframe: =>
    # skill = p.selected_skill()
    skill = @player.selected_skill()
    @text = @template
      player: @player
      skill: @player.selected_skill()
      next_level_exp: @player.next_level_exp()

    skills =
      for skill in @player.skills
        p.constructor.name

class App.UI.Main extends enchant.DomLayer
  constructor: (@player) ->
    super
    @x = 0
    @y = 0
    hp_label = new HPLabel @player
    hp_label.x = 0
    hp_label.y = app.height - hp_label.height
    @addChild hp_label

