Vuln.StoriesIndexRoute = Em.Route.extend({
  model: function () {
    return this.store.find(Vuln.Story);
  }
});
