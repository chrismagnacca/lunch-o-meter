Meteor.startup(function () {
  /**
   * ensure User data cannot be updated via Client
   */
  Meteor.users.deny({
    update: function() {
      return true;
    }
  });
});
