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
var ImageComponent = require('../../components/custom/ImageComponent');
var TextComponent = require('../../components/custom/TextComponent');


var ProjectListing = React.createClass({
	render: function(){
		var infoBoxStyle = {
			maxWidth:"400px",
			width: "100%",
			minWidth:"100px",
			backgroundColor: "white",
			paddingLeft: "10px",
			paddingTop: "10px",
			paddingBottom: "10px"
		}
		var listingStyle = {
			width:"30%",
			margin:"1.6667%"
		}
		var imgStyle={
			minHeight:"60px",
			height:"200px",
			width: "100%",
			maxWidth:"400px",
			minWidth:"100px"
		}

		var textStyle_Big={fontFamily: "Ubuntu", fontSize:"14pt", color: "#2C2A25",  textTranform: "capitalize"  };
		var textStyle_Small={ fontFamily: "Ubuntu", fontSize:"9pt", color: "black", textDecoration: "none", textTransform: "capitalize"  };
		var textStyle_View={ fontFamily: "Ubuntu", fontSize:"10pt", color: "#274D72", textDecoration: "none"  };


		var id = 'filler';
		var name = 'fillername';


		try{
			id = this.props.id;
			name = this.props.name;
		}

		catch(e){
			console.error(e)
		}

		var nameArray = this.props.name.split(" ");
		var displayName = nameArray[0].charAt(0).toUpperCase() + nameArray[0].substr(1);
		for(var i = 1; i < nameArray.length; i++){
			var displayName = displayName + " " + nameArray[i].charAt(0).toUpperCase() + nameArray[i].substr(1);
		}


		/* Params data = this.props.name in Link */
		return(
			<div style={ listingStyle } >
			<Link to={'/projects/'+ this.props.name} data={{}}> <ImageComponent url={this.props.url} style={imgStyle}/> </Link>
				<div style={infoBoxStyle}>
					<TextComponent style={textStyle_Big}
					message={displayName}/>
					<TextComponent style=	{textStyle_Small}
					message={'by ' + this.props.author}/>
				</div>

			</div>
			)
	}
});
					// <div>
					// <TextComponent style=	{textStyle_View}
					// message={this.props.views + ' views'}/>
					// </div>


module.exports = ProjectListing;
