var React = require('React');



var Bar = React.createClass({
	render:function(){
	var barStyle={
		backgroundColor: "white",
		width: "100%",
		padding:"20px",
		paddingBottom:"8px",
		display: "flex"
	}

	var endStyle={
		height:"10px",
		backgroundColor:"D0D1D2"


	}
		// Learned a new thing today...javascript parenthesis needs to BE ON SAME LINE AS RETURN
		// Or else compiler just sees returns and exits
		return(
				<div style={this.props.style}>
				<div style={barStyle}> {this.props.children}</div>
				</div>
				)
	}
});
module.exports = Bar;
