Dianthus.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$el = options.$el;
  },

  routes: {
    '': 'root',
    'loops/new': 'loopCreate',
    'loops/:id/edit': 'loopUpdate',
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
    $('input[name="key"][value="C"]').click();
    $('input[name="mode"][value="MAJOR"]').click();
  },

  loopUpdate: function(id) {
    var loop = new Dianthus.Models.Loop({id: id});
    var router = this;
    loop.fetch({success: function() {
        var loopComposeFormView = new Dianthus.Views.LoopComposeForm({model: loop});
        router._swapView(loopComposeFormView);
        $('input[name="key"][value="' + loop.get('key') + '"]').click();
        $('input[name="mode"][value="' + loop.get('mode') + '"]').click();
      }
    });
  },

  verseCreate: function() {
    var verse = new Dianthus.Models.Verse().save({}, {
      success: function(model, response, options) {
        Backbone.history.navigate('#/verses/' + model.id + '/edit', {trigger: true});
      }
    });
  },

  verseUpdate: function(id) {
    var verse = new Dianthus.Models.Verse({id: id});
    var router = this;
    verse.fetch({success: function() {
      var verseFormView = new Dianthus.Views.VerseComposeForm({ model: verse });
      router._swapView(verseFormView);
      $('input[name="key"][value="' + verse.get('key') + '"]').click();
      $('input[name="mode"][value="' + verse.get('mode') + '"]').click();
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