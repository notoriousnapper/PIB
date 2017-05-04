var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var ProjectPage = require('./AdminProject');

var AdminNav = React.createClass({
        render: function(){
          var navbar = {
            width:"100%",
            height:"100%",
            backgroundColor: "white",
            zIndex:"3",
          };
          var navList = {
            position:"absolute",
            left:"20",
            top:"70px",
          };
          var bottomStyle= {
                  fontFamily: 'lucida grande, Helvetica',
                  fontSize: '20px',
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "40px",
                  color: "#164065",
                  padding: "0 15px",
                  border: "2px solid black",
                  boxShadow: "5px 5px black",
                  marginBottom: "5px"
          };
          return (
            <div style={navbar}>
              <div style={navList}>
                <div style={bottomStyle} onClick={this.projectClick}>Projects</div>
                <div style={bottomStyle} onClick={this.userClick}>Users</div>
                <div style={bottomStyle} onClick={this.dataClick}>Data</div>
              </div>

            </div>
          )
        }
});


var Projects = React.createClass({
  getInitialState: function() {
    return {
      position: 1,
      data: []
    };
  },
  render: function(){
        var menu =['Projects', 'Users', 'Data']

        var textStyle = {
        }

        return(
            <div>
                <AdminNav items={menu}/>
                <ProjectPage/>
            </div>
        )
 }
});


module.exports = Projects;
