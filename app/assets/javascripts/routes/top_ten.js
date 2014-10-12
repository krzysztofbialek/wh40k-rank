Wh40kRank.TopTenRoute = Ember.Route.extend({

    model: function(){
      return  this.store.find('player')
    }
});