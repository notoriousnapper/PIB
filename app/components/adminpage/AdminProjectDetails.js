var React = require('react');
var $ = require('jquery');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var prodUrl = 'https://still-forest-90731.herokuapp.com';

var AdminProjectDetails = React.createClass({
  getInitialState: function() {
    return {
      clicks: 0,
      data: []
    };
  },
  getProjects: function(query){
    console.log("id  " + query);
     $.ajax({
                url: '/projects/' + query,
                dataType: 'json',
                cache: false,
                success: function(res) {
                  this.setState({
                    data: res,
                    clicks: this.state.clicks + 1
                  });
                }.bind(this),
                error: function(xhr, status, err) {
                  console.error(prodUrl, status, err.toString());
                }.bind(this)
              });
  },
  render: function(){
    var id = this.props.params.id;
    var containerStyle = {
      zIndex:"1000", paddingTop: "100px", paddingLeft: "200px", paddingRight: "100px", paddingBottom: "100px", display: "flex", flexDirection: "column", height: "100%", margin: "0 auto", backgroundColor: "white"
    };
    var blockStyle = {
      border: "2px solid black",  display: "flex", padding: "10px 30px", paddingBottom: "60px"
    };
    var paddingStyle = {
      marginLeft: "50px", marginRight: "50px"
    };
    var buttonStyle = {
      border: "2px solid black", boxShadow: "3px 3px black", padding: "0 10px"
    };
    this.getProjects(id);
    return(
      <div style={containerStyle}>
          Admin Project Details
          <div style={blockStyle}>
            <Link to={'/admin'} style={buttonStyle}>Back</Link>
            <p style={paddingStyle}>Project Title</p>
            <p>Project Owner</p>
          </div>
          <div style={blockStyle}>
            Main Pic

          </div>
          <div style={blockStyle}>
            All Pics

          </div>
      </div>

    )
  }
});

module.exports = AdminProjectDetails;