Handlebars.registerHelper("retrieveSelectedOption", function(e) {
  var id = $(e.target).closest("li").prop("id");
  var option = Options.findOne({_id: id});
  return option;
});
