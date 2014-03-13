// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  initialize:function(){
    // var de = $("#dequeue");
    // console.log(de);
    // de.on('click',function(){
    //    this.model.dequeue();
    // });
  },
  
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),


  events: {
   'click' : function () {
    
      this.model.dequeue();
    }

  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
