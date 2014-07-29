Dianthus.Models.Measure = Backbone.Model.extend({
  urlRoot: 'api/measures',

  parse: function(response) {
    this.measure_loops = new Dianthus.Collections.MeasureLoops(response.measure_loops, {parse: true});
    delete response.measure_loops;
    return response;
  }

});