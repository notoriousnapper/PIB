var mongoose = require('mongoose');
// var configDB = require('../../app/config/database.js');
// mongoose.connect(configDB.url); // connect to our database
var Project = require('../models/project.js');
/*
    API for admin panel
    All routes start with /admin/project
*/
module.exports.set = function(app) 
{
    const pageLimit = 6;
    // GET (ALL) /projects -- pagination
    /*  PAGNIATION documentation
        1. 'result' object is returned by db has format:
            "result": {
                "docs": []  // array for projects (max = pageLimit),
                "total": ,  // total numbers of projects
                "limit": ,  // number of project returned per page (6 by default)
                "page": ,   // current page (1, 2, 3, etc)
                "pages": ,  // total numbers of pages
            }
        2. Default will load page 1, to load other page, use Query String:
            Ex: Load page 2 = https://<url>/admin/project?page=2
    */
    app.get('/admin/project', function(req, res){        
        var pageNum = req.query.page ? req.query.page : 1;
        console.log("Getting " + pageNum);
        Project.paginate({}, { page: pageNum, limit: pageLimit }, function(err, result){
            if (err)
                console.log('ERROR GETTING ALL PROJECTS');
            else {
                res.end(JSON.stringify(result, null, 4));            
            }
        });
    });
    // GET /project/:id
    app.get('/admin/project/:id', function(req, res){
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

    // GET /project/:id/author -- RETURN string author FOR NOW
    app.get('/admin/project/:id/author', function(req, res){
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

    // GET /project/:name -- pagination
    app.get('/admin/project/query/:name', function(req, res){
        var pageNum = req.query.page ? req.query.page : 1;
        Project.paginate({name: req.params.name}, { page: pageNum, limit: pageLimit }, function(err, result){
            if (err)
                res.send("Connect find project(s) " + req.params.name);
            else{
                console.log(result);
                res.end(JSON.stringify(result,null,4));
            }
       }); 
    });
    
    // POST /project
    app.post('/admin/project', function(req,res){        
        var newProject = new Project({
            name: req.body.name,
            about: req.body.about,
            thumbnail_img: req.body.thumbnail_img,
            carouseFiles: req.body.carouseFiles,
            tags: req.body.tag,
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
    app.put('/admin/project/:id', function(req,res){
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

}