var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var ProjectPage = require('./AdminProject');
var idornot = null;

var AdminNav = React.createClass({
  getInitialState () {
    return {
      active_comp: 1
    };
  },
  handleClick: function(num){
    this.setState({active_comp: num});
  },
  renderPage: function(){
    if(this.state.active_comp == 1){
      return (<ProjectPage id={idornot}/>)
    }
    if(this.state.active_comp == 2){
      var blabla={
        width: "100px",
        height: "500px",
        'background-color': 'green'
      }
      return (<div style={blabla}>Users</div>)
    }
  },
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
          <div style={bottomStyle} onClick={this.handleClick.bind(this, 1)}>Projects</div>
          <div style={bottomStyle} onClick={this.handleClick.bind(this, 2)}>Users</div>
          <div style={bottomStyle}>Data</div>
        </div>
        {this.renderPage()}
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
        idornot = this.props.params.id;
        return(
            <div>
                <AdminNav />
            </div>
        )
 }
});


module.exports = Projects;
