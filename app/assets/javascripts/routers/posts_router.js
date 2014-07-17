JournalApp.Routers.PostsRouter = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.$sideBar = options.$sideBar;
  },
  
  routes: {
    "": "postsIndex",
    "posts/new": "postForm",
    "posts/:id": "postsShow"
  },
  
  postsIndex: function () {
    JournalApp.Collections.posts.fetch();
    var indexView = new JournalApp.Views.PostsIndex({
      collection: JournalApp.Collections.posts
    });
    this.$sideBar.html(indexView.$el);
  },
  
  postsShow: function (id) {
    var post = JournalApp.Collections.posts.getOrFetch(id);
    var showView = new JournalApp.Views.PostsShow({
      model: post
    })
    this.$rootEl.html(showView.render().$el);
  },
  
  postForm: function () {
    var newPost = new JournalApp.Models.Post()
    var showForm = new JournalApp.Views.PostForm({
      model: newPost,
      collection: JournalApp.Collections.posts
    })
    this.$rootEl.html(showForm.render().$el);
  }
  
});
