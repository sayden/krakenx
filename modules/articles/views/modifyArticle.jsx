'use strict';

var React = require('react');
var Reflux = require('reflux');
var Store = require('../ArticlesStore.jsx');
var Actions = require('../ArticlesActions.jsx');

module.exports = React.createClass({
  mixins: [ Reflux.connect(Store, 'articles') ],

  displayName: 'update-article',

  OnClick: function OnClick(){
    var title = this.refs.title;
    var content = this.refs.content;
    console.log(title, content);
    Actions.updateArticle({title:"Something", content:"content"});
  },

  render: function render(){
    if(this.state.articles){
      console.log(this.state.articles);
    } else {
      console.log('No articles');
    }
    return (
      <div>
        <h1>Update Article</h1>
        <button onClick={this.OnClick}>Test</button>
        <form className="col-sm-8">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" id="title" ref="title" placeholder="title" />
          </div>
          <div className="form-group">
            <label htmlFor="textarea">Article body</label>
            <textarea className="form-control" ref="content" rows="3"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <div className="col-md-12">
          <h4>Links</h4>
          <a href="/article">Article home</a>
        </div>
      </div>
    )
  }
});
