Ember.Application.initializer({
  name: 'currentUser',
  initialize: function(container, application) {
    application.deferReadiness();
    proxy = CurrentUserProxy.extend()
    console.log('Hodor')
    application.register 'user:current', proxy, singleton: true  }

    Ember.$.get('/logged_in', function() {
      container.lookup('user:current').set 'signedIn', true
    }).fail(function() {
      container.lookup('user:current').set 'signedIn', false
    });

    application.inject 'controller', 'currentUser', 'user:current'
    application.inject 'route', 'currentUser', 'user:current'
    console.log(proxy)
    application.advanceReadiness()
  };
});