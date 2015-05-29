Meteor.methods({
  PieChart: function() {
  if(typeof(Highcharts) != "undefined")
    return Highcharts.charts[0];
  },

  UpdateSeriesData: function() {
    var seriesData = [];
    var options = Options.find({});

    options.forEach(function(option) {
      var dataPoint = [option.name, option.votes];
      seriesData.push(dataPoint);
    });

    if(typeof(Highcharts) != "undefined")
      Meteor.call("PieChart").series[0].setData(seriesData, true);
  }
});
