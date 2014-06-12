Meteor.methods({
  PieChart: function() {
    return Highcharts.charts[0];
  },

  UpdateSeriesData: function() {
    var seriesData = [];
    var options = Options.find({});

    options.forEach(function(option) {
      var dataPoint = [option.name, option.votes];
      seriesData.push(dataPoint);
    });

    Meteor.call("PieChart").series[0].setData(seriesData, true);
  }
});
