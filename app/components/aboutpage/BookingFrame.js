/* About.js */
var React = require('react');
var ReactRouter = require('react-router');
var Slider = require('react-slick');
var Link = ReactRouter.Link;
var Frame = require('../../components/Frame');
var Bar = require('../../components/Bar');
var TextComponent = require('../../components/custom/TextComponent');
var Carousel = require('../../components/custom/Carousel');
var LabelCarousel = require('../../components/custom/LabelCarousel');




var Label = React.createClass({
  render: function(){
    var labelStyle = {
      backgroundColor: "white",
      height: "20px"
    }
    return (<div>{this.props.label}</div>);
  }
})

// <Carousel />
var BookingFrame = React.createClass({
        getInitialState: function(){
          return {
            checked: false,
           }
        },
        callmagic: function(){
          this.setState({checked: true});
          // this.setState({checked: false});
          console.log("checked");
          alert("Hello");
        },
        render: function(){
        return(
        		<div style={{padding:"0px", margin: "0px", backgroundColor: "black", width: "100%", height: "1000px"}}>
                  <LabelCarousel checked={this.state.checked}/>
                    <div style={{width:"100%", backgroundColor:"blue", height:"400px", width: "100%"}}>
                    <button onClick={this.callmagic}> Test </button>
                    </div>
    				</div>
              )
                }
});

module.exports = BookingFrame;
