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

var Routes = require('./router.jsx');
var Client = require('react-engine/lib/client');

//Include all view files. Browerify doesn't do this automatically as it can
//only operate on static require statements.

var bulk = require('bulk-require');
bulk(__dirname, ['views/*.jsx', '**/views/*.jsx']);

// boot options
var options = {
    routes: Routes,
  //supply a function that can be called to resolve the file that was rendered.
    viewResolver: function(viewName) {
        return require('./' + viewName);
    }
};

if(typeof document === 'undefined'){
  console.log('FIXME: modules/main.js loading in server');
} else {
  document.addEventListener('DOMContentLoaded', function onLoad() {
    Client.boot(options);
  });
}
