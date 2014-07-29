Dianthus.Views.MeasureForm = Backbone.CompositeView.extend({

  template: JST['measure/form'],

  className: 'Dianthus-Views-MeasureForm',

  initialize: function() {
    this.mode = 'MAJOR'; // TODO populate this from parent verse
    var _this = this;
    this.model.measure_loops.each (function(measure_loop) {
      _this.addMeasureLoop(measure_loop);
    });
  },

  addMeasureLoop: function(measureLoop) {
    var selector = '.measure-loops-list';
    var view = new Dianthus.Views.MeasureLoopItem( {model: measureLoop} );
    this.addSubview(selector, view);
    this.listenTo(view, 'remove', this.removeSubview.bind(this, selector));
  },

  events: {
    'change .scale-degree' : 'updateScaleDegree',
    'sortupdate .measure-loops-list': 'updateOrd'
  },

  updateScaleDegree: function(event) {
    var scaleDegree = event.target[event.target.selectedIndex].value;
    this.model.save({'scale_degree': scaleDegree}, {patch: true});
  },

  updateOrd: function(event, ui) {
    measure_loops = this.model.measure_loops;
    _(event.target.children).each(function(node, index) {
      measureLoopId = node.getAttribute('data-measure-loop-id');
      measureLoop = measure_loops.get(measureLoopId);
      measureLoop.save({'ord': index}, {patch: true});
    });
  },

  render: function() {
    var rendered = this.template( {measure: this.model, mode: this.mode} );
    this.$el.html(rendered);
    var $measureLoopsList = this.$el.find('.measure-loops-list');
    $measureLoopsList.sortable({ handle: '.measure-loop-title' });

    this.attachSubviews();
    return this;
  }

});