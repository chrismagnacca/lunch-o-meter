Meteor.startup(function() {
  App = {
    Subscriptions: {
      Options: Meteor.subscribe("options")      
    }
  };
});
