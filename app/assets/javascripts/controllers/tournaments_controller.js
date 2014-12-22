Wh40kRank.TournamentsNewController = Ember.ObjectController.extend({
  names: ['Master', 'Lokal', 'Challenger'],
  csv: null,
  withTabs: false,

  test: function(){
    csv_to_parse = this.get('csv');
    parsed_csv = $.csv.toArrays(csv_to_parse);
    parsed_csv.shift();
    this.set('attachment', parsed_csv);
  }.observes('csv'),

  actions: {
    createTournament: function(){
      var self = this
      var tournament = this.get('model');
      //   name: this.get('name'),
      //   city: this.get('city'),
      //   type: this.get('type'),
      //   attachment: this.get('attachment')
      // });
      tournament.save().then(function(){
        self.transitionToRoute('tournaments');
      }, function() {
        // Couldn't save, do nothing about it.
      });
    }
  }
})
