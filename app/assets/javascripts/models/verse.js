Dianthus.Models.Verse = Backbone.Model.extend({

  urlRoot: 'api/verses',

  // defaults: function() {
  //   return {key: 'C', mode: 'MAJOR'};
  // },

  // // emptyMeasures: function() {
  // //   // is there some good way to get the defaults from rails?
  // //   var measures = [];
  // //   _(4).times(function(i) {
  // //     var measure = new Dianthus.Models.Measure({scale_degree: 0, ord: i}, {parse: true});
  // //     measures.push(measure);
  // //   });
  // //   return new Dianthus.Collections.Measures(measures);
  // // },

  parse: function(response) {
    this.measures = new Dianthus.Collections.Measures(response.measures, {parse: true});
    delete response.measures;
    return response;
  }

});