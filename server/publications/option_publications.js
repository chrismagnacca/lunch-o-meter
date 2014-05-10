Meteor.publish("options", function () {
  return Options.find({}, {sort: {order:1 }});
});

Meteor.publish("option", function (id) {
  return Options.find({_id: id});
});
