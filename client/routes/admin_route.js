var AdminController = RouteController.extend({
  template: "admin",
  data: {
  }
});

Router.map(function() {
  this.route("admin", {
    path: "/admin",
    controller: AdminController
  });
});
