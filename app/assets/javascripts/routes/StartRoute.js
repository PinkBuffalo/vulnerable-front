Vuln.StartRoute = Em.Route.extend({
  model: function () {
    return this.store.createRecord(Vuln.Story);
  },

  setupController: function (controller, story) {
    this.controllerFor('stories.new').set('model', story);
    controller.set('content', story);
  },

  renderTemplate: function () {
    this.render('stories.new');
  },

  actions: {
    'story.save': function () {
      var application = this.controllerFor('application');

      if (!application.hasUser()){
        this.render('users.new', {
          outlet: 'user',
          into: 'stories.new',
          controller: 'start'
        });
      } else {
        // this.controller.get('model')
      }
    },

    'user.save': function () {
      var applicationController = this.controllerFor('application')
        , user = this.controller.get('user')
        , self = this;

      user.save().then(function () {
        applicationController.set('user', user);
        self.send('user.created');
      });
    },

    'user.created': function () {
      this.disconnectOutlet({
        outlet: 'user',
        parentView: 'stories.new'
      });

      var story = this.controller.get('model')
        , user = this.controller.get('user');

      story.set('user', user);

      this.controllerFor('stories.new').set('model', story);
      this.transitionTo('stories.new', user);
    }
  }
});
