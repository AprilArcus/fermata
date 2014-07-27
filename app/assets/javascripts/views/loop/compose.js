Dianthus.Views.LoopCompose = Backbone.View.extend({

  initialize: function() {
    this.bpm = 120;
    this.paused = false;
    this.key = MIDI.keyToNote.C4;
    this.mode = Dianthus.MAJOR;

    this.timeIndex = 0;
    this.NUM_TIME_SLICES = 16;

    this.timeSlices = this.model.get('time_slices');
  },

  id: 'Dianthus-Views-LoopCompose',

  events: {'click .note': 'click',
           // remove the animation so we can trigger it again
           // h/t David Murdoch, http://stackoverflow.com/a/4811212
           'webkitAnimationEnd .time-slice': function (event) {
              event.target.style.webkitAnimationName = '';
            },
           'animationend .time-slice': function (event) {
              event.target.style.animationName = '';
            }
  },

  click: function(event) {
    var timeIndex = event.target.getAttribute('data-time-index');
    var noteIndex = event.target.getAttribute('data-note-index');

    var note = this.timeSlices[timeIndex][noteIndex];
    if (note.velocity) {
      note.velocity = 0;
    } else {
      note.velocity = 127;
    }

    this.updateGridSquare(event.target, note);
  },

  updateGridSquare: function(gridSquare, note) {
    gridSquare.setAttribute('data-velocity', note.velocity);
  },

  playOneTimeSlice: function() {
    // highlight the current column
    var gridCol = this.el.children[this.timeIndex];
    gridCol.style.webkitAnimationName = 'time-slice-highlight';
    gridCol.style.animationName = 'time-slice-highlight';

    // play the notes
    var notes = this.timeSlices[this.timeIndex];
    var _this = this;
    _(notes).each(function(note, noteIndex) {
      if (note.velocity > 0) {
        var velocity = note.velocity;
        var MidiNote = Dianthus.transpose(noteIndex, _this.key, _this.mode);
        MIDI.noteOn(0, MidiNote, note.velocity, 0);
        MIDI.noteOff(0, MidiNote, 0.75);
      }
    });
    
    // advance the playhead
    this.timeIndex += 1;
    this.timeIndex %= this.NUM_TIME_SLICES;
  },

  interval: function() {
    return 15000 / this.bpm;
  },

  play: function() {
    setInterval(this.playOneTimeSlice.bind(this), this.interval());
  },

  render: function() {
    var _this = this;

    _(this.timeSlices).each(function(timeSlice, timeIndex) {
      var gridCol = document.createElement('div');
      gridCol.classList.add('time-slice');
      
      _(timeSlice).each(function(note, noteIndex) {
        var gridSquare = document.createElement('div');
        gridSquare.setAttribute('data-time-index', timeIndex);
        gridSquare.setAttribute('data-note-index', noteIndex);

        var noteType = noteIndex % 7;
        gridSquare.classList.add('note');
        gridSquare.classList.add('note-' + Dianthus.SOLFEGE[noteType]);

        _this.updateGridSquare(gridSquare, note);

        gridCol.insertBefore(gridSquare, gridCol.firstChild); // prepend
      });

      _this.el.appendChild(gridCol);
    });

    this.play();

    return this;
  }
});