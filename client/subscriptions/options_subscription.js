Deps.autorun(function(){
  Meteor.subscribe("option");

  Meteor.subscribe("options", function() {
    var seriesData = [];
    var options = Options.find({});

    options.forEach(function(option) {
      var dataPoint = [option.name, option.votes];
      seriesData.push(dataPoint);
    });

    chartOptions = {
          chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: "pie",
          renderTo: "highchart"
      },
      title: {
          text: ''
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                  style: {
                      color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                  }
              }
          }
      },
      credits: {
        enabled: false
      },
      series: [{
          type: 'pie',
          name: 'Lunch Options',
          data: seriesData
      }]
    }

    pChart = new Highcharts.Chart(chartOptions);
  });
});
