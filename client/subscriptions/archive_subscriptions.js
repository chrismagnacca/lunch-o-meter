Meteor.subscribe("archives", function() {
  Archives.find({}).observe({
    changed: function(id, fields){
    },
    removed: function(id) {
    },
    added: function(id) {
    }
  });
});
