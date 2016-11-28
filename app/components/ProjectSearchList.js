/* ProjectSearchList
 *
 *
 */

var React = require('react');
var ReactDOM = require('react-dom');
var ProjectListing = require('../components/ProjectListing');

var devUrl = 'http://localhost:3000/get';
var devUrl2 = 'http://localhost:3000/get';
var prodUrl = 'https://still-forest-90731.herokuapp.com';

var ImageboxComponent = React.createClass({
	render: function(){
		var bgStyle={
			backgroundImage: "url(../public/img/pepper.png)",
			backgroundSize: "300px 400px",
			width:"300px",
			height:"400px"
		};
		var textStyle_Big={fontSize:"23pt", color: "white"  };
		var textStyle_Small={ fontSize:"15pt", color: "white"  };
		return(
			<div style={bgStyle}>
			<TextComponent style={textStyle_Big}
			message="Pepper"/>
			<TextComponent style={textStyle_Small}
			message="by SoftBank"/></div>
			)
	}
});

var TextComponent = React.createClass({
	render: function(){
		var message = this.props.message;
		return (
			<div style={ this.props.style}>{message} </div>
			);
	}
});

/* Test Data */
var friends = ['Ean Platter', 'Murphy Randall', 'Merrick Christensen'];
var listContainer = React.createClass({
	render:function(){
		// var listItems = friends.map(function(friend){
		// 	return "<li> " + friend + "</li>";
		// });
		return
			(
				<div>listContainer</div>
				);
	}
});

// ReactDOM.render(
// 	<ImageboxComponent className="Jesse"/>
// 	,
// 	document.getElementById('projectsList')
// 	);

var exampleJSON = {
	"name": "Pepper",
	"author": "Raul Pegan",
	"likes": 3
}

var ProjectSearchList = React.createClass({
	render: function(){
		var containerStyle= { borderStyle: "none", margin: "0", padding: "0px 0px 0px 30px", width:"100%", display:"flex",
		flexWrap:"wrap",
		height: "800px"
	};

		var projectListJSON = this.props.projectListData; //Includes array of objects
				console.log("Full filtered JSON");
				console.log(JSON.stringify(projectListJSON, null,4));
		/* Should only get first 9 from list based off http request when you have that up */
		var projectSearchList= projectListJSON.map(function(projectJSON){
				console.log("url from JSON is: ");
				console.log(projectJSON.picUrl);
			return  (
				<ProjectListing

				views={projectJSON.views}
				id={projectJSON.id} url={ projectJSON.url }
				name={ projectJSON.name} author={projectJSON.author}/>
				);
			});

		return(
			<div style={containerStyle}>
			{projectSearchList}

			</div>);
	}
});

module.exports = ProjectSearchList;
