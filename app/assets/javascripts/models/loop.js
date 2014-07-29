Dianthus.Models.Loop = Backbone.Model.extend({

  urlRoot: '/api/loops',

  parse: function(response) {
    response.time_slices = JSON.parse(response.time_slices);
    return response;
  },

  defaults: function() {
    return {time_slices: this.emptyLoop(),
            key: 'C',
            mode: 'MAJOR',
            instrument: 0,
            color: '#f8f8f8'}; // TODO: fetch default bgcolor from bootstrap
                               // theme variable.
  },

  toJSON: function() {
    var payload = Backbone.Model.prototype.toJSON.apply(this, arguments);
    payload.time_slices = JSON.stringify(this.get('time_slices'));
    return payload;
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