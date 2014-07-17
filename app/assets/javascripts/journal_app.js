window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    JournalApp.Collections.posts.fetch();
    
    new JournalApp.Routers.PostsRouter({
      $rootEl: $("#content"), 
      $sideBar: $("#sidebar")
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  JournalApp.initialize();
});
