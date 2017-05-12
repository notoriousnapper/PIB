/* ProjectSearchList
 *
 *
 */

var React = require('react');
var ReactDOM = require('react-dom');
var ProjectListing = require('../../components/projectlistings/ProjectListing');

var devUrl = 'http://localhost:3000/get';
var devUrl2 = 'http://localhost:3000/get';
var prodUrl = 'https://proj-box.herokuapp.com';

var ImageboxComponent = React.createClass({
	render: function(){
		var buttonStyle={
			width: "50px", height: "50px", marginRight:"20px",
			fontWeight: "bold",
			backgroundColor: "#FAC129"
		}
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
	getInitialState:function(){
		return({
			val:1
		});
	},
	setListState: function(num){
		this.setState({
			val: num
		});
	},
	render: function(){
		var containerStyle= { borderStyle: "none", margin: "0", padding: "0px 0px 0px 30px", width:"100%", display:"flex",
		flexWrap:"wrap",
		height: "800px"
	};
	var buttonStyle={
		width: "50px", height: "50px", marginRight:"20px",
		fontWeight: "bold",
		backgroundColor: "#FAC129"
	}

		var projectListJSON = this.props.projectListData; //Includes array of objects
				console.log("Full filtered JSON");
				console.log(JSON.stringify(projectListJSON, null,4));
		/* Should only get first 9 from list based off http request when you have that up */
		var projectSearchList;
		var temp = [];
		var temp2;
		if(this.state.val==1){
			temp = [];
			var i = 0;
			projectSearchList= projectListJSON.map(function(projectJSON){
					if(i<6){
						i++;
				return  (
					<ProjectListing
					views={projectJSON.views}
					id={projectJSON.id} url={ projectJSON.url }
					name={ projectJSON.name} author={projectJSON.author}/>
					);
					}
				});
						i++;
		}
		if(this.state.val==2)	{
			var i = 0;
			projectSearchList= projectListJSON.map(function(projectJSON){
			console.log("Bugger\n\n\n\n");
			console.log(i);
					if(i>=6)	{
						i++;
			console.log("Bugger\n\n\n\n");
				return  (
					<ProjectListing
					views={projectJSON.views}
					id={projectJSON.id} url={ projectJSON.url }
					name={ projectJSON.name} author={projectJSON.author}/>
					);
					}
						i++;
				});
			}




		return(
			<div style={containerStyle}>
			{projectSearchList}
			<div style={{margin: "0 auto", width: "100%", textAlign: "center", height: "400px"}}>
				<button style={buttonStyle} onClick={()=>{this.setListState(1);}}> 1 </button>
				<button style={buttonStyle} onClick={()=>{this.setListState(2);}}> 2 </button>
			</div>

			</div>);
	}
});

module.exports = ProjectSearchList;
