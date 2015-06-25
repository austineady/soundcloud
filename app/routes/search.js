import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
      return new Ember.RSVP.Promise(function(resolve, reject) {
        SC.get('/tracks/', {limit: 9, q: params.term, order: 'hotness'}, function(tracks) {
              resolve(tracks);
        });
    });
  }
});
