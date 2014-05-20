Template.register.events({
  'submit #register-form' : function(e, t) {
    e.preventDefault();

    var email = t.find('#account-email').value;
    var password = t.find('#account-password').value;


    if(typeof(password) != "undefined") {
      Accounts.createUser({email: email, password : password}, function(err){
        if (err) {
          // account creation failed
        } else {
          // log in account
        }
      });
    } else {
      return false;
    }
  }
});
