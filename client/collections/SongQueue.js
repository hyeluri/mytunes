// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
  },
  events: {
    'add': function () {
      console.log("Something got added.");
    }
  }



});