import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    // track: {
    SC.initialize({
      client_id: "f9388f728af1d0dfeb6926fc192a56f1"
    });
    return new Ember.RSVP.Promise(function(resolve, reject) {
      SC.get('/tracks/210433784', function(song) {
          resolve(song);
      });
    });
  }
});
