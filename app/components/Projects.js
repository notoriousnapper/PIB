/* projects.js */
/*
 * This file holds components for the single projects display page
 * @JesseRen
 */


var React = require('react');
var ProjectSearchList = require('../components/ProjectSearchList');
var ProjectListing = require('../components/ProjectListing');
var SearchComponent = require('../components/SearchComponent');
var Category = require('../components/Category');
var Proj= require('../components/Proj');
var Frame= require('../components/Frame');
var Bar= require('../components/Bar');
var Pad= require('../components/Pad');



var http = require('http');
var $ = require('jquery');
var Q = require('q');
var TestAPI = require('../scripts/TestAPI');



var devUrl = 'http://localhost:3000';
var prodUrl = 'https://still-forest-90731.herokuapp.com';
/* Use devUrl or prodUrl*/
var useUrl = prodUrl;






var Projects = React.createClass({
  getInitialState: function() {
    return {
      clicks: 0,
      data: []
    };
  },
  getQueryProjects: function(query){
    // Transformations to make query work
    // var q = query.toLowerCase();
    // alert(query + 'is query');

     $.ajax({
                url: useUrl + '/get/' + query,
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
  op1: function(){
    var containerStyle = {paddingTop: "100px", paddingLeft: "100px", paddingRight: "100px", display: "flex", flexDirection: "column", margin: "0 auto"
    }
     var projectListStyle = {flex: "5"
     }
    var paddingStyle = {height: "100px", flex: "1"
    }
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
      <div>
              <div style={containerStyle}>
              <SearchComponent onMagicClick={this.getQueryProjects}/>
              <Bar>
                        <Category/>
              </Bar>
                    <Frame style={{display:"inline-block"}}>
                            <div style={{display:"flex", flexDirection: "column"}}>
                              <ProjectSearchList style={projectListStyle} projectListData={this.state.data}/>

                              <div style={{display:"flex", paddingTop:"30px"}}>
                                <Pad hw={['100px', '45%']}/>
                                <button style={buttonStyle}> {1} </button>
                                <Pad hw={['100px', '30%']}/>
                              </div>
                            </div>
                    </Frame>
              </div>
      </div>
    );
  },
   op2: function(id){

    /* Do a search via the id * takein in from params */
    console.log('Over here is: ' + id);
    return (
      <div style={{backgroundColor: "#1a2930", height: "200px"}}>
        <Proj params={id}/>
      </div>
    );
  },




  render: function() {
     /* Get Initial Data */
    var {params} = this.props;
    var id = params.id;
    // this.getQueryProjects('Jesse');
    if  (!params.id)
        var renderObject = this.op1();
    else{
        var renderObject = this.op2(id);
    }

          return renderObject;
  }
});


module.exports = Projects;
