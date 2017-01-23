
/* About.js */
var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Frame = require('../../components/Frame');
var Bar = require('../../components/Bar');
var TextComponent = require('../../components/custom/TextComponent');
var Carousel = require('../../components/custom/Carousel');
var Panel = require('../../components/homepage/Panel');
// var LabelCarousel = require('../../components/custom/LabelCarousel');
// var BookingFrame = require('../../components/aboutpage/BookingFrame');

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
var About = React.createClass({

        render: function(){
				var textStyle = {
					fontSize:"18px",
					fontWeight: "bold",
					fontFamily: "\'Montserrat\', sans-serif",
					backgroundColor: "white",
          textAlign: "center"
				};
				var boldStyle = {
					fontSize:"32px",
					fontWeight: "bold",
					fontFamily: "\'Montserrat\', sans-serif",
					textAlign: "center",
					backgroundColor: "white"
				};
				var bgStyle = {
          padding: "80px 20px 0",
          backgroundColor: "white"
				};
				var bgImgStyle = {
				padding: "10px 10%",
			  height:  "800px",
			  height: "100vh",
			  maxWidth: "80%",
			  // backgroundImage: "url('/public/img/landingpage.jpg')", // figure out fast load
				backgroundImage: "url(\"http://res.cloudinary.com/djmk9vktk/image/upload/v1472778560/landingpage.jpg\")",
			  backgroundSize: "cover",
			  opacity: "0.8",
			  zIndex:"1" ,
			  display:"flex",
			  flexDirection: "column",
				flex:"1"
		};
				var bgImgStyle2 = {
			  height:  "500px",
			  height: "100vh",
			  maxWidth: "80%",
				width: "auto",
			  // backgroundImage: "url('/public/img/landingpage.jpg')", // figure out fast load
				backgroundImage: "url(\"http://res.cloudinary.com/djmk9vktk/image/upload/v1482990180/carousel_4_gnmo2p.jpg\")",
			  backgroundSize: "cover",
			  opacity: "0.8",
			  zIndex:"1" ,
			  display:"flex",
			  flexDirection: "column"
		};
        return(
        <div style={bgStyle}>
          <TextComponent style={boldStyle} message={'Educational. Personal.'} />
          <TextComponent style={textStyle} message={'Projects bring a dimension of learning that can\'t be taught with just lectures.  That\'s why there\'s Project-in-a-box, A collection of projects designed to help students engage and learn while having fun.'}/>
          <img src="http://res.cloudinary.com/djmk9vktk/image/upload/v1472778560/landingpage.jpg" style={{width:"45%",height:"45%",margin:"2.5%"}}/>
          <img src="http://res.cloudinary.com/djmk9vktk/image/upload/v1482990180/carousel_4_gnmo2p.jpg" style={{width:"45%",height:"45%",margin:"2.5%"}}/>
        </div>
              )
                }
});
module.exports = About;
              // <Carousel style={{flex:"1"}}/>
              // <Panel style={{flex:"1" }}/>
            // <embed src="http://www.apa.org/pubs/journals/features/hea-a0034406.pdf" width="550" height="750"/>
              // <div style={{width:"100%", backgroundColor: "#F1C232", height:"60px", flex:"1"}}></div>



              //
            	// <Frame style={{paddingLeft: "100px", paddingRight: "100px"}}>
              // <div style={{width:"600px", height:"auto", margin: "auto"}}>
	            // 	<TextComponent style={{textAlign: "center", margin:"auto", fontSize:"30px", fontWeight: "bold"}} message= {'Welcome to Project in a Box'} />
              // </div>
              //
              //
            	// 	<div style={{display:"flex", flexDirection: "column"}}>
              //   <br/>
	            // 	<TextComponent message= {'Project-in-a-box is an idea – that students should have more opportunities to learn through  hands-on experience.  We know how tough it is to go through some tutorials to learn: lack of documentation, lack of help and support, and sometimes, trouble ordering and finding the right parts.'}/>
	            // 	<TextComponent message ={'So Professor Nguyen, and a handful of UCSD students worked to change that.  Project-in-a-box holds projects designed by students, for students. We provide the projects and the parts, as long as you bring the enthusiasm to get your hands dirty!'}/>
	            // 	<TextComponent message = {'Our goal is to promote hands-on learning through project experience, Providing quality instruction, support, and open-ended projects that students can take further on their own.'}/>
	            // 	<TextComponent message = {'Eventually, we will reach out to neighboring universities and community colleges, to provide The parts and a variety of projects that professors can order for classes & enhance their learning opportunities.'}/>
	            // 	<TextComponent mesage ={'If you’re interested, sign up for upcoming news and access to become a project-in-a-box, where you can watch your project go live and get its own special package!'}/>
	            // 	</div>
            	// </Frame>
              //
