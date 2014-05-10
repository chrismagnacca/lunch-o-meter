Meteor.startup(function () {
  if(!(Options.find().count() > 0)) {
    for(var i = 0; i < 4; i++) {
      Options.insert({name: "Lunch Option #" + i});
    }
  }
});
