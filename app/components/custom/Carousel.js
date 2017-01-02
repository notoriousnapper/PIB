var React = require('react');
var ReactRouter = require('react-router');
var Detail = require('../../components/custom/Detail');
var $ = require('jquery');



var Carousel = React.createClass({

getInitialState: function(){
  return {
    ctr  : 0,
    paths: [
      // "http://res.cloudinary.com/djmk9vktk/image/upload/v1482991159/arcadebox_slsyln.jpg",
      "http://res.cloudinary.com/djmk9vktk/image/upload/v1482990179/carousel_2_lvukal.jpg",
      "http://res.cloudinary.com/djmk9vktk/image/upload/v1482990180/carousel_3_ez6iml.jpg",
      "http://res.cloudinary.com/djmk9vktk/image/upload/v1482990180/carousel_4_gnmo2p.jpg"
      // "../public/img/carousel_2.jpg",
      // "../public/img/carousel_3.jpg",
      // "../public/img/carousel_4.jpg"
    ]
  }
},
switchSlideLeft: function(inc){
  var newCtr = (this.state.ctr == 3) ? 0 : this.state.ctr + 1;
  this.setState({
    ctr  : newCtr,
    paths: this.state.paths
  });
},
switchSlideRight: function(inc){
  var newCtr = (this.state.ctr == 0) ? 3 : this.state.ctr - 1;
  this.setState({
    ctr  : newCtr,
    paths: this.state.paths
  });
},
componentDidMount: function() {
  var img_array = [1, 2, 3, 4],
         newIndex = 0,
         index = 0,
         interval = 3000;
     (function changeBg() {
             index = (index + 1) % img_array.length;

                 $("#cf7 img").removeClass("opaque");
                 $("#cf7 img").eq(index).addClass("opaque");
                 $("#cf7_controls span").removeClass("selected");
                 $(this).addClass("selected");
                 // console.log(newImage);
         setTimeout(changeBg, interval);
     })();
},
render: function(){
    var imgStyle = {height:"100%", padding: "0%", width:"100%"};
return  (
  <div style={{ backgroundImage: "url(\"http://res.cloudinary.com/djmk9vktk/image/upload/v1482990472/wood_njgiqu.jpg\")", backgroundSize: "100% 100%", backgroundPosition: "center"}}>
     <div style={{display: "block", height:"600px", width:"100%"}} >
       <div style={{display:"inline-block", flex:"0.3", padding: "0px", width:"20%", height:"100%", backgroundColor:"red"}}> </div>
       <div style={{display:"inline-block",flex:"0.6", width: "60%", height: "100%"}} id="cf7" className="shadow" >
         <img style={imgStyle} className='opaque' src={this.state.paths[0]}/>
         <img style={imgStyle} src={this.state.paths[1]} />
         <img style={imgStyle} src={this.state.paths[2]} />
         <img style={imgStyle} src={this.state.paths[3]} />
       </div>
       <div style={{display:"inline-block",flex:"0.3", padding: "0px", width:"20%", height:"100%"}}> </div>
     </div>

//
 </div>
)
}
})
          // <Detail />
/* Correct one here */
    //  <div style={{height: "500px", width: "100%", backgroundImage: 'url(' + this.state.paths[this.state.ctr] + ')',
    //  backgroundSize: "contain",
    //  backgroundPosition: "center",
    // //  backgroundSize: "cover",
    //   backgroundRepeat: "no-repeat"}}>
    //    <div style={{margin: "30% 0px 30% 10px", verticalAlign: "middle", float: "left", height: "100%"}} ><button  style={{margin:"auto"}}  onClick={this.switchSlideLeft}> {"<"} </button> </div>
    //   <Detail />
    //
    //
    //    <div style={{margin: "30% 10px 30% 0px", marginBottom: "30%", verticalAlign: "middle", float: "right", height: "100%"}} ><button   onClick={this.switchSlideRight}> {">"} </button> </div>
    //  </div>
    //

     /* fun */


    //  <img style={{height:"500px", width:"500px"}} src="/public/img/carousel_2.jpg"/>
    //  </li>
    //  <li>
    //  <img style={{height:"500px", width:"500px"}} src="/public/img/carousel_3.jpg"/>
    //  </li>
    //  <li>
    //  <img  style={{height:"500px", width:"500px"}} src="/public/img/carousel_4.jpg"/>

module.exports = Carousel;
