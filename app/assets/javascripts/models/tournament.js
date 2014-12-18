Wh40kRank.Tournament = DS.Model.extend({
  name: DS.attr('string'),
  city: DS.attr('string'),
  type: DS.attr('string'),
  start: DS.attr('string'),
  attachment: DS.attr('results')
});


Wh40kRank.Tournament.FIXTURES = [
  {id: 1, name: 'Arena', city: 'Warszawa'},
  {id: 2, name: 'DMW', city: 'Kraków'}
]
