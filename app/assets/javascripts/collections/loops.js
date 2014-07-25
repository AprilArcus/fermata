Dianthus.Collections.Loops = Backbone.Collection.extend({

  model: Dianthus.Models.Loop,

  initialize: function(models, options){
    this.authorId = options.authorId;
  }

});