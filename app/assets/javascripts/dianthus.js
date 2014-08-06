window.Dianthus = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // alert('Hello from Backbone!');
    MIDI.loadPlugin({
      soundfontUrl: "/assets/soundfont/",
      instrument: "acoustic_grand_piano",
      callback: function() {
        // load the synth drums incrementally to avoid preposterous wait
        // times. h/t erstwhile, http://midi.backtrace.us/minimalism.html
        MIDI.loadPlugin({
          instruments: [ "acoustic_grand_piano", "synth_drum" ],
          callback: function() {
            MIDI.programChange(0, 0);
            MIDI.programChange(1, 118);
            Dianthus.instrumentsLoaded = true;
          }
        });
        MIDI.setVolume(0, 127);
        // this would be a good place to halt a load indicator
        new Dianthus.Routers.Router( {$el: $('#Dianthus-Routers-SwapView-Target')} );
        Backbone.history.start();
      }
    });


  }
};

// Constants
Dianthus.SOLFEGE = ['do', 're', 'mi', 'fa', 'so', 'la', 'ti'];
Dianthus.Modes = {};
// Major
Dianthus.Modes.LYDIAN                         = [0, 2, 4, 6, 7, 9, 11];
Dianthus.Modes.IONIAN  = Dianthus.Modes.MAJOR = [0, 2, 4, 5, 7, 9, 11];
Dianthus.Modes.MIXOLYDIAN                     = [0, 2, 4, 5, 7, 9, 10];
// Minor
Dianthus.Modes.DORIAN                         = [0, 2, 3, 5, 7, 9, 10];
Dianthus.Modes.AEOLIAN = Dianthus.Modes.MINOR = [0, 2, 3, 5, 7, 8, 10];
Dianthus.Modes.HARMONIC_MINOR                 = [0, 2, 3, 5, 7, 8, 11];
// "something that I'd learned at Juilliard" -- Miles Davis
Dianthus.Modes.EGYPTIAN                       = [0, 2, 3, 6, 7, 8, 11];
Dianthus.Modes.PHRYGIAN                       = [0, 1, 3, 5, 7, 8, 10];
// "The Locrian mode is traditionally considered theoretical rather than
//  practical because the triad built on the first scale degree is
//  diminished -- http://en.wikipedia.org/wiki/Musical_mode#Summary"
Dianthus.Modes.LOCRIAN                        = [0, 1, 3, 5, 6, 8, 10];

Dianthus.ChordSymbols = {};
Dianthus.ChordSymbols.IONIAN =
Dianthus.ChordSymbols.MAJOR  =
['I Maj', 'II min', 'III min', 'IV Maj', 'V Maj', 'VI min', 'VII dim'];

Dianthus.ChordSymbols.AEOLIAN =
Dianthus.ChordSymbols.MINOR =
['I min', 'II dim', '♭III Maj', 'IV min', 'V min', '♭VI Maj', '♭VII dim'];

Dianthus.MidiInstrumenToMidiJSInstrument = {0: 0, 118: 1};

//Utility functions
Dianthus.transpose = function(noteIndex, key, mode) {
  var noteType = noteIndex % 7;
  var octave = ~~(noteIndex / 7); // integer division
  var modulatedNote = mode[noteType] + octave*12; // tonic is now 12
  return modulatedNote - 12 + key;
};

Dianthus.getForegroundColor = function(color) {
 // calculate appropriate foreground color
 // h/t Gacek, http://stackoverflow.com/a/1855903
    var red   = parseInt(color.slice(-6, -4), 16);
    var green = parseInt(color.slice(-4, -2), 16);
    var blue  = parseInt(color.slice(-2), 16);
    var perceptiveLuminance = 1 - (0.299 * red +
                                   0.587 * green +
                                   0.114 * blue) / 255;
    return (perceptiveLuminance < 0.5) ? 'black' : 'white';
};