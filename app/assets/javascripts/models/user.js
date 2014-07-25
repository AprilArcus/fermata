Dianthus.Models.User = Backbone.Model.extend({
  urlRoot: 'api/users',

  loops: function() {
    if (this._loops === undefined) {
      this._loops = new Dianthus.Collections.Loops ( [], {authorId: this.id} );
    }
    return this._loops;
  },

  parse: function(response) {
    if (response.loops) {
      this.loops().set(response.loops, { parse: true });
      delete response.loops;
    }
    return response;
  }

});