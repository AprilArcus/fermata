Dianthus.Models.Verse = Backbone.Model.extend({

  urlRoot: 'api/verses',

  defaults: function() {
    return {measures: this.emptyMeasures(), key: 'C', mode: 'MAJOR'};
  },

  emptyMeasures: function() {
    // is there some good way to get the defaults from rails?
    var measures = [];
    _(4).times(function(i) {
      var measure = new Dianthus.Models.Measure({scale_degree: 0, ord: i});
      measures.push(measure);
    });
    return new Dianthus.Collections.Measures(measures);
  },

  parse: function(response) {
    // this.set('measures', response.measures, { parse: true });
    // delete response.loops;
    // if (response.loops) {
    //   this.loops().set(response.loops, { parse: true });
    //   delete response.loops;
    // }
    // return response;
  }

});