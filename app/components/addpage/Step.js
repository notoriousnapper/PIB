/* Step.js
 *
 * UI for a single step, which includes instructions, for bullet points, an Image,
 * and easy readability.  Also has anchors (You can reach these from a toolbar, etc.)
 */

var React = require('react');
var ImageComponent = require('../../components/custom/ImageComponent');
var Frame = require('../../components/Frame');
var Pad = require('../../components/Pad');

var Step = React.createClass({

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

	var titleStyle={
		fontFamily: "'Ubuntu'",
		fontWeight: 'bold',
		fontSize: "20px"

	}

	var stepImage= function(imageUrl){
		// if(this.props.url!='') return (<div></div>);
		// alert('Not working');
		// return ( [<ImageComponent url={this.props.url}></custom/ImageComponent>]);
		return ( [<ImageComponent style={{width: "170px", height: "170px"}} url={imageUrl}/>]);
	};

	var imgStep = stepImage(this.props.url);
		// Learned a new thing today...javascript parenthesis needs to BE ON SAME LINE AS RETURN
		// Or else compiler just sees returns and exits

		return(
			<div style={this.props.style} >
			<Frame>
				<div style={{display:"flex", flexDirection:"column"}}>
					<div style={titleStyle} >{'Step : ' + this.props.num + '   ' + this.props.title} </div>
					{imgStep}
				{this.props.info}
				</div>

			</Frame>
				<br/>
				<br/>

				<Pad hw={'300px','300px'}/>

			</div>
				);
	}
});
module.exports = Step;
