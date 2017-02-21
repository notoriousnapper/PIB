/* projects.js */
/*
 * This file holds components for BOTH the single projects display page
 * and the search page, effectively rendering depending on the click and returning
 * a page based on the effect.
 * @JesseRen
 */


var React = require('react');
var ProjectSearchList = require('../../components/projectlistings/ProjectSearchList');
var ProjectListing = require('../../components/projectlistings/ProjectListing');
var SearchBar = require('../../components/projectlistings/SearchBar');
var Category = require('../../components/projectlistings/Category');
var Proj= require('../../components/projectpage/Proj');
var Proj2= require('../../components/projectpage/Proj2');

var Frame= require('../../components/Frame');
var Bar= require('../../components/Bar');
var Pad= require('../../components/Pad');

var http = require('http');
var $ = require('jquery');
var Q = require('q');
// var TestAPI = require('../../scripts/TestAPI');

var devUrl = 'http://localhost:3000';
var prodUrl = 'https://still-forest-90731.herokuapp.com';
/* Use devUrl or prodUrl*/
var useUrl = devUrl;

// var B2 = require('backblaze-b2');
// var b2 = new B2({
//     accountId: '8051682cf9cf',
//     applicationKey: '0012b1b11b03da7d33341c630d8da8b8259bac0cbd'
// });
// // download file by name
// b2.authorize();
// b2.downloadFileByName({
//     bucketName: 'project-docs',
//     fileName: 'arcadeemulator'
// });  // returns promise
//

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
              <SearchBar onMagicClick={this.getQueryProjects}/>
              <Bar>
                        <Category popular={this.getPopularProjects} view={this.getMostViewsProjects}/>
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
    // Temporary Fix - Adjust fix.
    /*<div style={{backgroundColor: "#1a2930", height: "2500px"}}>
        <Proj params={id}/>
        <Proj2 params={id}/>
      </div>*/
    return (
      <div>
        <Proj params={id}/>
        <Proj2 params={id}/>
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
