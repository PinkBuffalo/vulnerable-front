Vuln.StartController = Em.ObjectController.extend({
  user: function () {
    return this.store.createRecord(Vuln.User);
  }.property()
});
