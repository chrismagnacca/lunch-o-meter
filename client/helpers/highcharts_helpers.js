Meteor.Helpers = Meteor.Helpers || {};

Meteor.Helpers.UpdateSeriesData = function() {
    var seriesData = [];
    var options = Options.find({});

    options.forEach(function(option) {
      var dataPoint = [option.name, option.votes];
      seriesData.push(dataPoint);
    });

    pChart.series[0].setData(seriesData, true);
};
