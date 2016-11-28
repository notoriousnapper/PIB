/* projects.js */
/*
 * This file holds components for the single projects display page
 * @JesseRen
 */


var React = require('react');
var ReactDOM = require('react-dom');
var ProjectSearchList = require('../components/ProjectSearchList');
var ProjectListing = require('../components/ProjectListing');
var Proj= require('../components/Proj');



// var Search = require('react-search');
// var Search = require("react-search").SearchTestComponent;



/* Grab Data to be parsed
 * Should be in a separate JS file, probably, or a http call
 */

var json = require('json!../data/projects.json'); //(with path)
var projects = json.Projects;

// console.log(JSON.stringify(json, null, 4));
// var projectArray = JSON.parse(json);
// var projects = json.getJSONArray("Projects");
// var projects = json.Projects[0];
// console.log(projects);




// var filterJson = function(jsonArr){
//     jsonArr.map(function(json){
//     if ((json.name == "pepper")){
//       return json;
//     }



//   }
//   );
// };


/* Make this into a filter function */

/* For Testing */
/* Test function to see when it breaks later */
var filterProjectJSON= function (projectsArray, keyword){
  /* Filters by keyword */
    console.log("filter keyword is: " + keyword);
    var results =  projectsArray.filter(
      function(project){
        var bool = false;

        var wordArray = [project.name, project.author];
        var match = function (wordArray){
            wordArray.map(function(word){

              var keywordLower = keyword.toLowerCase();
              if( (word.toLowerCase()).includes(keywordLower) )
                return true;
            })
        }


        match(wordArray);  // Executing main filter function



        /* Searches substrings for author, title, tags, and even featured */
        /* Add non-tag related search keywords here */
        /* Offers function that helps within 2-3 characters off, unless length is greater than */
        /* Tokenizes, or sees if it is substring */


        if (project.name.includes(keyword)) return true;
        if (project.author.includes(keyword)) return true;



        switch(keyword){
          case project.name: bool = true;
              return bool;
          case project.author: bool = true;
              return bool;
          // case 'featured': bool = true
        }

        project.tags.map(function(tag){
          if (tag.includes(keyword))
            bool = true;

            return bool;
        });
      return bool; //Returning boolean for if project should show in results


      }

    ).map(function(project){ return project;});
    console.log("filter array is: " +  JSON.stringify(results, null, 4));
    return results;
};


var projectName = "Pepper";
var pepperFilter = function(project, keyword){
  return (project.name === keyword)
};
// Insert this function into filter when complete ^

/* Cannot filter within map function, because it will return null, which will
through a million errors  and was what broke */
// var projects = projects.filter(function(project){ return (project.name === "Pepper")}).map(function(project){
//     console.log("JSON");
//     console.log(project.index);
//     return project;
// });




var ContainerComponent = React.createClass({
    render: function(){
    var child = this.props.child;
    var containerStyle= { width: "60%"};

    return(
            <div style={containerStyle}>{
                    <ImageboxComponent/>
            } </div>
          )
            }
});

var TextComponent = React.createClass({
    render: function(){
    var message = this.props.message;
    return (
            <div style={ this.props.style}>{message} </div>
            )
            }
});
            // <ProjectListing />
            // {ProjectSearchList}



/* Main Parent Component */

