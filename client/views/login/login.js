Template.login.events({
  'submit form#login-form' : function(e, t){
    e.preventDefault();
    $("div.flash").hide();
    var credentials = { email: $('#login-email').val(), password: $('#login-password').val() };
    if(typeof(credentials.password) != "undefined")
      Meteor.loginWithPassword(credentials.email, credentials.password, function(error) {
        if (error) {
          $("div#message").text("Sorry, ".concat(error.reason));
          $("div.flash").css("background", "#F2DEDE");
          $("div.flash").toggle();
        } else {
          $("div.flash").hide();
          $("#login").modal("hide");
        }
      });
    else
      return false;
  }
});
