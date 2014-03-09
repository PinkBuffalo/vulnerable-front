Vuln.UsersNewRoute = Em.Route.extend({
  model: function () {
    return this.store.createRecord(Vuln.User);
  }
});
