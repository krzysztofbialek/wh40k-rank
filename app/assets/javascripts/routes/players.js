Wh40kRank.PlayersRoute = Ember.Route.extend({

    model: function(){
      return  this.store.find('player')
    }
});