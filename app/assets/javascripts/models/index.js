Wh40kRank.Player = DS.Model.extend({
  leagueId: DS.attr('string')
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  nick: DS.attr('string'),
  city: DS.attr('string'),
  tournament_count: DS.attr('string'),
  total_points: DS.attr('string'),
  masters_count: DS.attr('string'),
  chellengerCount: DS.attr('string'),
  localsCount: DS.attr('string'),
  leaguesCount: DS.attr('string'),
});


Wh40kRank.Player.FIXTURES = [
  {id: 1, firstName: 'John', lastName: 'Doe'},
  {id: 2, firstName: 'Jack', lastName: 'Black'}
]
