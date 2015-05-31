Meteor.publish("votes", function() {
  return Votes.find({});
});
