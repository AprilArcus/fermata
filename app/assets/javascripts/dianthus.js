window.Dianthus = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // alert('Hello from Backbone!');
    new Dianthus.Routers.Router( {$el: $('#main')} );
    Backbone.history.start();
    MIDI.loadPlugin({
      soundfontUrl: "/assets/soundfont/",
      instrument: "acoustic_grand_piano",
      callback: function() {
        MIDI.setVolume(0, 127);
        // this would be a good place to halt a load indicator
      }
    });


  }
};

// Constants
Dianthus.SOLFEGE = ['do', 're', 'mi', 'fa', 'so', 'la', 'ti'];
Dianthus.MAJOR = [0, 2, 4, 5, 7, 9, 11];
Dianthus.MINOR = [0, 2, 3, 5, 7, 8, 10];

//Utility functions
Dianthus.transpose = function(noteIndex, key, mode) {
  var noteType = noteIndex % 7;
  var octave = ~~(noteIndex / 7); // integer division
  var modulatedNote = mode[noteType] + octave*12; // tonic is now 12
  return modulatedNote - 12 + key;
};