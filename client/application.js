Router.map(function() {
  this.route('home', {path: '/'})
});

if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to lunch-o-meter.";
  };

  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup


  });
}
