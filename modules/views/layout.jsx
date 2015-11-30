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
var NavBar = require('./NavBar.jsx');
var glob = require('glob');

module.exports = React.createClass({
  render: function render() {

    return (
        <html>
            <head>
              <meta charSet="utf-8" />
              <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />

              <title>{this.props.title}</title>

              <link rel="stylesheet" href="/components/bootstrap/dist/css/bootstrap.css"/>
              <link rel="stylesheet" href="/components/bootstrap-social/bootstrap-social.css"/>
              <link rel="stylesheet" href="/components/font-awesome/css/font-awesome.css"/>
              <NavBar routes={this.props.routes} />
            </head>
            <body>
              <div className="col-md-10 col-md-offset-1">
                {this.props.children}
              </div>
            <script src="/components/jquery/dist/jquery.min.js"></script>
            <script src="/components/bootstrap/dist/js/bootstrap.js"></script>
            <script src="/components/qwest/qwest.min.js"></script>
            <script src='/bundle.js'></script>
            </body>
        </html>
    );
  }
});
