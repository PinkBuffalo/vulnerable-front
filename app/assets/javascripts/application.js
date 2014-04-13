//= require jquery
//= require jquery_ujs
//= require jquery
//= require handlebars
//= require ember
//= require ember-data
//= require_self
//= require vuln

Vuln = Ember.Application.create({
  rootElement: '#ember-root'
});


Ember.Application.initializer({
  name: 'session-initializer',

  initialize: function(container, application) {
    application.register('session:current', Vuln.Session, {singleton: true});
    application.inject('controller', 'session', 'session:current');
  }
});

//= require_tree .
