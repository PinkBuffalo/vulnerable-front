Vuln.User = DS.Model.extend({
  name: DS.attr('string')
  , email: DS.attr('string')
  , stories: DS.hasMany('Vuln.Story')
});
