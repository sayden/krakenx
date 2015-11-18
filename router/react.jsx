/*-------------------------------------------------------------------------------------------------------------------*\
 |  Copyright (C) 2015 PayPal                                                                                          |
 |                                                                                                                     |
 |  Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance     |
 |  with the License.                                                                                                  |
 |                                                                                                                     |
 |  You may obtain a copy of the License at                                                                            |
 |                                                                                                                     |
 |       http://www.apache.org/licenses/LICENSE-2.0                                                                    |
 |                                                                                                                     |
 |  Unless required by applicable law or agreed to in writing, software distributed under the License is distributed   |
 |  on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for  |
 |  the specific language governing permissions and limitations under the License.                                     |
 \*-------------------------------------------------------------------------------------------------------------------*/

'use strict';

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var App = require('../modules/views/app.jsx');
var Home = require('../modules/views/home.jsx');
var NewArticle = require('../modules/articles/views/new_article.jsx');
var Articles = require('../modules/articles/views/article.jsx');
var Login = require('../modules/user/views/login.jsx');

var routes = module.exports = (
  <Route path='/' handler={App}>
      <Router.DefaultRoute name='home' handler={Home} />
      <Route path='/user/login' name='login' handler={Login} />
      <Route path='/article' name='article' handler={Articles} />
      <Route path='/article/new' name='article-new' handler={NewArticle} />
  </Route>
);
