_module_ 'App.Model', (App, Model)->
  class @Base extends Backbone.Model
    constructor: ->
      super
      _.each @attributes, (value, key) =>
        Object.defineProperty @, key,
          get : () => @get key
          set : (val) => @set key, val

  class @Entity extends @Base
    defaults: ->
      x: 0
      y: 0

    constructor: ->
      super
      @cnt = 0
      @floor = App.Model.currentFloor()
      @objectList = @floor.objectList
      @floor.on 'enterframe', @enterframe

    enterframe: =>
      @cnt++

    destroy: =>
      @floor.off('enterframe', @enterframe)
      @floor.off null, null, @
      @off()
      delete @floor
      delete @objectList
      delete @x_speed
      delete @y_speed
      delete @cnt

    registerEvent: (f) ->
      @floor.once 'enterframe', -> f()
