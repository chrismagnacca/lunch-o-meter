Template.options.events({
  "click .up-vote": function(e) {
    Options.update(this._id, {$inc: {votes: 1}});
    
    var user = Meteor.user();

    var voteOptions = { 
      voted: true,
      option: this._id,
      userId: Meteor.userId()
    };

    var vote = Votes.find(voteOptions).fetch();


    if(vote.length === 0) {
      debugger;
      Votes.insert(voteOptions);
    } else {
      debugger;
      Votes.update({ _id: vote._id },{ $set: voteOptions });
    }
  },

  "click .down-vote": function(e){
    if(Options.findOne(this._id).votes > 0)
      Options.update(this._id, {$inc: {votes: -1}});
  }
});

Template.options.options = function() {
  return Options.find({}, {sort: [["votes", "desc"], ["name", "asc"]]});
};
