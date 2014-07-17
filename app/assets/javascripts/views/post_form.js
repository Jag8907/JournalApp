JournalApp.Views.PostForm = Backbone.View.extend({
  template: JST['posts/post_form'],
  
  events: {
    "submit form": "submit"
  },
  
  submit: function(event){
    var params = $(event.currentTarget).serializeJSON();
    var that = this;
    event.preventDefault();
    
    if (this.model.isNew()){
      this.collection.create(params['post'], {
        success: function() {Backbone.history.navigate('#/')},
        error: function () {that.render()},
        wait: true
      })
    }else{
      this.model.save(params['post'], {
        success: function() {Backbone.history.navigate('#/')},
        error: function () {that.render()}
      })
    }
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
  
});

