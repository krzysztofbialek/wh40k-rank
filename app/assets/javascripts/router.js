// For more information see: http://emberjs.com/guides/routing/

Wh40kRank.Router.map(function() {
  this.resource('players');
  this.resource('top_ten', {path: "/"});
  this.resource('tournaments');
});
