Template.home.events({
  "submit": function(e) {
    e.preventDefault();
    var input = $("input#option-to-add");
    Options.insert({ name: input.val(), votes: 1 });
    input.val("");
    Meteor.Helpers.UpdateSeriesData();
  },

  "click .remove-option": function(e) {
    var id = $(e.target).closest("li").prop("id");
    Options.remove({_id: id});
    Meteor.Helpers = Meteor.Helpers || {};
    Meteor.Helpers.UpdateSeriesData();
  }
});
