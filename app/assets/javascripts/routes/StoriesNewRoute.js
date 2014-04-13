Vuln.StoriesNewRoute = Em.Route.extend({
  model: function () {
    return this.store.createRecord(Vuln.Story);
  },

  actions: {
    'story.save': function () {
      var story = this.controller.get('model');
      story.set('user', this.modelFor('users'));
      debugger
    }
  }
});
