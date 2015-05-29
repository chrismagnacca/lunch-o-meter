Template.options.events({
  "click .up-vote": function(e) {
    Options.update(this._id, {$inc: {votes: 1}});
    var user = Meteor.user();
    /**
     * update the fact that the user has voted for an option
     */
  },

  "click .down-vote": function(e){
    if(Options.findOne(this._id).votes > 0)
      Options.update(this._id, {$inc: {votes: -1}});
  }
});

Template.options.options = function() {
  return Options.find({}, {sort: [["votes", "desc"], ["name", "asc"]]});
};
