Dianthus.Views.LoopComposeInstruments = Backbone.View.extend({

  template: JST['loop/instruments'],

  render: function() {
    var rendered = this.template();
    this.$el.html(rendered);
    return this;
  }

});