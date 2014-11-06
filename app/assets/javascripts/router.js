// For more information see: http://emberjs.com/guides/routing/

Wh40kRank.Router.map(function() {
  // this.resource('players');
  // this.resource('top_ten', {path: "/"});
  // this.resource('tournaments');

  // this.route('login');

  this.resource('dashboard', {path: '/'}, function () {
    //this.resource('top_ten', {path: "/"}); // -> index
    this.resource('tournaments', function(){
      this.route('new');
    });
    this.resource('players');
  })

  this.route('login');
  this.route('logout')
});
