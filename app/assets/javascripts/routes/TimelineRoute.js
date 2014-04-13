Vuln.TimelineRoute = Em.Route.extend({
  renderTemplate: function () {
    this.render('stories.index')
  },

  model: function () {
    return this.store.findAll(Vuln.Story);
  }
});
