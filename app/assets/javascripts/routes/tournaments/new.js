Wh40kRank.TournamentsNewRoute = Ember.Route.extend({
    model: function(){
      return  this.store.createRecord('tournament');
    }
});