/* ProjectListing 
 * Given a project object, parses and returns
 *
 */

/* Load JSON for testing */
// var fs = require('fs');
// var obj = JSON.parse(fs.readFileSync('../data/projects.json', 'utf8'));






/* Hello */
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var ImageComponent = require('../components/ImageComponent');



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
		var author = this.props.author
		var likes = this.props.likes
		return (
			<a style={ this.props.style}>{message} </a>
			);
	}
});


/* Test Data */

var ProjectSearchList = React.createClass({
	render:function(){


		return(
			<div>
			{listContainer}
			</div>
		);

	}
});

var ProjectListing = React.createClass({
	render: function(){
		// var bgStyle={
		// 	backgroundImage: "url(../public/img/pepper.png)",
		// 	backgroundSize: "300px 400px",
		// 	// width:"300px",
		// 	// height:"400px"
		// };
		var infoBoxStyle = {
			maxWidth:"300px",
			backgroundColor: "#F4F4F4"
		}
		var listingStyle = {
			width:"30%"
		}
		var imgStyle={
			height:"200px",
			maxWidth:"300px",
			width: "100%",
			padding:"0px"
		}

		var id = this.props.id;
		var name = this.props.name;
		var textStyle_Big={fontFamily: "Ubuntu", fontSize:"15pt", color: "black", textDecoration: "none"  };
		var textStyle_Small={ fontFamily: "Ubuntu", fontSize:"11pt", color: "black", textDecoration: "none"  };
		var textStyle_View={ fontFamily: "Ubuntu", fontSize:"10pt", color: "#274D72", textDecoration: "none"  };



		

		return(
			<div style={ listingStyle } >
			<Link to={'/projects/'+ name} data={{}}> <ImageComponent url={this.props.url} style={imgStyle}/> </Link>
				<div style={infoBoxStyle}>
					<TextComponent style={textStyle_Big}
					message={this.props.name}/>
					<TextComponent style=	{textStyle_Small}
					message={'by ' + this.props.author}/>

					<div> 
					<TextComponent style=	{textStyle_View}
					message={this.props.views + ' views'}/>
					</div>


				</div>

			</div>
			)
	}
});


module.exports = ProjectListing;

