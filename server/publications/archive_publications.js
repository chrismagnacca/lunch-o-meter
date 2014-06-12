Meteor.publish("archive", function(id) {
  return Archives.find({_id: id});
});

Meteor.publish("archives", function () {
  return Archives.find({});
});

