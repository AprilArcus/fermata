Dianthus.Views.LoopComposeForm = Backbone.CompositeView.extend({

  initialize: function() {
    this.composer = new Dianthus.Views.LoopCompose({model: this.model});
    this.addSubview('#Dianthus-Views-LoopCompose-Target', this.composer);
  },

  id: 'Dianthus-Views-LoopComposeForm',

  events: {'click #play-pause': 'playPause',
           'change select': 'syncRadioToSelect',
           'change input[type="radio"]': 'syncSelectToRadio',
           'change input[type="radio"][name="key"]': 'updateKey',
           'change input[type="radio"][name="mode"]': 'updateMode',
           'change #color': 'updateColor',
           'focus #title': 'highlightSave',
           'blur #title': 'dimSave',
           'submit form': 'submit'
  },

  playPause: function(event) {
    if (this.composer.playing) {
      this.composer.pause();
    } else {
      this.composer.play();
    }
  },

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

  updateKey: function(event) {
    this.composer.key = MIDI.keyToNote[event.target.value + '4'];
  },

  updateMode: function(event) {
    this.composer.mode = Dianthus.Modes[event.target.value];
  },

  updateColor: function(event) {
    var color = event.target.value;
    this.updateUIColor(color);
  },

  updateUIColor: function(color) {
    this.el.style['background-color'] = color;
    this.el.style.color = Dianthus.getForegroundColor(color);
  },

  highlightSave: function(event) {
    $('#submit').addClass('btn-primary');
  },

  dimSave: function(event) {
    $('#submit').removeClass('btn-primary');
  },

  submit: function(event) {
    event.preventDefault();
    var options = $('#Dianthus-Views-LoopComposeForm-Options form').serializeJSON();
    var formData = $(event.target).serializeJSON();
    _(formData).extend(options);
    var loop = this.model;
    loop.save(formData,
            { patch: !loop.isNew(),
              success: function() {
                Dianthus.currentUser.loops.add(loop, {merge: true});
                Backbone.history.navigate('#/verses/1/edit', {trigger: true}); // DEVELOPMENT
              },
              error: function(model, response) {
                var titleError = (JSON.parse(response.responseText).title[0]);
                $titleAlert = $('.alert-title');
                $titleAlert.find('.alert-message').html(titleError);
                $titleAlert.addClass('alert-danger');
              }
            });
  },

  template: JST['loop/form'],

  render: function() {
    var rendered = this.template( {loop: this.model} );
    this.$el.html(rendered);
    this.updateUIColor(this.model.get('color'));
    this.attachSubviews();
    return this;
  }

});