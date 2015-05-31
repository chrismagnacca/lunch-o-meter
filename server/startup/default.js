Meteor.startup(function () {
  /**
   * ensure User data cannot be updated via Client
   */
  Votes.remove({});
  Meteor.users.deny({
    update: function() {
      return true;
    }
  });
});
