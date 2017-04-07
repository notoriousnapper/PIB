/* home.js */
var React = require('react');
var TextComponent = require('../../components/custom/TextComponent');
var Link = require('react-router').Link;

// import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6
var ReactCSSTransitionGroup = require('react-addons-css-transition-group') // ES5 with npm
// var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup; // ES5 with react-with-addons.js


var HoverInfo = React.createClass({
     getInitialState: function () {
         return {hover: false};
     },
     mouseOver: function () {
         this.setState({hover: true});
     },
     mouseOut: function () {
         this.setState({hover: false});
     },
     render: function() {
         var show = "none";
         if (this.state.hover) {
             show = "block";
         }

				 var hoverStyleMain = {...{display:show, padding: "100px 15px !important" }, ...this.props.hoverStyle};
				//  alert(JSON.stringify(hoverStyleMain, null, 4));
         return React.createElement(
             "div",
             {onMouseOver: this.mouseOver, onMouseOut: this.mouseOut},
 						<div style={this.props.circlePosition}>
 							<Link className="image-cropper" style={this.props.circleSize}
 						  	to={this.props.projectTitle} >
 								<img src={this.props.url}/>
 							</Link>


	 							<div className="testhover" style={hoverStyleMain}>
								  <div style={{padding: "10px 15px", color: "D83320 !important", fontSize: "14px !important"}}>
										<img style={{display:"inline-block", width: "25px", height: "25px", marginRight: "3px"}} src="../public/img/hearts.png"/>
											<div style={{display:"inline-block", color: "#E54C3B" }}> { this.props.likes } </div>
										<div style={{display:"block", color:"black !important", fontFamily: "Montserrat", fontSize: "15px"}}> {this.props.projectTitle} </div>
	 								<div style={{position:"absolute", right:"0", top:"100%", width:"0px", height:"0px", borderRight:"20px solid white", borderBottom:"20px solid transparent"}}></div>
   							</div>
 							</div>


 						</div>
         );
     }
 });


var Home = React.createClass({
	getInitialState: function(){
		return(
			{
				projects: [
					"http://res.cloudinary.com/djmk9vktk/image/upload/v1485073390/robotic-arm/roboticarmcircle2.jpg",
					"http://res.cloudinary.com/djmk9vktk/image/upload/v1484803878/arcadeemulatorv2_kjs7l5.jpg",
					"http://res.cloudinary.com/djmk9vktk/image/upload/v1487729049/guitar_gmjnpt.jpg"
				],
				profiles:[
					"http://res.cloudinary.com/djmk9vktk/image/upload/v1484808274/colinkeefcircle_hrz89a.jpg",
					"http://res.cloudinary.com/djmk9vktk/image/upload/v1484807640/asiangirl_zg3lai.jpg",
					"http://res.cloudinary.com/djmk9vktk/image/upload/v1484844829/ericho_ojewhp.jpg"
				]
			}
		)

	},
	render:function(){
		var bgStyle = {
			  height:  "800px",
			  height: "700px",
				margin: "50px 0",
				position: "relative",
			  maxWidth: "100%",
			  backgroundImage: "url('http://res.cloudinary.com/djmk9vktk/image/upload/v1484795377/wood_ahxhaq.jpg')",
			  backgroundSize: "cover",
			  opacity: "0.9",
			  zIndex:"1" ,
			  display:"flex",
			  flexDirection: "column"
		};



		var buttonStyle={
			padding:"20px",
            width:"170px",
            backgroundColor: "#F1CD3F",
            color: "#463700",
            borderRadius: "5px",
						borderStyle: "none",
        		fontSize:"18px",
        		fontWeight: "bold",
						fontFamily: "\'Montserrat\', sans-serif"
     };
        var textStyle={
					fontFamily: "\'Montserrat\', sans-serif",
        	fontSize: "27px",
        	fontWeight: "700",
        	textAlign: "center",
        	color: "white",
        	flex:"2",
        };

        var linkStyle=
        	{
        		// textAlign:"center",
        		// color: "black",
        		// fontWeight: "bold",
        		// fontSize:"18px",
        		// paddingLeft: "50px"
        	}

				// <Link className="image-cropper" style={{ height: "250px", width: "250px", top: "88px", right: "16px"}}
			  // 	to={"/projects/robotic arm"} >
				// 	<img src={this.state.projects[0]}/>
				// </Link>

				// to={"/projects/arcadebox"} >
		return(
			<div style={bgStyle}>

				<HoverInfo url={this.state.projects[0]} circlePosition={{position:"absolute",  top: "88px", right: "16px", height: "250px", width: "250px"}}
					circleSize={{height: "250px", width: "250px"}}
					hoverStyle={{position:"relative", right:"65%", width:"140px", height:"90px", padding:"5px", borderRadius:"3px 3px 0 3px", backgroundColor:"white"}}
					likes={13}
					downloads={3}
					projectTitle={"robotic arm"}
				/>

				<HoverInfo url={this.state.projects[1]} circlePosition={{ position:"absolute",  top: "52%", right: "20%", height: "140px", width: "140px"}}
					circleSize={{height: "140px", width: "140px"}}
					hoverStyle={{position:"relative", right:"95%", top: "-80%", width:"140px", height:"90px", padding:"5px",
          borderRadius:"3px 3px 0 3px", backgroundColor:"white",
          fontFamily: "Montserrat", fontSize: "14px" }}
					likes={4}
					downloads={5}
					projectTitle={"arcade emulator"}
				/>

        <HoverInfo url={this.state.projects[1]} circlePosition={{ position:"absolute",  top: "52%", right: "20%", height: "140px", width: "140px"}}
					circleSize={{height: "140px", width: "140px"}}
					hoverStyle={{position:"relative", right:"95%", top: "-80%", width:"140px", height:"90px", padding:"5px",
          borderRadius:"3px 3px 0 3px", backgroundColor:"white",
          fontFamily: "Montserrat", fontSize: "14px" }}
					likes={4}
					downloads={5}
					projectTitle={"arcade emulator"}
				/>

				<Link className="image-cropper" style={{ height: "220px", width: "220px", top: "63%", right: "16px"}}
				to={"/projects/guitar effect pedals"} >
					<img src={this.state.projects[2]} />
				</Link>


				<Link className="image-cropper no-border" style={{ borderStyle: "none",height: "110px", width: "110px", top: "16%", left: "192px"}} to={""} >
					<img src={this.state.profiles[0]}/>
				</Link>

				<Link className="image-cropper no-border" style={{ borderStyle: "none", height: "180px", width: "180px", top: "33%", left: "22px"}}
				to={""} >
					<img src={this.state.profiles[1]}/>
				</Link>

				<Link className="image-cropper no-border" style={{ borderStyle: "none",height: "150px", width: "150px", top: "69%", left: "112px"}} to={""} >
					<img src={this.state.profiles[2]}/>
				</Link>


				<div style={{height: "200px"}}></div>
					<br/>
					<br/>
					<br/>
			<TextComponent style={textStyle} message={' Instructional Projects created by UCSD Students '}/>
					<br/>
			<TextComponent style={textStyle} message={' For UCSD Students '}/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<div style={{flex:"2", height:"100%" }}>
								<div style={{width:"100%", display:"flex"}}>
									<div style={{flex:"1"}}/>
										<Link to={'/projects'}> <button className="home-btn"> See Projects </button> </Link>
									<div style={{width:"60px"}}/>
										<Link to={'/about'}> <button className="home-btn">Learn More</button> </Link>
									<div style={{flex:"1"}}/>
								</div>
					</div>
				<div style={{height: "200px"}}></div>
			</div>
			)

	}
});

module.exports = Home;
