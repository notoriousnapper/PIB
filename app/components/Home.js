/* home.js */
var React = require('react');
var TextComponent = require('../components/TextComponent');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
	render:function(){
		var bgStyle = {
			  height:  "800px",
			  height: "100vh",
			  maxWidth: "100%",
			  backgroundImage: "url('/public/img/landingpage.jpg')",
			  backgroundSize: "cover",
			  opacity: "0.8",
			  zIndex:"1" ,
			  display:"flex",
			  flexDirection: "column"
		};
		var buttonStyle={
			padding:"20px",
            width:"170px",
            backgroundColor: "#FAC129",
            // color: "#383838",
            color: "white",
   //          // paddingLeft:"12px",
   //          textAlign: "center",
            borderRadius: "5px"
            // borderRadius: "5px 0px 5px 5px"
     };
        var textStyle={
        	fontFamily: "'Bebas Neue', sans-serif",
        	fontSize: "30px",
        	fontWeight: "bold",
        	textAlign: "center",
        	color: "white",
        	flex:"2"
        };

        var linkStyle=
        	{
        		textAlign:"center",
        		color: "black",
        		fontWeight: "bold",
        		fontSize:"18px",
        		paddingLeft: "50px"
        	}

		return(
			<div style={bgStyle}>
					<div style={{flex:"1.3"}}> </div>
			<TextComponent style={textStyle} message={'A collection of projects carefully-crafted by UCSD students, designed to help students build cool things.'}/>
					<div style={{flex:"2", height:"100%" }}>
								<div style={{width:"100%", display:"flex"}}>
									<div style={{flex:"1"}}/>
									<Link style={linkStyle}to={'/projects'}> <button style={buttonStyle}> Projects </button> </Link>
									<div style={{width:"60px"}}/>
									<Link style={linkStyle} to={'/about'}> <button style={buttonStyle}>Learn More</button> </Link>
									<div style={{flex:"1"}}/>
								</div>
					</div>
			</div>
			)

	}
});

module.exports = Home;
