Dianthus.Views.LoopComposeForm = Backbone.CompositeView.extend({

  initialize: function() {
    composer = new Dianthus.Views.LoopCompose({model: this.model});
    this.addSubview('#Dianthus-Views-LoopCompose-Target', composer);
  },

  id: 'Dianthus-Views-LoopComposeForm',

  events: {'change select': 'syncRadioToSelect',
           'change input[type="radio"]': 'syncSelectToRadio',
           'change #color': 'updateColor',
           'focus #title': 'highlightSave',
           'blur #title': 'dimSave',
           'submit form': 'submit'},

  syncRadioToSelect: function(event) {
    if (event.target.id === 'instrument') return; // blacklist

    var name = event.target.name;
    var value = event.target[event.target.selectedIndex].value;
    var $radio = $('input[name="' + name + '"][value="' + value + '"]');
    this.autoClickDidFire = true;
    $radio.click(); // bootstrap's fancy styles are listening for a
                    // click event. This means changing the select menu
                    // must fire a click event on a the radio button,
                    // which will then fire a change event back at the
                    // select menu...
  },

  syncSelectToRadio: function(event) {
    // ...so the reciprocal handler looks for a flag to prevent looping.
    if (this.autoClickDidFire) {
      this.autoClickDidFire = false;
      return;
    }
    var name = event.target.name;
    var value = event.target.value;
    var $select = $('select[name="' + name + '"]');
    $select.val(value);
  },

  updateColor: function(event) {
    this.updateUIColor(event.target.value);
  },

  updateUIColor: function(color) {
    // calculate appropriate foreground color
    // h/t Gacek, http://stackoverflow.com/a/1855903
    var red   = parseInt(color.slice(-6, -4), 16);
    var green = parseInt(color.slice(-4, -2), 16);
    var blue  = parseInt(color.slice(-2), 16);
    var perceptiveLuminance = 1 - (0.299 * red +
                                   0.587 * green +
                                   0.114 * blue) / 255;
    $('.navbar').css({'background-color': event.target.value,
                      'color': (perceptiveLuminance < 0.5) ? 'black' : 'white'});
  },

  highlightSave: function(event) {
    $('#submit').addClass('btn-primary');
  },

  dimSave: function(event) {
    $('#submit').removeClass('btn-primary');
  },

  submit: function(event) {
    event.preventDefault();
    var formData = $(event.target).serializeJSON();
    var loop = this.model;
    loop.save(formData.loop,
            { patch: !loop.isNew(),
              success: function() {
                Dianthus.currentUser.loops().add(loop, {merge: true});
                Backbone.history.navigate('#', {trigger: true});
              }
            });
  },

  template: JST['loop/form'],

  render: function() {
    var rendered = this.template( {loop: this.model} );
    this.$el.html(rendered);
    this.attachSubviews();
    return this;
  }

});