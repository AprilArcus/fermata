Dianthus.Views.UserShow = Backbone.CompositeView.extend({

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);

    // my loops
    var loopsIndexView = new Dianthus.Views.LoopsIndex({
                               collection: this.model.loops(),
                               author: this.mode.get('email')
                             });
    this.addSubview('#my-loops', loopsIndexView);
    // new loop button
    // friends loops
  },

  id: 'users',

  template: JST['user/show'],

  render: function() {
    var rendered = this.template( {user: this.model} );
    this.$el.html(rendered);
    this.attachSubviews();
    return this;
  }

});