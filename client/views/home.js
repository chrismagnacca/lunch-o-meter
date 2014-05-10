Template.home.events({
  'click input': function () {
    // template data, if any, is available in 'this'
    if (typeof console !== 'undefined')
      console.log("You pressed the button");
  }
});

Template.home.greeting = function () {
  return "Welcome to lunch-o-meter.";
};
