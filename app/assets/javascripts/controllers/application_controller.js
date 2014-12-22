Wh40kRank.ApplicationController = Ember.Controller.extend({

  signedIn: function(){
    return this.get('currentUser').signedIn;
  }.property(),

})
