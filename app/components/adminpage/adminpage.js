var React = require('react');
var ReactRouter = require('react-router');
var $ = require('jquery');
var ProjectPage = require('./AdminProject');
var ProjectCreateForm = require('./ProjectCreateForm');
const useUrl = 'http://localhost:3000';
let S = {
    popOuter: {
        backgroundColor: "rgba(0,0,0,0.5)",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "none",
    },
    popInner: {
        backgroundColor: "#fff",
        width: "700px",
        borderRadius: "5px",
        overflow: "scroll",
        height: "80%",
        padding: "25px",
        margin: "10% auto 25% auto",
        position: "relative"
    },
    cancelButton: {
        float: "right",
    },
    fakeDataContainer: {
        width: '500px',
        height: '300px'
    }
};

var AdminPage = React.createClass({
    getInitialState: function() {
        return {
            data: [],
        };
    },
    cancelForm: function(event){
        let eleOuter = document.getElementsByClassName("popOuter");
        console.log("cancelling form");
        eleOuter[0].style.display = "none";
    },
    showCreateFrom: function(event){
        let eleOuter = document.getElementsByClassName("popOuter");
        eleOuter[0].style.display = "block";
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
                <div style={{display:"block", width:"100%", height: "1500px", color: "black", marginTop: "100px"}}>
                    <ProjectPage />
                    <div style={{width: "100%", height: "200px", marginTop: "20px"}}>
                        <button className="btn btn-primary" style={{position: "fixed", top: "240", left: "40", width: "130px"}}
                                onClick={this.showCreateFrom.bind(this)}>Create Project</button>
                        <button className="btn btn-danger" style={{position: "fixed", top: "280", left: "40", width: "130px"}}
                                onClick={this.updateProject.bind(this)}>Edit Project</button>
                    </div>
                    <div className="popOuter" style={S.popOuter}>
                        <div className="pop-inner" style={S.popInner}>
                            <button className="btn btn-danger" style={S.cancelButton} onClick={this.cancelForm.bind(this)}>X</button>
                            <ProjectCreateForm/>
                        </div>
                    </div>
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