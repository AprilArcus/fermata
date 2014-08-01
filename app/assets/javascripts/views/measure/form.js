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
    return view;
  },

  events: {
    'change .scale-degree' : 'updateScaleDegree',
    'sortupdate .measure-loops-list': 'updateCollection',
    'sortremove .measure-loops-list': 'cleanUpCollection'
  },

  updateScaleDegree: function(event) {
    var scaleDegree = event.target[event.target.selectedIndex].value;
    this.model.save({'scale_degree': scaleDegree}, {patch: true});
  },

  updateCollection: function(event, ui) {
    var _this = this;
    var measureId = this.model.get('id');
    var measure_loops = this.model.measure_loops;
    var measure_loop_nodes = event.target.children;
    var measureLoop;
    _(measure_loop_nodes).each(function(node, index) {
      var measureLoopId = node.getAttribute('data-measure-loop-id');
      if (measureLoopId) { // sorting
        measureLoop = measure_loops.get(measureLoopId);
        if(!measureLoop) { // inbound measure loop from another measure
          measureLoop = new Dianthus.Models.MeasureLoop({id: measureLoopId});
          measure_loops.add(measureLoop);
       // the dropped jQuery UI element still has its destroy event handler
       // wired up to the wrong collection
       // var measureLoopItemView = _this.addMeasureLoop(measureLoop);
       // $(node).replaceWith(measureLoopItemView.render().el);
        }
        measureLoop.save({ord: index, measure_id: measureId}, {patch: true});
      } else { // inbound loop from loops palette: we must create a new
               // row in the measure_loops join table server-side
        var loopId = node.getAttribute('data-loop-id');
        measureLoop = measure_loops.create({
          measure_id: measureId, loop_id: loopId, ord: index
                                           }, { success: function(model) {
            var measureLoopItemView = _this.addMeasureLoop(model);
            // var measureLoopItemView = new Dianthus.Views.MeasureLoopItem( {model: model} );
            $(node).replaceWith(measureLoopItemView.render().el);
          }
        });
        //
        
      }
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