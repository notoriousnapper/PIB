/* home.js */



var React = require('react');
var Input = React.createClass({
	render:function(){
		/* Edit input fields here */

		// var fields = [
		// {"Name","in"},
		// {"Author","in"},
		// {"Info","in"}
		// ];
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


module.exports = Input;