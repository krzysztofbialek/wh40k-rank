Wh40kRank.LogoutRoute = Ember.Route.extend({
  beforeModel: function(){
    var route = this
    Ember.$.ajax({
      url: '/logout',
      type: 'DELETE',
      success: function(result){
        route.controllerFor('application').set('signedIn', false);
        route.transitionTo('dashboard');
      }
    })
  }
});