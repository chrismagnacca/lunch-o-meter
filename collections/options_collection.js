Options = new Meteor.Collection("options");

Options.find({}).observeChanges({
	changed: function(id, fields) {
		Meteor.Helpers.UpdateSeriesData();
	}
});
