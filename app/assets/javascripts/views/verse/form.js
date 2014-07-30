Dianthus.Views.VerseForm = Backbone.CompositeView.extend({

  template: JST['verse/form'],

  id: 'Dianthus-Views-VerseForm',

  initialize: function() {
    var _this = this;
    this.model.measures.each (function(measure) {
      _this.addMeasure(measure);
    });
    var currentUserLoopsIndexView =
      new Dianthus.Views.LoopsIndex( {collection: Dianthus.currentUser.loops,
                                      author: Dianthus.currentUser} );
    this.addSubview('#users-list', currentUserLoopsIndexView);
  },

  addMeasure: function(measure) {
    var selector = '#measures-list';
    var view = new Dianthus.Views.MeasureForm( {model: measure, mode: this.model.get('mode')} );
    this.addSubview(selector, view);
    this.listenTo(view, 'remove', this.removeSubview.bind(this, selector));
  },

  render: function() {
    var rendered = this.template( {verse: this.model} );
    this.$el.html(rendered);
    this.attachSubviews();

    // find the best dragging cursor
    // h/t Rob W http://stackoverflow.com/a/8771411
    var grabbingCursors = ['grabbing', '-webkit-grabbing', '-moz-grabbing', 'move'];
    var testElement = document.createElement('test');
    var grabbingCursor = _(grabbingCursors).find(function(cursor) {
      testElement.style.cursor = cursor;
      return testElement.style.cursor;
    });

    var $measureLoopsLists = this.$el.find('.measure-loops-list');
    $measureLoopsLists.sortable({ connectWith: '.measure-loops-list',
                               // prevent dragging by dropdown menu background
                                  handle: '.measure-loop-title',
                                  placeholder: 'measure-loop-placeholder ui-corner-all',
                                  revert: 150,
                                  scroll: false,
                                  cursor: grabbingCursor,
 // sortable's default behavior prepends an anonymous
 // <style> *{cursor: foo-cursor !important} </style> element into the
 // bottom of <body>, making it impossible to override in CSS. The
 // intent is apparently for sortable's cursor to override any custom
 // cursor inherited by the drag helper, but this results in sortable's
 // cursor taking precedence over the cursor of a connected draggable,
 // which we do not want here.
                                  start: function(event, ui) {
 // did we originate from a drag event?
    if (/draggable/.test(event.originalEvent.target.className)) {
      console.log(event.originalEvent);
      $('body > style:last-child').empty(); // clear the offending <style>
      document.body.style.cursor = 'alias'; // reset the original cursor
    }
     
                                  } });
 // The consequence of this is that we must set up our CSS very
 // carefully, knowing that JQueryUI will set {cursor: foo-cursor}
 // on <body> and bootstrap will set {cursor: pointer} on .btn (with
 // which .loop-title and .measure-loop-title coexist as of 2014-07-30):

 //   .loop-title {
 //     cursor: default;
 //   }

 //   .measure-loop-title {
 //     cursor: move;
 //     cursor: -moz-grab;
 //     cursor: -webkit-grab;
 //     cursor: grab;
 //   }

 //   .ui-draggable-dragging .loop-title,
 //   .ui-sortable-helper .measure-loop-title {
 //     cursor: inherit !important;
 //   }

    var $loops = this.$el.find('.loop');
    $loops.draggable({ 
                       cursor: 'alias',
                       connectToSortable: '.measure-loops-list',
                       // handle: '.loop-title',
                       helper: 'clone',
                     });
                      

    return this;
  }

});