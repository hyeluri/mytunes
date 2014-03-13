// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.playing = false;
    this.on('dequeue',this.dequeue);

    // this.on('add', function (song) {
    //   // if the queue is currently empty
      // if (this.length > 0) {
   //     this.enqueue(song);
      // } else {
        // this.playFirst(song);
      // }
    //});
    //   if(this.playing){
    //     console.log(this.playing);
    //    this.playFirst(song)
    //   }else{
    //     this.addSong(song);
    //   }
    // },this);
  },

  enqueue : function(song){
    if (this.length === 1) {
      this.playFirst(song);
    }
  },

  playFirst: function(song){
    if(!this.playing){
      this.playing = true;
      song.play();
    }
     this.add(song);
  },

  playNext: function(song){
    this.at(this.indexOf(song)+1).play();
    this.remove(this.at(this.indexOf(song)));

  },

  dequeue: function(){
    if(this.models.length > 0){
      this.pop();
    }
  },





});