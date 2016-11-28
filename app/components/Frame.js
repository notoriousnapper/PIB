var React = require('react');

var Frame = React.createClass({

	render:function(){
	var bgStyle = {
		padding: "10px",
		backgroundColor: "white",
		display:"flex"

	}
	var outerFrameStyle={
		// minHeight: "40px"
	}
		// Learned a new thing today...javascript parenthesis needs to BE ON SAME LINE AS RETURN
		// Or else compiler just sees returns and exits
		return(
			<div style={this.props.style}>
				<div style={bgStyle}>
				{this.props.children}
			</div>
			</div>

				)
	}

});
module.exports = Frame;
