Meteor.publish("options", function () {
  return Options.find({}, {sort: [["votes", "desc"], ["name", "asc"]]});
});

Meteor.publish("option", function (id) {
  return Options.find({_id: id}, {sort: [["votes", "desc"], ["name", "asc"]]});
});
