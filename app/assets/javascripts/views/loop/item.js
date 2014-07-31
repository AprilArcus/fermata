Dianthus.Views.LoopItem = Backbone.View.extend({
  template: JST['loop/item'],

  tagName: 'li',

  className: 'btn-group loop',

  attributes: function() {
    return {'data-loop-id': this.model.id};
  },

  events: { 'click .destroy': 'destroy',
            'click .edit': 'edit' },

  destroy: function() {
    var _this = this;
    this.model.destroy( {success: function() {
        _this.trigger('remove', _this);
      }
    });
  },

  edit: function() {
    Backbone.history.navigate('#/loops/'+this.model.id+'/edit');
  },

  render: function() {
    var rendered = this.template( {loop: this.model} );
    this.$el.html(rendered);
    return this;
  }
});