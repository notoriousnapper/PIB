/* About.js */



var React = require('react');
var ReactRouter = require('react-router');
var Slider = require('react-slick');
var Link = ReactRouter.Link;
var Frame = require('../components/Frame');
var Bar = require('../components/Bar');
var TextComponent = require('../components/TextComponent');


var Carousel = require('nuka-carousel');

const App = React.createClass({
  mixins: [Carousel.ControllerMixin],
  render() {
    return (
      <Carousel>
        <img src="/public/img/carousel_2.jpg"/>
        <img src="/public/img/carousel_3.jpg"/>
        <img src="/public/img/carousel_4.jpg"/>
      </Carousel>
    )
  }
});

var SimpleSlider = React.createClass({
  render: function () {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
      </Slider>
    );
  }
});

var About = React.createClass({
        render: function(){
        return(
        		<div style={{padding:"40px", backgroundColor: "white", width: "100%", height: "100%"}}>
        		<Bar>
        		</Bar>

            <div style={{width:"600px", height:"auto", margin: "auto"}}>
              <App />
	            	<TextComponent style={{textAlign: "center", margin:"auto", fontSize:"30px", fontWeight: "bold"}} message= {'Welcome to Project in a Box'} />
            </div>
            	<Frame style={{paddingLeft: "100px", paddingRight: "100px"}}>
            		<div style={{display:"flex", flexDirection: "column"}}>
                <br/>
	            	<TextComponent message= {'Project-in-a-box is an idea – that students should have more opportunities to learn through  hands-on experience.  We know how tough it is to go through some tutorials to learn: lack of documentation, lack of help and support, and sometimes, trouble ordering and finding the right parts.'}/>
	            	<TextComponent message ={'So Professor Nguyen, and a handful of UCSD students worked to change that.  Project-in-a-box holds projects designed by students, for students. We provide the projects and the parts, as long as you bring the enthusiasm to get your hands dirty!'}/>
	            	<TextComponent message = {'Our goal is to promote hands-on learning through project experience, Providing quality instruction, support, and open-ended projects that students can take further on their own.'}/>
	            	<TextComponent message = {'Eventually, we will reach out to neighboring universities and community colleges, to provide The parts and a variety of projects that professors can order for classes & enhance their learning opportunities.'}/>
	            	<TextComponent mesage ={'If you’re interested, sign up for upcoming news and access to become a project-in-a-box, where you can watch your project go live and get its own special package!'}/>
	            	</div>
            	</Frame>


				</div>
              )
                }
});

module.exports = About;
