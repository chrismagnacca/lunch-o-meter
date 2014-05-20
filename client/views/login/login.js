Template.login.events({
  'submit #login-form' : function(e, t){
    e.preventDefault();

    var email = t.find('#login-email').value
    var password = t.find('#login-password').value;

    if(typeof(password) != "undefined")
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
