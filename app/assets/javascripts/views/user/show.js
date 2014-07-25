Dianthus.Views.UserShow = Backbone.CompositeView.extend({

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);

    // my loops
    var loopsIndexView = new Dianthus.Views.LoopsIndex({
                               collection: this.model.loops()
                             });
    this.addSubview(loopsIndexView, '#my-loops');

    // friends loops
  },

  template: JST['user/show'],

  render: function() {
    var rendered = this.template( {user: this.model} );
    this.$el.html(rendered);
    this.attachSubviews();
    return this;
  }

});