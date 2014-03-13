// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    var playing = false;
  },

  playFirst: function(song){
    //console.log(this.models.length);
    if(!this.playing){
      this.playing = true;
      song.play();
    } else {
       this.add(song);
    }
  },

  removeLast: function(){
    // console.log(this.models.length);
    console.log(this);
    if(this.models.length > 0){
      this.pop();
    }
  }



});