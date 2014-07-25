Dianthus.Collections.Loops = Backbone.Collection.extend({

  initialize: function(models, options){
    this.authorId = options.authorId;
  },

  model: Dianthus.Models.Loop
});