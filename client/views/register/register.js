Template.register.events({
  'submit #register-form' : function(e, t) {
    e.preventDefault();
    var email = t.find('#account-email').value
    var password = t.find('#account-password').value;

    email = Meteor.call("Trim", email);

    if(Meteor.call("IsValidPassword", password))
      Accounts.createUser({email: email, password : password}, function(err){
          if (err) {
            // account creation failed
          } else {
            // account has been created & the user logged in successfully.
          }

      });
    else
      return false;
  }
});
