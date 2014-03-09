// For more information see: http://emberjs.com/guides/routing/

Vuln.Router.map(function() {
  this.route('stories.index', { path: '/' } );

  this.resource('users', function () {
    this.route('new');
  });
});
