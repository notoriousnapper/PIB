var React = require('react');
var ReactRouter = require('react-router');
var Detail = require('../../components/custom/Detail');


var Carousel = React.createClass({

getInitialState: function(){
  return {
    ctr  : 0,
    paths: [
      "../public/img/quadcopter.jpg",
      "../public/img/carousel_2.jpg",
      "../public/img/carousel_3.jpg",
      "../public/img/carousel_4.jpg"
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
  var box = document.querySelector('.carouselbox');
   var next = box.querySelector('.next');
   var prev = box.querySelector('.prev');
   var items = box.querySelectorAll('.content li');
   var counter = 0;
   var amount = items.length;
   var current = items[0];
   box.classList.add('active');
   function navigate(direction) {
     current.classList.remove('current');
     counter = counter + direction;
     if (direction === -1 &&
         counter < 0) {
       counter = amount - 1;
     }
     if (direction === 1 &&
         !items[counter]) {
       counter = 0;
     }
     current = items[counter];
     current.classList.add('current');
   }
   next.addEventListener('click', function(ev) {
     navigate(1);
   });
   prev.addEventListener('click', function(ev) {
     navigate(-1);
   });
   navigate(0);
},
render: function(){

return(
  <div style={{backgroundColor: "black"}}>
     <div style={{height: "500px", width: "100%", backgroundImage: 'url(' + this.state.paths[this.state.ctr] + ')',
     backgroundSize: "contain",
     backgroundPosition: "center",
    //  backgroundSize: "cover",
      backgroundRepeat: "no-repeat"}}>
       <div style={{margin: "30% 0px 30% 10px", verticalAlign: "middle", float: "left", height: "100%"}} ><button  style={{margin:"auto"}}  onClick={this.switchSlideLeft}> {"<"} </button> </div>

      <Detail />


       <div style={{margin: "30% 10px 30% 0px", marginBottom: "30%", verticalAlign: "middle", float: "right", height: "100%"}} ><button   onClick={this.switchSlideRight}> {">"} </button> </div>
     </div>
 </div>
)
}
})

    //  <img style={{height:"500px", width:"500px"}} src="/public/img/carousel_2.jpg"/>
    //  </li>
    //  <li>
    //  <img style={{height:"500px", width:"500px"}} src="/public/img/carousel_3.jpg"/>
    //  </li>
    //  <li>
    //  <img  style={{height:"500px", width:"500px"}} src="/public/img/carousel_4.jpg"/>

module.exports = Carousel;
