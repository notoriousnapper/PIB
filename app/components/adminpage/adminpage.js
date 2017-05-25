var React = require('react');
var ReactRouter = require('react-router');
var $ = require('jquery');

const useUrl = 'http://localhost:3000';

var AdminPage = React.createClass({

    getInitialState: function() {
        return {
            data: []
        };
    },

    getAllProjects: function(evt) {
        console.log("getAllprioject called");
        $.ajax({
            url: useUrl + '/admin/project',
            dataType: 'json',
            cache: false,
            success: function(res) {
                this.setState({
                    data: res,
                });
                console.log("printing data");
                console.log(this.state.data);
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(useUrl, status, err.toString());
            }.bind(this)
        });
    },

    createProject: function(evt){
        console.log("button clicked");
        let tempData = {
            name: "lala",
            about: "llalalala",
            thumbnail_img: "http://res.cloudinary.com/dgs4woesz/image/upload/v1495058583/noab4dkuisgspn5pyafi.jpg",
            carouseFiles: "",
            tags: ['bad prject'],
            author: "Jesse Ren",
            team: " Jesee Team",
            authorImg: "http://res.cloudinary.com/dgs4woesz/image/upload/v1495058583/noab4dkuisgspn5pyafi.jpg"
        };
        $.ajax({
            type: "POST",
            url: useUrl + '/admin/project',
            cache: false,
            data: tempData,
            success: function() {
                console.log("successful");
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(useUrl, status, err.toString());
            }.bind(this)
        });
    },

    updateProject: function(evt){
        console.log("edit button clicked");
        let id = "59272e5d7ffe053f23b15409";
        let tempData = {
            "newdataProject": {
                 name: "lalababa123",
                 about: "llalalalababababababab",
                 thumbnail_img: "http://res.cloudinary.com/dgs4woesz/image/upload/v1495058583/noab4dkuisgspn5pyafi.jpg",
                 carouseFiles: "",
                 tags: ['bad prject'],
                 author: "Jesse Ren",
                 team: " Jesee Team",
                 authorImg: "http://res.cloudinary.com/dgs4woesz/image/upload/v1495058583/noab4dkuisgspn5pyafi.jpg"
            }
        };
        $.ajax({
            type: "PUT",
            url: `${useUrl}/admin/project/${id}`,
            dataType: 'json',
            cache: false,
            data: tempData,
            success: function() {
                console.log("successful updated");
                // similar behavior as an HTTP redirect
                // ReactRouter.redirectTo('admin');
                window.location.replace(`${useUrl}/#/about`);
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(useUrl, status, err.toString());
            }.bind(this)
        });
    },

    componentDidMount: function(){
        this.getAllProjects();
    },
    render: function(){
        if(this.state.data){
            return(
                <div style={{display:"block", width:"100%", height: "600px", color: "black", marginTop: "100px"}}>
                    <button className="btn btn-primary" style={{float: "left"}}>Lala</button>
                    <button className="btn btn-primary" style={{float: "left"}}
                            onClick={this.createProject.bind(this)}>Create Project</button>
                    <button className="btn btn-danger" style={{float: "left"}}
                            onClick={this.updateProject.bind(this)}>Edit Project</button>
                </div>
            )
        }else{
            return(
                <div></div>
            )
        }

    }
});

module.exports = AdminPage;