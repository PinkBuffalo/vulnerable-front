Vuln.UsersNewController = Em.ObjectController.extend({
  actions: {
    save: function () {
      this.get('model').save();
    }
  }
});
