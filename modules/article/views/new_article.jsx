'use strict';

var React = require('react');
var Reflux = require('reflux');
var Store = require('../ArticlesStore.jsx');
var Actions = require('../ArticlesActions.jsx');

module.exports = React.createClass({
  mixins: [ Reflux.connect(Store, 'articles') ],

  displayName: 'new-article',

  OnClick: function OnClick(){
    var title = this.refs.title.getDOMNode().value;
    var content = this.refs.content.getDOMNode().value;

    Actions.addArticle({title:title, content:content});
  },

  render: function render(){
    
    return (
      <div>
        <h1>New Article</h1>
        <form className="col-sm-8" action="/article">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" id="title" ref="title" placeholder="title" />
          </div>
          <div className="form-group">
            <label htmlFor="textarea">Article body</label>
            <textarea className="form-control" ref="content" rows="3"></textarea>
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.OnClick}>Submit</button>
        </form>
        <div className="col-md-12">
          <h4>Links</h4>
          <a href="/article">Article home</a>
        </div>
      </div>
    )
  }
});
