Dianthus.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$el = options.$el;
  },

  routes: {
    '': 'currentUserShow',
    'loops/new': 'loopCreate',
    'loops/:id/edit': 'loopUpdate'
  },

  currentUserShow: function() {
    var currentUserShowView = new Dianthus.Views.UserShow({
                                    model: Dianthus.currentUser
                                  });
    this._swapView(currentUserShowView);
  },

  loopCreate: function() {
    var loopComposeView = new Dianthus.Views.LoopCompose({
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

  _swapView: function(newView) {
    if (this.currentView) this.currentView.remove();
    this.$el.html(newView.render().$el);
    this.currentView = newView;
  }


});