Template.options.events({
  "click .up-vote": function(e) {
    Options.update(this._id, {$inc: {votes: 1}});
    Meteor.Helpers.UpdateSeriesData();
  },

  "click .down-vote": function(e){
    Options.update(this._id, {$inc: {votes: -1}});
    Meteor.Helpers.UpdateSeriesData();
  }
});

Template.options.options = function() {
  return Options.find({}, {sort: [["votes", "desc"], ["name", "asc"]]});
};
