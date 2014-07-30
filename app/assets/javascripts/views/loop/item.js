Dianthus.Views.LoopItem = Backbone.View.extend({
  template: JST['loop/item'],

  tagName: 'li',

  className: 'btn-group loop',

  events: { 'click .destroy': 'destroy' },

  destroy: function() {
    var _this = this;
    this.model.destroy( {success: function() {
        _this.trigger('remove', _this);
      }
    });
  },

  render: function() {
    var rendered = this.template( {loop: this.model} );
    this.$el.html(rendered);
    return this;
  }
});