Dianthus.Views.MeasureLoopItem = Backbone.View.extend({
  template: JST['measure_loop/item'],

  tagName: 'li',

  className: function () {return 'btn-group measure-loop ' + Dianthus.getForegroundColor(this.model.loop.escape('color'));},

  attributes: function() {
    return {'data-measure-loop-id': this.model.id};
  },

  events: { 'click .destroy': 'destroy' },

  destroy: function() {
    var _this = this;
    this.model.destroy( {success: function() {
        _this.trigger('remove', _this);
      }
    });
  },

  render: function() {
    var rendered = this.template( {measure_loop: this.model} );
    this.$el.html(rendered);
    return this;
  }
});