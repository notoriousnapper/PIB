var mongoose = require('mongoose');

var mongo = require('./mongo.js');
var project_api = require('./projects_api.js');
module.exports.set = function(app) {
   // copy your routes listed in your app.js directly into here
  mongo.set(app);//
  project_api.set(app);
}
