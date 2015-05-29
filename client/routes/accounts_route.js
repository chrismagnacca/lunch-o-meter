var AccountController = RouteController.extend({
  template: "accounts",
  data: {
    user: function() {
      var currentUser = Meteor.user();
      var user = {username: currentUser.username, email: currentUser.emails[0].address};
      return user;
    }
  },
  action: function() {
  this.render();
  }
});

Router.map(function(){
  this.route("account", {
    path: "/account/:username",
    layoutTemplate: "layout",
    controller: AccountController
  })
});
