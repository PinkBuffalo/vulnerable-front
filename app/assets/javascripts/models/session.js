Vuln.Session = Em.Object.extend({
  response: null,
  uid: null,
  pic: null,

  responseChanged: function () {
    this.set('status', this.get('response.status'));
    this.set('uid', this.get('response.authResponse.userID'));

    // pic
    var self = this;
    FB.api('/me', {fields: 'picture'}, function (response) {
      self.set('pic', response.picture.data.url);
    });

  }.observes('response').on('set'),

  status: function () {
    return 'N/A'
  }.property('response'),


  isConnected: function () {
    return this.get('status') === "connected";
  }.property('response'),
});
