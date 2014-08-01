Dianthus.Models.User = Backbone.Model.extend({

  urlRoot: 'api/users',

  handle: function() {
    return this.escape('username') || this.escape('email').match(/(.*)@/)[1];
  },

  parse: function(response) {
    this.loops = new Dianthus.Collections.Loops(response.loops, {parse: true});
    delete response.loops;
    this.verses = new Dianthus.Collections.Verses(response.verses, {parse: true});
    delete response.verses;
    return response;
  }

});