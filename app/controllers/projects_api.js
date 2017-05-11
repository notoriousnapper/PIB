var mongoose = require('mongoose');
// var configDB = require('../../app/config/database.js');
// mongoose.connect(configDB.url); // connect to our database
var Project = require('../models/project.js');

module.exports.set = function(app) 
{
    // GET /projects
    app.get('/project', function(req, res){
        Project.find({}, function(err, result){
            if (err)
                console.log('ERROR GETTING ALL PROJECTS');
            else{
                res.end(JSON.stringify(result, null, 4));
            }
        })
    });
    // GET /project/:id
    app.get('/project/:id', function(req, res){
        Project.findById(req.params.id, function(err, project){
            if (err) {
                console.log('ERROR GETTING PROJECT WITH ID: ' + req.params.id);
                // $$$$$$$$$$$$$$$$$ TESTING
                res.send("Cannot find project!");
            }
            else
                res.end(JSON.stringify(project, null, 4));
        })
    });
    // GET /project/:id
    app.get('/project/:id/author', function(req, res){
        Project.findById(req.params.id, function(err, project){
            if (err) {
                console.log('ERROR GETTING PROJECT WITH ID: ' + req.params.id);
                // $$$$$$$$$$$$$$$$$ TESTING
                res.send("Cannot find project!");
            }
            else {                
                res.end(JSON.stringify(project.author, null, 4));
            }
        })
    });
    // GET /project/:tag/:title
    // PUT /project
}