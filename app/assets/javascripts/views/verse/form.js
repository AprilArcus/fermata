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

    var $measureLoopsList = this.$el.find('.measure-loops-list');
    $measureLoopsList.sortable({ connectWith: '.measure-loops-list',
                                 handle: '.measure-loop-title',
                                 placeholder: 'measure-loop-placeholder ui-corner-all',
                                 revert: 150,
                                 scroll: false,
                                 cursor: grabbingCursor });

    return this;
  }

});