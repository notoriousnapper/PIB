var React = require('react');
var Category = require('../../components/projectlistings/Category');
var Frame= require('../../components/Frame');
var Pad= require('../../components/Pad');
var http = require('http');
var $ = require('jquery');
var devUrl = 'http://localhost:3000';
var prodUrl = 'https://still-forest-90731.herokuapp.com';
/* Use devUrl or prodUrl*/
var useUrl = devUrl;
var ProjectSearchList = require('./AdminProjectSearchList');
var Projects = React.createClass({
    getInitialState: function() {
        return {
            clicks: 0,
            data: []
        };
    },
    getPopularProjects: function(){
        $.ajax({
            url: useUrl + '/getpopular',
            dataType: 'json',
            cache: false,
            success: function(res) {
                this.setState({
                    data: res,
                    //  clicks: this.state.clicks + 1
                });
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(prodUrl, status, err.toString());
            }.bind(this)
        });
    },
    getMostViewsProjects: function(){
        $.ajax({
            url: useUrl + '/getviews',
            dataType: 'json',
            cache: false,
            success: function(res) {
                this.setState({
                    data: res
                });
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(prodUrl, status, err.toString());
            }.bind(this)
        });
    },
    getAllProjects: function(evt) {
        $.ajax({
            url: useUrl + '/get',
            dataType: 'json',
            cache: false,
            success: function(res) {
                this.setState({
                    data: res,
                    clicks: this.state.clicks + 1
                });

            }.bind(this),
            error: function(xhr, status, err) {
                console.error(useUrl, status, err.toString());
            }.bind(this)
        });
    },
    componentDidMount: function(){
        this.getAllProjects();
    },

    render: function() {
        var params = this.props;
        var id = params.id;
        var containerStyle = {zIndex:"1000", paddingTop: "100px", paddingLeft: "200px", paddingRight: "100px", paddingBottom: "100px", display: "flex", flexDirection: "column", height: "100%",
            margin: "0 auto"
        }
        var projectListStyle = {flex: "5"}
        var paddingStyle = {height: "100px", flex: "1"}
        var buttonStyle={
            width:"60px",
            height:"60px",
            borderStyle: "none",
            display: "flex",
            backgroundColor: "#FAC129",
            paddingLeft:"12px",
            textAlign: "center",
            paddingLeft:"20px"
        };
        return (
            <div style={containerStyle}>
                <Frame style={{display:"inline-block"}}>
                    <div style={{display:"flex", flexDirection: "column",
                        backgroundColor: "#F4F4F4",
                    }}>
                        <ProjectSearchList style={projectListStyle} projectListData={this.state.data} id={id}/>
                        <div style={{display:"flex", paddingTop:"30px"}}>
                            <Pad hw={['100px', '45%']}/>
                            <Pad hw={['100px', '30%']}/>
                        </div>
                    </div>
                </Frame>
            </div>
        );
    }
});
module.exports = Projects;