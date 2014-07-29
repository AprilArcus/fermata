Dianthus.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$el = options.$el;
  },

  routes: {
    '': 'currentUserShow',
    'loops/new': 'loopCreate',
    'loops/:id/edit': 'loopUpdate',
    'measures/:id/edit': 'measureUpdate' //development
  },

  currentUserShow: function() {
    var currentUserShowView = new Dianthus.Views.UserShow({
                                    model: Dianthus.currentUser
                                  });
    this._swapView(currentUserShowView);
  },

  loopCreate: function() {
    var loopComposeView = new Dianthus.Views.LoopComposeForm({
      model: new Dianthus.Models.Loop()
    });
    this._swapView(loopComposeView);
  },

  loopUpdate: function(id) {
    var loopComposeView = new Dianthus.Views.LoopCompose({
      model: Dianthus.currentUser.loops().getOrFetch(id)
    });
    this._swapView(loopComposeView);
  },

  // development
  measureUpdate: function(id) {
    var measure = new Dianthus.Models.Measure({id: id});
    var _this = this;
    measure.fetch({success: function() {
      var measureFormView = new Dianthus.Views.MeasureForm({ model: measure });
      _this._swapView(measureFormView);
      }
    });
    
  },

  _swapView: function(newView) {
    if (this.currentView) this.currentView.remove();
    this.$el.html(newView.render().$el);
    if (newView.swapViewHandler) newView.swapViewHandler();
    this.currentView = newView;
  }


});