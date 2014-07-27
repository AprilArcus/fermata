Dianthus.Views.LoopsIndex = Backbone.CompositeView.extend({

  template: JST['loop/index'],

  initialize: function (options) {
    this.authorId = options.authorId;
    var _this = this;
    this.collection.each (function(loop) {
      _this.addLoop(loop);
    });
    this.listenTo(this.collection, 'add', this.addLoop);
  },

  addLoop: function(loop) {
    var selector = 'ul';
    var view = new Dianthus.Views.LoopItem( {model: loop} );
    this.addSubview(selector, view);
    this.listenTo(view, 'remove', this.removeSubview.bind(selector, this));
  },

  events: { 'click .new': 'new' },

  new: function() {
    Backbone.history.navigate('#/loops/new');
  },

  render: function() {
    var rendered = this.template( {loops: this.collection} );
    this.$el.html(rendered);
    this.attachSubviews();
    return this;
  }

});