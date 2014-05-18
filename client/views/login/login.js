Template.login.events({
  'submit #login-form' : function(e, t){
    e.preventDefault();

    var email = t.find('#login-email').value
    var password = t.find('#login-password').value;

    email = Meteor.call("Trim", email);

    if(Meteor.call("IsValidPassword", password))
      Meteor.loginWithPassword(email, password, function(error) {
        if (error) {
          // user login has failed due to bad password or email
        } else {
          // user has been logged in.
        }
      });
    else
      return false;
  }
});
