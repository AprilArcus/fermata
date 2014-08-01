Dianthus.Views.UserShow = Backbone.View.extend({

  id: 'home',

  template: JST['user/show'],

  render: function() {
    var rendered = this.template( {user: this.model} );
    this.$el.html(rendered);
    return this;
  }

});