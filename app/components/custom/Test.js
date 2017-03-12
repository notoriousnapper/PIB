var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Detail = require('../../components/custom/Detail');
var Carousel = require('./Carousel');
var FontAwesome = require('react-fontawesome');
var $ = require('jquery');



var documentStrings = [
  'Main Document',
  'Schematic',
  'Eagle Files',
  'Schematic'
]


var Test = React.createClass({
getInitialState: function(){
  return {
    ctr  : 0,
    paths: [
      "http://res.cloudinary.com/djmk9vktk/image/upload/v1482991159/arcadebox_slsyln.jpg",
      "http://res.cloudinary.com/djmk9vktk/image/upload/v1483597306/StreetFighter2_kfmo3f.jpg",
      "http://res.cloudinary.com/djmk9vktk/image/upload/v1482990179/carousel_2_lvukal.jpg",
      // "http://res.cloudinary.com/djmk9vktk/image/upload/v1482990180/carousel_3_ez6iml.jpg",
      // "http://res.cloudinary.com/djmk9vktk/image/upload/v1482990180/carousel_4_gnmo2p.jpg"
      // "../public/img/carousel_2.jpg",
      // "../public/img/carousel_3.jpg",
      // "../public/img/carousel_4.jpg"
    ]
  }
},
switchSlideLeft: function(inc){
  var newCtr = (this.state.ctr == 0) ? 2 : this.state.ctr - 1;
  this.setState({
    ctr  : newCtr,
    paths: this.state.paths
  });
                 $("#cf7 img").removeClass("opaque");
                 $("#cf7 img").eq(newCtr).addClass("opaque");
                 $("#cf7_controls span").removeClass("selected");
                 $(this).addClass("selected");
},
switchSlideRight: function(inc){
  var newCtr = (this.state.ctr == 2) ? 0 : this.state.ctr + 1;
  this.setState({
    ctr  : newCtr,
    paths: this.state.paths
  });
                 $("#cf7 img").removeClass("opaque");
                 $("#cf7 img").eq(newCtr).addClass("opaque");
                 $("#cf7_controls span").removeClass("selected");
                 $(this).addClass("selected");
},
componentDidMount: function() {
},
render: function(){
    var imgStyle = {height:"100%", padding: "0%", width:"100%"};
    var mainImgStyle = {float:"right", height: "400px", width:"400px", minHeight: "200px", minWidth:"200px"}
    var imgBoxStyle = {marginRight: "15px", height: "80px", width:"80px", cursor: "pointer"};
    var chevronStyle = {display: "inline-block", cursor: "pointer", verticalAlign: "middle", paddingTop:"50px", margin: "auto",
    height: "90px", width: "90px", verticalAlign:"center", color:"#b5b3b3"};
    var chevronContainerStyle = {display:"inline-block",
    // backgroundColor:"white",
    // borderColor:"black", borderStyle: "solid",
     height:"100%", width:"40px" };

    var imgBox = this.state.paths.map(function(item){
      return <img style={imgBoxStyle} src={item} />
    });
    var documentsList = documentStrings.map(function(item){
      return <li style={{content: "-"}} > <a style={{color:"#D74B1F"}}> {item} </a> </li>
    });
return  (
  <div style={{backgroundColor:"#192930", height: "1000px", marginTop:"20px", paddingLeft:"100px", paddingRight:"100px" }} >
  <div id="bg" style={{backgroundColor:"#E2E7E9"}}>


    <div  style={{ backgroundColor:"#192930", height: "150px", marginTop:"20px", paddingLeft:"0px", paddingRight:"20px"
    ,paddingTop: "80px"}} >
      <div id="breadCrumbsBar" style={{ backgroundColor:"white", height:"50px", width:"40%", paddingTop: "13px", paddingLeft: "20px", fontSize: "18px", fontWeight:"500" }}>
        {'Projects'}
        {' / '}
        {'IOT'}
        {' / '}
        {'GuitarEffectsX/'}
      </div>
    </div>
    <div id="container" style={{display:"flex", paddingRight: "10px", backgroundColor:"white"}}>
      <div id="left" style={{borderWidth: "0px 2px 0px 0px", borderColor:"#D9DADF", borderStyle:"solid", backgroundColor: "none", display:"inline-block", padding: "30px",  paddingTop: "40px"}}>
       <div id="mainImg2" style={mainImgStyle}  id="cf7" className="shadow" >
           <img style={imgStyle} className='opaque' src={this.state.paths[0]}/>
           <img style={imgStyle} src={this.state.paths[1]} />
           <img style={imgStyle} src={this.state.paths[2]} />
         <div style={{display:"inline-block",flex:"0.3", padding: "0px", width:"30%", height:"100%"}}> </div>
       </div>
        <br/>
        <br/>
        <br/>

        <div style={{float:"right", backgroundColor: "none", margin: "0 auto", padding:"0 2%"}}>
          <div id="leftChevron" style={chevronContainerStyle}>
            <FontAwesome style={chevronStyle} onClick={this.switchSlideLeft} name="chevron-left" size="2x"/>
            </div>

          <div id="imgBox" style={{width: "300px", display:"inline-block"}}> {imgBox} </div>

          <div id="rightChevron" style={{...chevronContainerStyle,...{float:"right"}}}>
          <FontAwesome style={chevronStyle} onClick={this.switchSlideRight} name="chevron-right" size="2x"/> </div>
           </div>
      </div>

      <div id="center" style={{flex:"1", width: "500px", paddingRight:"20px", paddingTop: "40px", paddingLeft:"40px",
         borderWidth: "0px 2px 0px 0px", borderColor:"#D9DADF", borderStyle:"solid"}}>
        <h1 style={{color: "#4C516C", padding: "0", margin:"0", paddingBottom:"5px", fontFamily:"Roboto Condensed", fontStyle:"bold"}}> Guitar Effects X </h1>
        <h3 style={{color:"#4C516C", padding: "0", margin:"0"}}>
        <div style={{display:"inline-block", fontWeight:"300", marginRight:"4px", fontSize:"20px"}}> by  </div>
        <div style={{display:"inline-block", fontWeight:"300", fontFamily:"Montserrat; Roboto", fontSize:"20px"}}> Eric Hou</div> </h3>

        <div id="buttonBar">

        </div>
        <div style={{display:"inline-block", marginRight: "20px"}}> 100 views </div>
        <button style={{backgroundColor:"white", borderRadius:"5px"}}>
              <img src="/public/img/hearts.png" style={{height:"20px", display:"inline-block", marginRight:"7px"}}/>  100
        </button>
        <button style={{backgroundColor:"white", borderRadius:"5px"}}>
              <img src="/public/img/cloud_blue.png" style={{height:"20px", display:"inline-block", marginRight:"7px"}}/> 67
        </button>


        <br/>

        <div style={{lineHeight:"175%", fontSize: "18px", color: "#4C516C", paddingRight: "50px"}} >
          <br/>


          <strong> Description: </strong>
          <div> "My project is the guitar effect pedals. I began this project because I've been playing guitar since high school. When I took ECE65 I became intrigued that simple components can act as filters. Building guitar effect pedals was my way of connecting my hobbies and my area of study." </div>
          <br/>
          <div> 'There are many types of effects, all used in different types of music. Each effect is based on principles we learn in our analog circuit classes. Building guitar effects is a very rewarding experience. All you need to know is how to read a schematic.' </div>
          <br/>
          <div> 'Knowing the basics on what resistors, capacitors and transistors do helps, but is not require. In the process of building, you observe the clipping circuits, the frequency filters, and oscillator circuits in action. You gain troubleshooting skills and get up close and familiar with electrical components. You get better intuition on how a circuit behaves and how you can design it.' </div>
          <br/>
        </div>
       </div>

      <div id="infoBox" style={{ flexDirection: "column", backgroundColor: "#F3F2F2", flex:"0.5", padding:"0px", width: "500px", height: "800px",
         }}>
        <div style={{height:"40px", width:"100%", backgroundColor:"none", textAlign:"center", color:"black", fontSize:"20px", paddingTop:"37px"}}>
         Project Details
         </div>
        <div id="outerBox" style={{padding:"0px"}}>
          <div id="sectionOne" style={{flex:"1", height: "60px", borderColor:"#D9DADF", borderStyle:"solid",
              borderWidth:"0px 0px 2px 0px", paddingRight:"20px", paddingLeft:"40px", margin:"0 auto" }}>
          </div>
          <div>
          </div>
          <div id="sectionTwo" style={{display:"block", height: "200px", borderColor:"#D9DADF", borderStyle:"solid",
              borderWidth:"0px 0px 2px 0px", paddingLeft:"130px", paddingTop: "30px", margin: "0 auto", backgroundColor:"white"}}>
              <div style={{display:"block", margin:"0 auto"}}>
                <img src="http://res.cloudinary.com/djmk9vktk/image/upload/v1484844829/ericho_ojewhp.jpg"
                  style={{height:"100px", display:"inline-block"}}/>
              </div>
              <div>
                 <strong> Team Members: </strong>
                 <br/>
                 {'Colin Keef, Julia Mou'}
              </div>
          </div>
          <div id="sectionOne" style={{flex:"1", height: "160px", borderColor:"#D9DADF", borderStyle:"solid",
              borderWidth:"0px 0px 2px 0px", paddingRight:"20px", paddingLeft:"40px", margin:"0 auto", textAlign:"center", paddingTop:"30px" }}>
            <strong style={{fontSize:"20px", fontFamily:"Roboto Condensed", textAlign:"center"}}> Documents: </strong>
              <ul style={{listStyle:"hyphen", cursor: "pointer"}}>{documentsList} </ul>
          </div>

          <div id="sectionThree" style={{flex:"1", height: "300px"}}>
            <br/>
            <br/>

          </div>

        </div>
      </div>


   </div>
    </div>
 </div>
)
}
})

module.exports = Test;
