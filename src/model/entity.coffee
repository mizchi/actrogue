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

      floor = App.Model.currentFloor()
      floor.on 'enterframe', =>
        @cnt++

    registerEvent: (f) ->
      floor = App.Model.currentFloor()
      floor.once 'enterframe', -> f()
