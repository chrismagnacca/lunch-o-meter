Meteor.publish("votes", function () {
  return Votes.find({}, {sort: {order: 1 }})
});

Meteor.publish("vote", function (id) {
  return Votes.find({_id: id});
});
