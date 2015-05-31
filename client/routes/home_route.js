var HomeController = RouteController.extend({
  template: "home",
  data: {
    options: function() {
      return Options.find({}, {sort: {order: 1}});
    },
    votes: function () {
      return Votes.find({}, {sort: {order: 1}});
    }
  }
});

Router.map(function() {
  this.route("home", {
    path: "/",
    controller: HomeController
  })
});
