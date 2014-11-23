Wh40kRank.LoginController = Ember.Controller.extend({
  withTabs: false,

  actions: {
  	signIn: function(){
	  $.post("/login", {
  	    email: this.get("email"),
  	    password: this.get("password")
  	  }).then(function() {
  	    document.location = "/";
  	  }, function() {
  	    this.set("loginFailed", true);
  	  }.bind(this));
  	}
  }
})