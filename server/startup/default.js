Meteor.startup(function () {
  if(!(Options.find().count() > 0)) {
    for(var i = 0; i < 4; i++) {
      Options.insert({title: "Lunch Option #" + i});
    }
  }
});
