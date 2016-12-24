/* StepsAdd
 *
 * UI for a single step, to add which includes instructions, for bullet points, an Image,
 * and easy readability.  Also has anchors (You can reach these from a toolbar, etc.)
 */

var React = require('react');
var ImageComponent = require('../../components/custom/ImageComponent');

var StepAdd = React.createClass({
	render:function(){
	var barStyle={
		borderTopRightRadius: "2em",
		borderTopLeftRadius: "2em",
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

	var stepImage= function(){
		if(this.props.url!='') return (<div></div>);
		alert('Not working');
		return ( <ImageComponent url={this.props.url}></ImageComponent>);
	}
		// Learned a new thing today...javascript parenthesis needs to BE ON SAME LINE AS RETURN
		// Or else compiler just sees returns and exits
		return(
			<div>
				<div>'Step ' + {this.props.num} </div>
				{stepImage}
				{this.props.info}
			</div>
				)
	}
});
module.exports = StepAdd;
