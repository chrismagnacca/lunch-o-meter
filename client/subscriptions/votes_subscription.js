Meteor.subscribe("votes", function(){
   Votes.find({}).observe({
    changed: function(id, fields){
    },
    removed: function(id) {
    },
    added: function(id) {
    }
  }); 
});
