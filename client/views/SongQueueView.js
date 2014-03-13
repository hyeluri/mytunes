// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.render();

    this.collection.on('add',function(song){
      this.render();
    }, this);

    this.collection.on('remove',function(){
      this.render();
    }, this);


  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/desongtach/
    this.$el.children().detach();
    var $button = $('<button id="dequeue">Dequeue</button>');
    this.$el.html('<th>Song Queue</th>');
    this.$el.append($button);
    this.$el.append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );

  },

  events: {
    'click #dequeue': function () {
      this.collection.models[this.collection.models.length-1].dequeue();
    }
  },




  playFirst: function() {

  }
});
