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
    // GET /project/:id -- RETURN string author FOR NOW
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
    // POST /project
    app.post('/project', function(req,res){
        console.log("LOOKING FOR? >>> " + req.body.name);
        var newProject = new Project({
            name: req.body.name,
            about: req.body.about,
            thumbnail_img: req.body.thumbnail_img,
            carouseFiles: req.body.carouseFiles,
            views: 0,
            likes: 0,
            downloads: 0,
            author: req.body.author, //FOR NOW
            team: req.body.team,
            authorImg: req.body.authorImg  
        });
        Project.create(newProject, function(err, createdProject){
            if (err){
                console.log("Error creating new project");
                // res.redirect('/#/');
                res.send("ERROR CREATING NEW PROJECT");
            }
            else { // succesful insert = redirect to HOME
                console.log(createdProject);
                res.redirect('/');                
            }

        });
    });
    // PUT /project/:id
    /* 
        Must input's name as newdataProject inorder to use this route
    */
    app.put('/project/:id', function(req,res){
        /*
            req.params.id: id of project to be updated
            newdataProject: name of <input> from HTMl (ASSUMPTION)
        */
        var newdataProject = req.body.newdataProject;
        Project.findByIdAndUpdate(req.params.id, newdataProject, function(err, updatedProject){
            if (err){
                console.log("Error updating project " + newdataProject.name);
                res.send("Error updating project " + newdataProject.name);
            }
            else {
                console.log(updatedProject);
                res.send(JSON.stringify(updatedProject,null,4));
            }
        });        
    });
    // GET /project/:tag/:title
    // PUT /project
}