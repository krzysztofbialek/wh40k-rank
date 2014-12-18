Wh40kRank.TournamentsNewController = Ember.ArrayController.extend({
  names: ['Master', 'Lokal', 'Challenger'],
  csv: null,
  withTabs: false,

  test: function(){
    csv_to_parse = this.get('csv');
    parsed_csv = $.csv.toArrays(csv_to_parse);
    parsed_csv.shift();
    console.log(parsed_csv)
    this.set('attachment', parsed_csv);
  }.observes('csv'),

  actions: {
    createTournament: function(){
      var tournament = this.store.createRecord('tournament', {
        name: this.get('name'),
        city: this.get('city'),
        type: this.get('type'),
        attachment: this.get('attachment')
      });
      tournament.save();
    }
  }
})