var Projects = React.createClass({
	getInitialState: function(){
		return ({
			search: '',
      data: projects
		})

	},
	onChildQuery: function(queryData){
    var newData = filterProjectJSON(projects, queryData);
    this.setState({
      data : newData
    });
    console.log("Data has been changed to " + JSON.stringify(this.state.data, null, 4));
	},
    render:function(){


    var filterBarStyle = {
      width: "100%",
      //borderStyle: "solid",
      height: "50px",
      // margin: "40px",
      margin: "0 auto",
      display: "flex"
      // backgroundColor: "#E0E0E0"
    }

    var filterInnerStyle = {
      height: "100%",
      width: "60%",
      // //borderStyle: "solid",
      backgroundColor: "#E0E0E0",
      flex: "4.5"
    }

    var paddingStyle = {
      height: "100px",
      flex: "1"
      // width: "20%"
    };

    var containerStyle = {
      display: "flex",
      margin: "0 auto"

    }

    var projectListStyle = {
      flex: "5"
    }

		const {params} = this.props;
		var paramStr = JSON.stringify(params,null,4);

		var component = function(){
			return <div> Not Found! </div>;
		};

    /* Main Component HERE */
		if(paramStr=="{}"){
			console.log("No params");
			return(
            <div>
            <div style={paddingStyle}> </div>
      	        <SearchComponent callbackParent={this.onChildQuery}/>
                <div id={'Filter Bar'} style={filterBarStyle}>
                      <div style={paddingStyle}> </div>
                <div className='Buttons' style={filterInnerStyle}>
                      <button id="Filters"> Filters</button>
                      <button id="Categories">Categories</button>

                      </div>
                      <div style={paddingStyle}> </div>
                 </div>


                <div style={containerStyle}>
                      <div style={paddingStyle}> </div>
                      <ProjectSearchList style={projectListStyle}
                         projectListData={this.state.data}/>
                      <div style={paddingStyle}> </div>
                      </div>
            </div>
            );
        }

		else{
			console.log("Params are");
			console.log(JSON.stringify(params,null,4));

			/* So system doesn't crash */
			if(params.id!=null){


        var singleProjectJSON = json.Projects.filter(function(projects){
          if(
            (params.id === projects.name))  /* Fix this, should be params.name, not params.id  */
            return true;
            // &&
            // () &&
            // ()
            // )


        })[0];

        if((singleProjectJSON) == null){
          singleProjectJSON = { name: "Filler, error, make sure to fix this"}
        }

      // var singleProjectJSON =
      // {
      //   "id": "57b7b23a653c33149f328a8e",
      //   "index": 0,
      //   "name": "Wall-E",
      //   "picUrl": "../public/img/pepper.png",
      //   "about": "Pariatur velit in labore elit cillum sit anim est labore Lorem dolore adipisicing do laboris. In sunt nostrud sint non laborum labore et non sunt quis esse nostrud voluptate. Sit amet ex nostrud aliqua duis consectetur ad sunt tempor velit id laborum. Laborum incididunt anim ut dolore fugiat ex ad voluptate ad ad cupidatat dolore.\r\n",
      //   "author": "Pamela Perez",
      //   "likes": 261,
      //   "tags": [
      //   "robot",
      //   "computer vision",
      //   "machine learning",
      //   "fire",
      //   "mollit",
      //   "fugiat",
      //   "magna"
      //   ]
      // }
			return(
            <div>
            	<Proj params={singleProjectJSON}/>
            </div>
            /* Make sure that params.id = right project */
            );
			}

			else {  return (<div> nothing to show here.  maybe if you come back later </div>) }





		}

    }
});



var SearchComponent = React.createClass({
	getInitialState: function() {
    return {
      search: '',
      test: 1,
    };
  },
  updateSearch: function(evt){
  	var message = evt.target.value.substr(0,20);
  	console.log(message);
  	this.setState({search: message, test: this.state.test + 1});
  	 console.log("Heya" + this.state.test + this.state.search);

  },
  onQuery: function(evt){
  	var message = this.state.search;

  	this.props.callbackParent(message); // hey parent, I've changed!
  	console.log('Calling Parents!');
  	console.log(message);
  },
  handleKeyPress: function(e){
    if (e.key === 'Enter'){
      console.log('do validatel');
      this.onQuery(e);
    }
  },
  render: function() {
     var buttonStyle={
            width:"100px",
            // height:"50px",
            display: "flex",
            backgroundColor: "#FAC129",
            paddingLeft:"12px",
            borderRadius: "5px 0px 5px 5px"

     };
     var inputStyle={
            width:"850px",
            fontSize: "20px",
            fontFamily: "Helvetica",
            paddingLeft: "10px",
            // height:"50px",
            display: "flex"

     };
     var containerStyle= {
            // marginLeft: "100px",
            // paddingLeft:"100px",
            //borderStyle: "solid",
            width:"100%",
            height:"40px",
            display: "flex",
            margin: "0 auto"
            // boxShadow: "0px 10px 9px grey"
          };
    var paddingStyle = {
            height: "150px",
            width: "100%"

    };
    var imgStyle = {
      height: "20px",
      width: "20px"


    }
    return (
      <div style={containerStyle}>
        <div style={paddingStyle}> </div>
            <input style={inputStyle} type="text" value={this.state.search}
                    onChange={this.updateSearch.bind(this)}
                    onKeyPress={this.handleKeyPress} />
      	            <button style={buttonStyle} onClick={this.onQuery}>
                     <img style={imgStyle} src={'../public/img/search.png'}/>
                     </button>


        <div style={paddingStyle}> </div>
	  </div>


	);
}
});


module.exports = Projects;
