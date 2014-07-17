JournalApp.Views.PostsShow = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
  },
  
  events: {
    "dblclick li#title": "editTitle",
    "dblclick li#body": "editBody", 
    "blur input#title": "update",
    "blur input#body": "update"
  },
  
  template: JST['posts/show'],
  
  render: function () {
    var content = this.template({post: this.model});
    this.$el.html(content);
    return this;
  },
  
  editTitle: function (){
    var val = $(event.target).text();
    var id = $(event.target).attr("data-id");
    var content = "<input data-id='"+id+"' id='title' type='text' name='post[title]' value='"+val+"'>";
    $('li#title').html(content);
    return this;
  },
  
  editBody: function (){
    
    
  },
  
  update: function() {
    alert('onblurring');
    var postId = $(event.target).attr("data-id");
    var title = $(event.target).attr("value");
    var post = this.collection.get(postId);
    post.set({"title": title});
  }
  
});