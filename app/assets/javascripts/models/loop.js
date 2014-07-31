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
            color: _(['#e74c3c', // red, darkly @brand-danger
                      '#f87121', // orange
                      '#f39c12', // yellow, darkly @brand-warning
                      '#65bf3b', // green
                      '#00bc8c', // teal, darkly @brand-success
                      '#3498db', // blue, darkly @brand-info
                      '#cd50f6', // purple
                      '#fe2d81'  // nicole h/t mella https://www.flickr.com/photos/hyperborea/2720901732
                      ]).sample()};
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