Dianthus.Views.VerseComposeForm = Backbone.CompositeView.extend({

  initialize: function() {
    this.composer = new Dianthus.Views.VerseCompose({model: this.model});
    this.addSubview('#Dianthus-Views-ComposeForm-ComposerTarget', this.composer);
  },

  id: 'Dianthus-Views-Verse-ComposeForm-Container',

  events: { 'click #play-pause': 'playPause',
           'click #sign-in-out': 'signInOut',
            'change select': 'syncRadioToSelect',
            'change input[type="radio"]': 'syncSelectToRadio',
            'change input[type="radio"][name="key"]': 'updateKey',
            'change input[type="radio"][name="mode"]': 'updateMode',
            'change #color': 'updateColor',
            'focus #title': 'highlightSave',
            'blur #title': 'dimSave',
            'submit form': 'submit',
  },

  playPause: function(event) {
    if (this.composer.playing) {
      this.composer.pause();
    } else {
      this.composer.play();
    }
  },

  signInOut: function(event) {
    if (Dianthus.currentUser) {

      $.ajax({url: '/api/session',
              type: 'delete',
              success: function(model, status, response) {
                delete Dianthus.currentUser;
                Backbone.history.navigate('#', {trigger: true});
              }, error: function() {
                throw 'fail in signout';
              }
      });

    } else {
      $('#new-session').modal();
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
    this.el.style.backgroundColor = color;
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
    var options = $('#Dianthus-Views-ComposeForm-Options form').serializeJSON();
    var formData = $(event.target).serializeJSON();
    _(formData).extend(options);
    var verse = this.model;
    var _this = this;
    console.log(formData);
    verse.save(formData,
            { patch: true,
              success: function() {
                Dianthus.currentUser.verses.add(verse, {merge: true});
                Backbone.history.navigate('#', {trigger: true});
              },
              error: function(model, response) {
                if (response.status === 422) {
               // validate
                  var titleError = (JSON.parse(response.responseText).title[0]);
                  $titleAlert = $('.alert-title');
                  $titleAlert.find('.alert-message').html(titleError);
                  $titleAlert.addClass('alert-danger');
                } else {
                  throw response;
                }
              }
            });
  },
                                       
  template: JST['loop/form'],        

  render: function() {
    var rendered = this.template( {model: this.model} );
    this.$el.html(rendered);
    this.updateUIColor(this.model.get('color'));
    this.attachSubviews();
    return this;
  }

});