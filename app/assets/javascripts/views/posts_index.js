JournalApp.Views.PostsIndex = Backbone.View.extend({
  template: JST['posts/index'],
  
  events: {
    "click button.delete": "delete"
  },
  
  initialize: function(options) {
    this.listenTo(this.collection, 'add sync remove change:title reset', this.render)
  },
  render: function () {
    var content = this.template({posts: this.collection})
    this.$el.html(content);
    return this;
  },
  
  delete: function() {
    var postId = $(event.target).attr("data-id");
    var post = this.collection.get(postId);
    post.destroy();
  }
});

