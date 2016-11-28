/* Step.js 
 * 
 * UI for a single step, which includes instructions, for bullet points, an Image, 
 * and easy readability.  Also has anchors (You can reach these from a toolbar, etc.)
 */


var React = require('React');
var ImageComponent = require('../components/ImageComponent');
var Frame = require('../components/Frame');



var Pad = React.createClass({
	getInitialState: function(){
		return {
		width: "100px",
		height: "200px"
		}
	},
	// Quick Checks
	// if (this.props.h)


	render:function(){

	/* Check if invalid input and handle */
	/* Have better error handlers */
	// if (isNaN(this.props.hw[0]) || isNaN(this.props.hw[1])){
			var padStyle={ 
				height: this.props.hw[0],
				width: this.props.hw[1]
			}
	// }else{
	// 	/* Default Values */
	// 	var padStyle={ 
	// 			height: '20px',
	// 			width: '100%'
	// 		}
	// 	console.log('Invalid input for padding, putting default values for now.');
	// }
	console.log(JSON.stringify(padStyle, null, 4));
	console.log(JSON.stringify(this.props.hw[0], null, 4));
	console.log(JSON.stringify(this.props.hw[1], null, 4));


		return(
			<div style={padStyle}>
			</div>
				);
	}
});
module.exports = Pad;