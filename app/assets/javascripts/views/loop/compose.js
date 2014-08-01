Dianthus.Views.LoopCompose = Backbone.View.extend({

  initialize: function() {
    this.key = MIDI.keyToNote[this.model.get('key') + '4'];
    this.mode = Dianthus.Modes[this.model.get('mode')];
    this.timeSlices = this.model.get('time_slices');
    this.bpm = 100;
    this.timeIndex = 0;
    this.playing = true;
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
    this.timeIndex %= this.timeSlices.length;
  },

  semiquaver: function() {
    return 15000 / this.bpm;
  },

  play: function() {
    this.interval = setInterval(this.playOneTimeSlice.bind(this),
                                this.semiquaver());
    this.playing = true;
  },

  pause: function() {
    clearInterval(this.interval);
    this.playing = false;
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
  },

  remove: function() {
    this.pause();
    Backbone.View.prototype.remove.call(this);
  }
});