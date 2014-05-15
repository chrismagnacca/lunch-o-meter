Meteor.publish("options", function () {
  return Options.find({}, {sort: [["votes", "desc"], ["name", "asc"]]});
});
