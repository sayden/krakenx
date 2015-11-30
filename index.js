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
var session = require('express-session');
var cookieParser = require('cookie-parser');
var kraken = require('kraken-js');
var nodeJSX = require('node-jsx');
var passport = require('passport');
var flash = require('connect-flash');
var glob = require('glob');
var Utils = require('./lib/utils');
var User = require('./modules/user/models/User');

var app = module.exports = express();

//Inject modules names to fill nav bar routes.
//By default article and user
app.use(Utils.injectModulesNames());

//Inject user on each request
app.use(User.injectUser());

// Main entrance point
app.get('/', function (req, res) {
  res.render(req.url, {});
});


//Add static resources folders
app.use(express.static('./modules'));
app.use(express.static('./public/components'));

var options;

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

// install node-jsx, so that we can require `.jsx` files in node.
nodeJSX.install({
    extension: '.jsx'
});

// Setup Mongo
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/krakenx');


app.on('middleware:after:session', function configPassport(eventargs) {

  //Setup passport
  require('./config/credentials/google')(passport);
  require('./config/credentials/facebook')(passport);
  app.use(passport.initialize());
  app.use(passport.session());

  //Init express router
  var Utils = require('./lib/utils');
  Utils.initRoutes(app);


  app.use(flash());
});

app.use(kraken(options));


app.on('start', function () {
    console.log('Application ready to serve requests.');
    console.log('Environment: %s', app.kraken.get('env:env'));
});
