Dianthus.Views.LoopComposeForm = Backbone.CompositeView.extend({

  initialize: function() {
    var composer = new Dianthus.Views.LoopCompose({model: this.model});
    this.addSubview('#Dianthus-Views-LoopCompose-Target', composer);
  },

  id: 'Dianthus-Views-LoopComposeForm',

  events: {'submit form': 'submit'},

  submit: function() {
    event.preventDefault();
    var formData = $(event.target).serializeJSON();
    var loop = this.model;
    loop.save(formData.loop,
            { patch: !loop.isNew(),
              success: function() {
                Dianthus.currentUser.loops().add(loop, {merge: true});
                Backbone.history.navigate('#', {trigger: true});
              }
            });
  },

  template: JST['loop/form'],

  render: function() {
    var rendered = this.template( {loop: this.model} );
    this.$el.html(rendered);
    this.attachSubviews();
    return this;
  }

});