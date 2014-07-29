Dianthus.Models.MeasureLoop = Backbone.Model.extend({

  urlRoot: 'api/measure_loops',

  parse: function(response) {
    this.loop = new Dianthus.Models.Loop(response.loop, {parse: true} );
    delete response.loops;
    return response;
  }

});