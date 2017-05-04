var mongoose = require('mongoose');
var configDB = require('../../app/config/database.js');
mongoose.connect(configDB.url); // connect to our database
var Project = require('../models/project.js');

module.exports.set = function(app) 
{
    // GET /projects
    app.get('/projects', function(req, res){
        Project.find({}, function(err, result){
            if (err)
                console.log('ERROR GETTING ALL PROJECTS');
            else{
                console.log('BINGO');
                res.end(JSON.stringify(result, null, 4));
            }
        })
    });
    // GET /project/:tag/:title
    // PUT /project
}