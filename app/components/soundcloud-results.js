import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['results-list'],

  actions: {
    select: function(track) {
      this.sendAction('action', track);
    }
  }
});
