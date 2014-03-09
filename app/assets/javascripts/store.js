DS.RESTAdapter.configure('plurals', { story: 'stories' });

Vuln.ApplicationAdapter = DS.RESTAdapter.extend({
  namespace: 'api/v1',
  url: 'http://localhost:4000'
});

Vuln.Store = DS.Store.extend({
  adapter: 'Vuln.ApplicationAdapter'
});
