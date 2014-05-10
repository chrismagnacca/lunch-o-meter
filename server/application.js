Meteor.startup(function () {
  Meteor.publish("options", function () {
    return Options.find({}, {sort: {order:1 }});
  });

  Meteor.publish("option", function () {
    return Options.find({_id: id});
  });

  Meteor.publish("votes", function () {
    return Votes.find({}, {sort: {order: 1 }})
  });

  Meteor.publish("vote", function () {
    return Votes.find({_id: id});
  });
});
