/* DetailBox */

/* Proj.js */



var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var ImageComponent = require('../components/custom/ImageComponent');
var TextComponent = require('../components/custom/TextComponent');
var Frame = require('../components/Frame');


var IntroBox = React.createClass({
        /* Should request another call, etc */
        /* Server should do the filtering so traffic/ data is minimal */
        render: function(){
        return(
            <Frame>
        		<div style={this.props.style}>
            <TextComponent message={this.props.data}/>
				</div>
            </Frame>
              )
                }
});


module.exports = IntroBox;
