Dianthus.Views.VerseForm = Backbone.CompositeView.extend({

  template: JST['verse/form'],

  id: 'Dianthus-Views-VerseForm',

  initialize: function() {
    var _this = this;
    this.model.measures.each (function(measure) {
      _this.addMeasure(measure);
    });
  },

  addMeasure: function(measure) {
    var selector = '.measures-list';
    var view = new Dianthus.Views.MeasureForm( {model: measure, mode: this.model.get('mode')} );
    this.addSubview(selector, view);
    this.listenTo(view, 'remove', this.removeSubview.bind(this, selector));
  },

  // events: {
  //   'sortupdate .measure-loops-list': 'updateOrd'
  // },

  // updateOrd: function(event, ui) {
  //   console.log(event.target);
  //   console.log(ui.sender);
  // },

  render: function() {
    var rendered = this.template( {verse: this.model} );
    this.$el.html(rendered);
    this.attachSubviews();

    var $measureLoopsList = this.$el.find('.measure-loops-list');
    $measureLoopsList.sortable({ connectWith: '.measure-loops-list',
                                 handle: '.measure-loop-title' });

    // console.log(this.model);

    return this;
  }

});