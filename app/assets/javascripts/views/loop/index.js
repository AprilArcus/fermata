Dianthus.Views.LoopsIndex = Backbone.CompositeView.extend({

  template: JST['loop/index'],

  tagName: 'li',

  className: 'loop-index',

  initialize: function (options) {
    this.author = options.author;
    var _this = this;
    this.collection.each (function(loop) {
      _this.addLoop(loop);
    });
    this.listenTo(this.collection, 'add', this.addLoop);
  },

  addLoop: function(loop) {
    var selector = '.loops-list';
    var view = new Dianthus.Views.LoopItem( {model: loop} );
    this.addSubview(selector, view);
    this.listenTo(view, 'remove', this.removeSubview.bind(selector, this));
  },

  events: { 'click #new-loop': 'new' },

  new: function() {
    Backbone.history.navigate('#/loops/new');
  },

  render: function() {
    var rendered = this.template( {loops: this.collection,
                                   author: this.author} );
    this.$el.html(rendered);
    this.attachSubviews();
    if (this.author === Dianthus.currentUser) {
      this.$('.loops-list').append(
        '<li><button class="btn btn-default" id="new-loop">New</button></li>'
      );
    }
    return this;
  }

});