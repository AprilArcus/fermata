Dianthus.Views.VerseCompose = Backbone.CompositeView.extend({

  template: JST['verse/form'],

  id: 'Dianthus-Views-VerseCompose',

  initialize: function() {
    var _this = this;
    this.model.measures.each (function(measure) {
      _this.addMeasure(measure);
    });
    var currentUserLoopsIndexView =
      new Dianthus.Views.LoopsIndex( {collection: Dianthus.currentUser.loops,
                                      author: Dianthus.currentUser} );
    this.addSubview('#users-list', currentUserLoopsIndexView);

    this.playhead = this.drawPlayhead();

    this.bpm = 100;
    this.timeIndex = 0;

    this.key = MIDI.keyToNote.C4;
    this.mode = Dianthus.Modes.MAJOR;
  },

  events: {// remove the animation so we can trigger it again
           // h/t David Murdoch, http://stackoverflow.com/a/4811212
           // TODO refactor with compose.js
           'webkitAnimationEnd .time-slice': function (event) {
              event.target.style.webkitAnimationName = '';
            },
           'animationend .time-slice': function (event) {
              event.target.style.animationName = '';
            }
  },

  playOneTimeSlice: function() {
    var timeIndex = this.timeIndex;
    var key = this.key;
    var mode = this.mode;

    // highlight the current column
    var gridCol = this.playhead.children[this.timeIndex];
    gridCol.style.webkitAnimationName = 'verse-time-slice-highlight';
    gridCol.style.animationName = 'verse-time-slice-highlight';

    // play the notes
    var measure = this.model.measures.at(~~(timeIndex/16));
    var scaleDegree = measure.get('scale_degree');
    var measureLoops = measure.measure_loops;
    measureLoops.each(function(measureLoop){
      var timeSlices = measureLoop.loop.get('time_slices');
      var notes = timeSlices[timeIndex % 16];
      _(notes).each(function(note, noteIndex) {
        if (note.velocity > 0) {
          var velocity = note.velocity;
          var MidiNote = Dianthus.transpose(noteIndex, key, mode);
          MidiNote += mode[scaleDegree];
          MIDI.noteOn(0, MidiNote, note.velocity, 0);
          MIDI.noteOff(0, MidiNote, 0.75);
        }
      });
    });
    
    // advance the playhead
    this.timeIndex += 1;
    this.timeIndex %= 64;
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

  addMeasure: function(measure) {
    var selector = '#measures-list';
    var view = new Dianthus.Views.MeasureForm( {model: measure, mode: this.model.get('mode')} );
    this.addSubview(selector, view);
    this.listenTo(view, 'remove', this.removeSubview.bind(this, selector));
  },

  bestGrabbingCursor: function() {
 // h/t Rob W http://stackoverflow.com/a/8771411
    var grabbingCursors = ['grabbing', '-webkit-grabbing', '-moz-grabbing', 'move'];
    var testElement = document.createElement('test');
    return _(grabbingCursors).find(function(cursor) {
      testElement.style.cursor = cursor; // set the cursor
      return testElement.style.cursor;   // will be truthy if it's still there
    });
  },

  drawPlayhead: function() {
    var playhead = document.createElement('div');
    playhead.id = 'playhead';
    _(64).times(function(timeIndex) {
      var gridCol = document.createElement('div');
      gridCol.classList.add('time-slice');
      playhead.appendChild(gridCol);
    });
    return playhead;
  },

  render: function() {
    var rendered = this.template( {verse: this.model} );
    this.$el.html(rendered);
    this.attachSubviews();

    var $measureLoopsLists = this.$el.find('.measure-loops-list');
    $measureLoopsLists.sortable({
      connectWith: '.measure-loops-list',
   // prevent dragging by dropdown menu background
      handle: '.measure-loop-title',
      placeholder: 'measure-loop-placeholder ui-corner-all',
      revert: 150,
      scroll: false,
      cursor: this.bestGrabbingCursor(),
////////////////////////////////////////////////////////////////////////
//                                                                    //
//  ON JQUERY, BOOTSTRAP AND CURSORS                                  //
//                                                                    //
////////////////////////////////////////////////////////////////////////
//                                                                    //
//  sortable's default behavior prepends an anonymous                 //
//  <style> *{cursor: foo-cursor !important} </style> element into    //
//  the bottom of <body>, making it impossible to override in CSS.    //
//  The intent is apparently for sortable's cursor to override any    //
//  custom cursor inherited by the drag helper. In this case we want  //
//  the draggable's cursor to remain 'no-drop' unless it is over a    //
//  connected sortable target, in which case we will set it to        //
//  'alias', overriding the sortable's 'grabbing'.                    //
      start: function(event, ui) {
     // did we originate from a drag event?
        if (/draggable/.test(event.originalEvent.target.className)) {
          $('body > style:last-child').append('*{cursor: alias !important}');
          console.log($('body > style:last-child'));
          document.body.style.cursor = 'alias';
        }
      },
//  The consequence of this is that we must set up our CSS very       //
//  carefully, knowing that JQueryUI will set {cursor: foo-cursor}    //
//  on <body> and bootstrap will set {cursor: pointer} on .btn (with  //
//  which .loop-title and .measure-loop-title coexist as of           //
//  2014-07-30):                                                      //
//                                                                    //
////////////////////////////////////////////////////////////////////////
//                                                                    //
//   .loop-title {                                                    //
//     cursor: default;                                               //
//   }                                                                //
//                                                                    //
//   .measure-loop-title {                                            //
//     cursor: move;                                                  //
//     cursor: -moz-grab;                                             //
//     cursor: -webkit-grab;                                          //
//     cursor: grab;                                                  //
//   }                                                                //
//                                                                    //
//   .ui-draggable-dragging .loop-title,                              //
//   .ui-sortable-helper .measure-loop-title {                        //
//     cursor: inherit !important;                                    //
//   }                                                                //
//                                                                    //
////////////////////////////////////////////////////////////////////////
//                                                                    //
//  After draggable hands off to sortable and sortable completes,     //
//  sortable will try to restore draggable's cursor (in this case,    //
//  no-drop). We manually override this to produce the expected       //
//  behavior.                                                         //
      stop: function() {
        document.body.style.cursor = 'auto';
      }
//  TODO (2014-07-30): File bug with jQuery UI team                   //
//                                                                    //
////////////////////////////////////////////////////////////////////////
//                                                                    //
//  BUT I DIGRESS                                                     //
//                                                                    //
////////////////////////////////////////////////////////////////////////
    });

    var $loops = this.$el.find('.loop');
    $loops.draggable({ 
                       cursor: 'no-drop',
                       connectToSortable: '.measure-loops-list',
                       // revert: 150,
                       appendTo: '#Dianthus-Views-VerseCompose',
                       scroll: false,
                       helper: 'clone',
                     });

    this.$('#measures-list').prepend(this.playhead);

    this.play();

    return this;
  },

  remove: function() {
    this.pause();
    Backbone.View.prototype.remove.call(this);
  }

});