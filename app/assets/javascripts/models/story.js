Vuln.Story = DS.Model.extend({
  body: DS.attr('string')
  , user: DS.belongsTo('Vuln.User', { async: true})
});
