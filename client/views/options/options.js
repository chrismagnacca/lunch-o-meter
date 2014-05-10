Template.options.events({
  "click .up-vote": function(e) {
    var id = $(e.target).closest("li").prop("id");
    var option = Options.findOne({_id: id});
    Options.update(id, {name: option.name, votes: (option.votes + 1)});
  },

  "click .down-vote": function(e){
    var id = $(e.target).closest("li").prop("id");
    var option = Options.findOne({_id: id});
    Options.update(id, {name: option.name, votes: (option.votes - 1)});
  }
});
