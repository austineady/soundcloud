import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['track-container'],

  isPlaying: false,

  actions: {
    play: function(id) {
      this.set('isPlaying', true);
      this.get('stream').play();
    },

    pause: function() {
      this.set('isPlaying', false);
      this.get('stream').pause();
    },

    resetTrack: function() {
      this.get('stream').reset();
    }
  }
});
