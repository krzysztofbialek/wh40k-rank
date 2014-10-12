// For more information see: http://emberjs.com/guides/routing/

Wh40kRank.Router.map(function() {
  this.resource('players', {path: "/"});
  this.resource('top10');
});
