Vuln.ApplicationController = Em.Controller.extend({
  user: null,

  hasUser: function () {
    return this.get('user') !== null;
  }
});
