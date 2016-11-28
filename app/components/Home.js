/* home.js */



var React = require('react');
var Home = React.createClass({
	render:function(){
		var bgStyle = {
			  height:  "800px",
			  maxHeight: "100%",
			  maxWidth: "100%",
			  backgroundImage: "url('/public/img/landingpage.jpg')",
			  backgroundSize: "100% 100%",
			  opacity: "0.8",
			  zIndex:"1" 

		}
		return(
			<div style={bgStyle}>
			</div>
			)


	}
});


module.exports = Home;