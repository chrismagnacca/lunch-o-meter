Template.login.events({
  'submit form#login-form' : function(e, t){
    e.preventDefault();
    var $flash = $("div.flash");
    $flash.hide();
    var email = t.find('#login-email').value
    var password = t.find('#login-password').value;

    if(typeof(password) != "undefined")
      Meteor.loginWithPassword(email, password, function(error) {
        if (error) {
          // user login has failed due to bad password or email
          var $msg = $("div#message");
          var message = "Sorry, ".concat(error.reason);

          $msg.text(message);
          $flash.css("background", "#F2DEDE");
          $flash.toggle();
        } else {
          // user has been logged in.
          $flash.hide();
          $("#modal").modal("hide");
        }
      });
    else
      return false;
  }
});
