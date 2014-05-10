Router.configure({
  layout: "layout",
  loadingTemplate: "loading"
});

Router.map(function() {
  this.route("home", {
    path: "/",
    data: {
      options: function() {
        return Options.find({});
      },
      votes: function () {
        return Votes.find({});
      }
    }
  });
  this.route("options");
  this.route("votes");
});

App = {
  Subscriptions: {
    options: Meteor.subscribe("options"),
    option: Meteor.subscribe("option"),
    votes: Meteor.subscribe("votes"),
    vote: Meteor.subscribe("vote")
  }
};
