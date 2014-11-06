//= require jquery
//= require jquery_ujs
//= require jquery
//= require handlebars
//= require ember
//= require ember-data
//= require_self
//= require ./wh40k_rank

Wh40kRank = Ember.Application.create({
  LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true,
  LOG_VIEW_LOOKUPS: true,



});

Ember.Application.initializer({
  name: 'currentUser',
  initialize: function(container, application) {
    application.deferReadiness();
    proxy = Ember.Object.extend({signedIn: false})
    application.register('user:current', proxy, { singleton: true } );

    Ember.$.get('/logged_in', function() {
      console.log('hodor');
      container.lookup('user:current').set('signedIn', true)
    }).fail(function() {
      container.lookup('user:current').set('signedIn', false)
    });

    application.inject('controller', 'currentUser', 'user:current')
    application.inject('route', 'currentUser', 'user:current')
    application.advanceReadiness();
  }
});

