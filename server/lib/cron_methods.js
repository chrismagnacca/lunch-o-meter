// * * * * *  command to execute
// ┬ ┬ ┬ ┬ ┬
// │ │ │ │ │
// │ │ │ │ │
// │ │ │ │ └───────────────── min  (0-59)
// │ │ │ └─────────────────── hour (0-23)
// │ │ └───────────────────── day of month  (1-31)
// │ └─────────────────────── month of year (1-12)
// └───────────────────────── day of week   (0-7 is Sun, or use names)
var archive = function() {
  // store current day data series & reset options data for next day
  var seriesData = [];
  var options = Options.find({});

  options.forEach(function(option) {
  var dataPoint = [option.name, option.votes];
    seriesData.push(dataPoint);
  });

  var currentTime = new Date();
  Archives.insert({ series: seriesData, date: currentTime });
};

var Cron = new Meteor.Cron({
  events: {
    "0 0 * * *" : archive
  }
});
