Meteor.publish("highcharts", function () {
  var self = this;
  var seriesData = [];
  var options = Options.find({});

  for(var i = 0; i < options.count(); i++) {
    seriesData[i] = [option.name, parseInt(option.votes)];
  }



  var handle = Options.find({}).observeChanges({
    added: function(id) {
      alert("Added");
    },
    removed: function(id) {

    },
    changed: function(id) {

    }
  });

  self.ready();

  self.onStop(function(){
    handle.stop();
  });
});
