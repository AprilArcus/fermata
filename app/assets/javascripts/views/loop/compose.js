Dianthus.Views.LoopCompose = Backbone.View.extend({

  events: { 'click .note': click },

  click: function (event) {

  },

  render: function() {
    // well I'd call myself more of a DOM pro than a pro domme...

    var el = this.el;

    el.id = 'composer';
    _(16).times(function(t) {
      var timeInterval = document.createElement('div');
      timeInterval.className = 'time-interval';
      timeInterval.id = 'time-interval-' + t;

      var note, noteType;
      for (var n = 14; n >= 0; n--) {
        note = document.createElement('div');
        noteType = n%7;
        note.className = 'note';
        note.setAttribute('data-note', Dianthus.solfege[noteType]);
        note.setAttribute('data-octave', ~~(n/7));
        note.setAttribute('data-time-interval', t);
        note.setAttribute('data-velocity', 0);
        note.setAttribute('data-continues', 'false');
        note.setAttribute('data-continued', 'false');

        timeInterval.appendChild(note);
      }

      el.appendChild(timeInterval);
    });

    return this;
  }
});