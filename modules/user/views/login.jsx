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

var Layout = require('../../views/layout.jsx');
var React = require('react');
var GoogleButton = require('../../react-global-components/GoogleButton.jsx');
var FacebookButton = require('../../react-global-components/FacebookButton.jsx');

module.exports = React.createClass({

    displayName: 'login',

    render: function render() {

        return (

          <Layout {...this.props}>
            <div id='login' className="col-md-10 col-md-offset-1">
                <div className="col-md-6 col-xs-12"><GoogleButton destination="/user/auth/google" message="Google" /></div>
                <div className="col-md-6 col-xs-12"><FacebookButton destination="/user/auth/facebook" message="Facebook" /></div>
            </div>
          </Layout>
        );
    }
});
