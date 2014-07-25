window.Dianthus = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // alert('Hello from Backbone!');
    new Dianthus.Routers.Router( {$el: $('#main')} );
    Dianthus.solfege = ['do', 're', 'mi', 'fa', 'so', 'la', 'ti'];
    Backbone.history.start();

    MIDI.loadPlugin({
      soundfontUrl: "/assets/soundfont/",
      instrument: "acoustic_grand_piano",
      callback: function() {
        var delay = 0; // play one note every quarter second
        var note = 50; // the MIDI note
        var velocity = 127; // how hard the note hits
        // play the note
        MIDI.setVolume(0, 127);
        MIDI.noteOn(0, note, velocity, delay);
        MIDI.noteOff(0, note, delay + 0.75);
      }
    });

  }
};
