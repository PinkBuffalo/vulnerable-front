Vuln.Router.map(function() {
  this.route('timeline', {path: '/'});
  this.route('start');

  this.resource('users', {path: 'users/:user_id'}, function () {
    this.route('new');
    this.resource('stories', function () {
      this.route('new');
    })
  });
});
