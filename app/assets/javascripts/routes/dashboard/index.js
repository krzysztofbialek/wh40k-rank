Wh40kRank.DashboardIndexRoute = Ember.Route.extend({

    model: function(){
      return  this.store.find('player');
    }
});