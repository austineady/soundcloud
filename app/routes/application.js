import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      SC.get('/tracks/210433784', function(song) {
          SC.stream('/tracks/210433784', function(sound) {
            resolve({
              track: song,
              stream: sound
            });
          });
      });
    });
  },

  actions: {
    search: function(term) {
      this.transitionTo('search', term);
    },

    trackSelected: function(track) {
      SC.stream('/tracks/' + track.id, function(sound) {
        // this.modelFor(this.routeName).set({
        //   track: track,
        //   stream: sound
        // });
      }.bind(this));
    }
  }
});
