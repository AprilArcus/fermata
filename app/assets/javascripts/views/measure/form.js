Dianthus.Views.MeasureForm = Backbone.CompositeView.extend({

  template: JST['measure/form'],

  tagName: 'li',

  className: 'measure',

  initialize: function(options) {
    this.mode = options.mode;
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
    'sortupdate .measure-loops-list': 'updateOrds',
    'sortout .measure-loops-list': 'cleanUpCollection'
  },

  updateScaleDegree: function(event) {
    var scaleDegree = event.target[event.target.selectedIndex].value;
    this.model.save({'scale_degree': scaleDegree}, {patch: true});
  },

  updateOrds: function(event, ui) {
    var measureId = this.model.get('id');
    var measure_loops = this.model.measure_loops;
    var measure_loop_nodes = event.target.children;

    _(measure_loop_nodes).each(function(node, index) {
      var measureLoopId = node.getAttribute('data-measure-loop-id');
      var measureLoop = measure_loops.get(measureLoopId);
      if(!measureLoop) { // inbound object
        measureLoop = new Dianthus.Models.MeasureLoop({id: measureLoopId});
        measure_loops.add(measureLoop);
      }
      measureLoop.save({'ord': index, 'measure_id': measureId}, {patch: true});
    });
  },

  cleanUpCollection: function(event, ui) {
    // remove by id is undocumented but convenient.
    // h/t nrabinowitz http://stackoverflow.com/a/10400754
    var outId = ui.item.data('measure-loop-id'); 
    this.model.measure_loops.remove(outId);
  },

  render: function() {
    var rendered = this.template( {measure: this.model, mode: this.mode} );
    this.$el.html(rendered);
    this.attachSubviews();
    return this;
  }

});