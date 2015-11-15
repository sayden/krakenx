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

var express = require('express');
var kraken = require('kraken-js');
var nodeJSX = require('node-jsx');
var passport = require('passport');
var flash = require('connect-flash');

var options, app;

/*
 * Create and configure application. Also exports application instance for use by tests.
 * See https://github.com/krakenjs/kraken-js#options for additional configuration options.
 */
options = {
    onconfig: function (config, next) {
        /*
         * Add any additional config setup or overrides here. `config` is an initialized
         * `confit` (https://github.com/krakenjs/confit/) configuration object.
         */

        next(null, config);
    }
};

// install node-jsx, so that we
// can require `.jsx` files in node.
nodeJSX.install({
    extension: '.jsx'
});

// Setup Mongo
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

app = module.exports = express();

app.on('middleware:after:session', function configPassport(eventargs) {
  //Setup passport
  var passport = require('passport');
  var googleSetup = require('./config/credentials/google')(passport);
  var facebookSetup = require('./config/credentials/facebook')(passport);
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(flash())
});

app.use(kraken(options));

app.on('start', function () {
    console.log('Application ready to serve requests.');
    console.log('Environment: %s', app.kraken.get('env:env'));
});
