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
    // GET /admin/project/:id
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

    // GET /admin/project/:id/author -- RETURN string author FOR NOW
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

    // GET /admin/project/name/:key -- pagination
    app.get('/admin/project/name/:key', function(req, res){
        var pageNum = req.query.page ? req.query.page : 1;
        Project.paginate({name: req.params.key}, { page: pageNum, limit: pageLimit }, function(err, result){
            if (err)
                res.send("Connect find project(s) " + req.params.key);
            else{
                console.log(result);
                res.end(JSON.stringify(result,null,4));
            }
       }); 
    });

    // GET /admin/project/tag/:key -- pagination
    app.get('/admin/project/tags/:key', function(req, res){
        var pageNum = req.query.page ? req.query.page : 1;
        Project.paginate({tags: req.params.key}, { page: pageNum, limit: pageLimit }, function(err, result){
            if (err)
                res.send("Connect find project(s) with tag(s) " + req.params.key);
            else{
                console.log(result);
                res.end(JSON.stringify(result,null,4));
            }
       }); 
    });

    // GET /admin/project/author/:key -- pagination
    app.get('/admin/project/author/:key', function(req, res){
        var pageNum = req.query.page ? req.query.page : 1;
        Project.paginate({author: req.params.key}, { page: pageNum, limit: pageLimit }, function(err, result){
            if (err)
                res.send("Connect find project(s) by author(s) " + req.params.key);
            else{
                console.log(result);
                res.end(JSON.stringify(result,null,4));
            }
       }); 
    });
    
    // POST /admin/project
    app.post('/admin/project', function(req,res){        
        var newProject = new Project({
            name: req.body.name,
            about: req.body.about,
            thumbnail_img: req.body.thumbnail_img,
            carouseFiles: req.body.carouseFiles,
            tags: [req.body.tags],
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
                res.redirect('/#/admin');                
            }

        });
    });
    // PUT /project/:id
    /* 
        1. Must input's name as newdataProject in order to use this route
        2. "Content-Type": application/json
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
                // res.redirect('/');
            }
        });        
    });

    function isLoggedIn(req, res, next) {
        // if user is authenticated in the session, carry on
        if (req.isAuthenticated())
            return next();

        // if they aren't redirect them to the home page
        res.redirect('/#/signup');
 }

}