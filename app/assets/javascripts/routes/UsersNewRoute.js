Vuln.UsersNewRoute = Em.Route.extend({
  model: function () {
    return this.store.createRecord(Vuln.User);
  },

  actions: {
    save: function () {
      var self = this;

      this.controller.get('model').save().then(function (model) {
        self.controllerFor('application').set('user', model);
        self.transitionTo('stories.new');
      })
    }
  }
});
