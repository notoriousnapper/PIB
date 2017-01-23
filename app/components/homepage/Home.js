/* home.js */
var React = require('react');
var TextComponent = require('../../components/custom/TextComponent');
var Link = require('react-router').Link;

var Home = React.createClass({
	getInitialState: function(){
		return(
			{
				projects: [
					"http://res.cloudinary.com/djmk9vktk/image/upload/v1485073390/robotic-arm/roboticarmcircle2.jpg",
					"http://res.cloudinary.com/djmk9vktk/image/upload/v1484803878/arcadeemulatorv2_kjs7l5.jpg",
					"http://res.cloudinary.com/djmk9vktk/image/upload/v1474080899/FullSizeRender_fbkwke.jpg"
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

		return(
			<div style={bgStyle}>

				<Link className="image-cropper" style={{ height: "250px", width: "250px", top: "88px", right: "16px"}}
			  	to={"/projects/robotic arm"} >
					<img src={this.state.projects[0]}/>
				</Link>

				<Link className="image-cropper" style={{ height: "140px", width: "140px", top: "52%", right: "20%"}}
				to={"/projects/arcadebox"} >
					<img src={this.state.projects[1]} />
				</Link>

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
