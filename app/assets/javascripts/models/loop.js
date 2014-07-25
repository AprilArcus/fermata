Dianthus.Models.Loop = Backbone.Model.extend({

  urlRoot: '/api/loops',

  parse: function(response) {
    this.time_slices = JSON.parse(response.time_slices);
    delete response.time_slices;
    return response;
  },

  defaults: function() {
    return {time_slices: this.emptyLoop()};
  },

  emptyLoop: function() {

    var emptyLoop = [];
    _(16).times(function(t) {
      var timeSlice = [];
      _(15).times(function(n) {
        var note = {velocity: 0, duration: 1};
        timeSlice.push(note);
      });
      emptyLoop.push(timeSlice);
    });
    return emptyLoop;

  }

});