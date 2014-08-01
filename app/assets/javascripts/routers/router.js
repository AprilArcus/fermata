Dianthus.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$el = options.$el;
  },

  routes: {
    '': 'root',
    'loops/new': 'loopCreate',
    'loops/:id/edit': 'loopUpdate',
    // 'measures/:id/edit': 'measureUpdate', //development
    'verses/new': 'verseCreate',
    'verses/:id/edit': 'verseUpdate'
  },

  root: function() {
    if (!Dianthus.currentUser) {
      Backbone.history.navigate('#/loops/new', {trigger: true});
    } else {
      var currentUserShowView = new Dianthus.Views.UserShow({ model: Dianthus.currentUser });
      this._swapView(currentUserShowView);
    }
  },

  loopCreate: function() {
    var loopComposeView = new Dianthus.Views.LoopComposeForm({
      model: new Dianthus.Models.Loop()
    });
    this._swapView(loopComposeView);
  },

  loopUpdate: function(id) {
    var loop = new Dianthus.Models.Loop({id: id});
    var router = this;
    loop.fetch({success: function() {
        var loopComposeFormView = new Dianthus.Views.LoopComposeForm({model: loop});
        router._swapView(loopComposeFormView);
      }
    });
  },

  // development
  // measureUpdate: function(id) {
  //   var measure = new Dianthus.Models.Measure({id: id});
  //   var router = this;
  //   measure.fetch({success: function() {
  //     var measureFormView = new Dianthus.Views.MeasureForm({ model: measure });
  //     router._swapView(measureFormView);
  //     }
  //   });
  // },

  verseCreate: function() {
    var verseFormView = new Dianthus.Views.VerseForm({
      model: new Dianthus.Models.Verse()
    });
    this._swapView(verseFormView);
  },

  verseUpdate: function(id) {
    var verse = new Dianthus.Models.Verse({id: id});
    var router = this;
    verse.fetch({success: function() {
      var verseFormView = new Dianthus.Views.VerseForm({ model: verse });
      router._swapView(verseFormView);
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