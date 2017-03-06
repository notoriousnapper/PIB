var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Detail = require('../../components/custom/Detail');
var Carousel = require('./Carousel');
var FontAwesome = require('react-fontawesome');
var $ = require('jquery');



var documentStrings = [
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
  var newCtr = (this.state.ctr == 2) ? 0 : this.state.ctr + 1;
  this.setState({
    ctr  : newCtr,
    paths: this.state.paths
  });
  alert(newCtr);
                 $("#cf7 img").removeClass("opaque");
                 $("#cf7 img").eq(newCtr).addClass("opaque");
                 $("#cf7_controls span").removeClass("selected");
                 $(this).addClass("selected");
},
switchSlideRight: function(inc){
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
componentDidMount: function() {
  // var img_array = [1, 2, 3, 4],
  //        newIndex = 0,
  //        index = 0,
  //        interval = 3000;
  //    (function changeBg() {
  //            index = (index + 1) % img_array.length;
  //
  //                $("#cf7 img").removeClass("opaque");
  //                $("#cf7 img").eq(index).addClass("opaque");
  //                $("#cf7_controls span").removeClass("selected");
  //                $(this).addClass("selected");
  //                // console.log(newImage);
  //        setTimeout(changeBg, interval);
  //    })();
    //  this.setState({
    //    ctr  : newCtr,
    //    paths: this.props.links
    //  });
},
render: function(){
    var imgStyle = {height:"100%", padding: "0%", width:"100%"};
    var mainImgStyle = {height: "auto", width:"100%", minHeight: "200px", minWidth:"200px"}
    var imgBoxStyle = {marginRight: "15px", height: "120px", width:"120px"};
    var chevronStyle = {display: "inline-block", cursor: "pointer", verticalAlign: "middle", paddingTop:"50px", margin: "auto",
    height: "120px", width: "100px", verticalAlign:"center", color:"#b5b3b3"};
    var chevronContainerStyle = {display:"inline-block", backgroundColor:"white",
    // borderColor:"black", borderStyle: "solid",
     height:"100%", width:"40px" };

    var imgBox = this.state.paths.map(function(item){
      return <img style={imgBoxStyle} src={item} />
    });
    var documentsList = documentStrings.map(function(item){
      return <li > <a style={{color:"#D74B1F"}}> {item} </a> </li>
    });
return  (
  <div style={{backgroundColor:"#192930", height: "1000px", marginTop:"20px", paddingLeft:"0px", paddingRight:"0px" }} >



<div id="bg" style={{backgroundColor:"white"}}>
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
  <div id="container" style={{display:"flex", padding: "30px", paddingRight: "10px"}}>
    <div id="left" style={{flex:"1", width: "500px", padding: "20px", paddingRight:"30px", paddingTop: "0px"}}>
      <div  style={mainImgStyle} >
        <img id="mainImg"  className='opaque'  style={imgStyle} src={this.state.paths[0]} />
      </div>
      <br/>
      <br/>
      <br/>
     <div id="mainImg2" style={{display: "block", height:"600px", width:"100%", padding: "0"}} >
       <div style={{display:"inline-block", flex:"0.3", padding: "40px 0 0 90px", width:"30%", height:"100%"}}>
       </div>
       <div style={{display:"inline-block",flex:"0.6", width: "40%", height: "100%", marginTop:"10px"}} id="cf7" className="shadow">
         <img style={imgStyle} className='opaque' src={this.state.paths[0]}/>
         <img style={imgStyle} src={this.state.paths[0]} />
         <img style={imgStyle} src={this.state.paths[1]} />
         <img style={imgStyle} src={this.state.paths[2]} />
       </div>
       <div style={{display:"inline-block",flex:"0.3", padding: "0px", width:"30%", height:"100%"}}> </div>
     </div>

      <div style={{backgroundColor: "none", margin: "0 auto", padding:"0 2%"}}>
        <div id="leftChevron" style={chevronContainerStyle}>
          <FontAwesome style={chevronStyle} onClick={this.switchSlideLeft} name="chevron-left" size="2x"/>
          </div>

        <div id="imgBox" style={{width: "450px", display:"inline-block"}}> {imgBox} </div>

        <div id="rightChevron" style={{...chevronContainerStyle,...{float:"right"}}}>
        <FontAwesome style={chevronStyle} onClick={this.switchSlideRight} name="chevron-right" size="2x"/> </div>
         </div>
    </div>

    <div id="center" style={{flex:"1", width: "500px"}}>
      <h1 style={{color: "#3A3333", padding: "0", margin:"0", paddingBottom:"5px"}}> Guitar Effects X </h1>
      <h3 style={{color:"#4C516C", padding: "0", margin:"0"}}>
      <div style={{display:"inline-block", fontWeight:"300", marginRight:"4px"}}> by  </div>
      <div style={{display:"inline-block", fontWeight:"500"}}> Jesse Ren </div> </h3>

      <div style={{display:"inline-block", marginRight: "20px"}}> 100 views </div>
      <div style={{display:"inline-block"}}> 100 </div>
      <img src="/public/img/hearts.png" style={{height:"20px", display:"inline-block"}}/>

      <br/>

      <div style={{fontSize: "18px", color: "#575b84"}} >
        <br/>

        <strong> Description: </strong> My Project is the Guitar Project
        <div> "My project is the guitar effect pedals. I began this project because I've been playing guitar since high school. When I took ECE65 I became intrigued that simple components can act as filters. Building guitar effect pedals was my way of connecting my hobbies and my area of study." </div>
        <br/>
        <div> 'There are many types of effects, all used in different types of music. Each effect is based on principles we learn in our analog circuit classes. Building guitar effects is a very rewarding experience. All you need to know is how to read a schematic.' </div>
        <br/>
        <div> 'Knowing the basics on what resistors, capacitors and transistors do helps, but is not require. In the process of building, you observe the clipping circuits, the frequency filters, and oscillator circuits in action. You gain troubleshooting skills and get up close and familiar with electrical components. You get better intuition on how a circuit behaves and how you can design it.' </div>
        <br/>
        <strong> Documents: </strong>
        <ul>
          {documentsList}
        </ul>
      </div>
     </div>

    <div id="infoBox" style={{backgroundColor: "#B4B5C0", flex:"0.5", width: "500px"}}>
       <div style={{backgroundColor:"red", width:"50px", height:"50px"}}/>
    </div>

 </div>
  </div>
 </div>
)
}
})

module.exports = Test;
