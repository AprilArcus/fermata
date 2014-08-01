Dianthus.Views.SessionForm = Backbone.View.extend({

  initialize: function(options) {
    this.parentView = options.parentView;
  },

  className: 'modal-dialog modal-sm',

  template: JST['session/form'],

  events: {'submit form': 'submit',
           'click #new-user': 'newUser'},

  submit: function() {
    event.preventDefault();
    event.stopPropagation();
    var formData = $(event.target).serializeJSON();
    var csrfToken = $('meta[name="csrf-token"]').attr('content');
    var payload = {session: {email: formData.email,
                             password: formData.password},
                   authenticity_token: csrfToken}; // hello rails!
    var parentView = this.parentView;
    $.ajax({url: '/api/session',
            type: 'post',
            data: payload,
            success: function(model, status, response) {
              Dianthus.currentUser = new Dianthus.Models.User({id:model.current_user_id});
              Dianthus.currentUser.fetch({success: function() {
                  parentView.trigger('signInSuccess');
                }
              });
            }, error: function() {
              console.log('fail');
            }
    });
  },

  newUser: function() {
    // event.preventDefault();
    // event.stopPropagation();
    var parentView = this.parentView;
    var formData = $('#session-form').serializeJSON();
    var payload = {user: formData};
    new Dianthus.Models.User(payload).save({}, {
      success: function(model, status, response) {
        Dianthus.currentUser = model;
        parentView.trigger('signInSuccess');
      },
      error: function(model, status, response) {
        console.log(model);
        console.log(status);
        console.log(response);
        throw 'save new user failed';
      }
    });
  },

  render: function() {
    var rendered = this.template();
    this.$el.html(rendered);
    return this;
  }

});