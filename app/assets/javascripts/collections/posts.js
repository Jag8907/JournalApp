JournalApp.Collections.Posts = Backbone.Collection.extend({
  
  getOrFetch: function(id) {
    var post = this.get(id);
    if ('undefined' === typeof(post)){
      post = new JournalApp.Models.Post({id: id});
      post.fetch();
    }
    
    return post;
  },
  
  url: "/posts",
  model: JournalApp.Models.Post
});

JournalApp.Collections.posts = new JournalApp.Collections.Posts()