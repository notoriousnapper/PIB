var React = require('react');
var ReactRouter = require('react-router');


var Carousel = React.createClass({

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
  <div className="carouselbox">
   <div className="buttons">
     <button className="prev">
       ◀ <span className="offscreen">Previous</span>
     </button>
     <button className="next">
       <span className="offscreen">Next</span> ▶
     </button>
   </div>
   <ol className="content">
     <li>
     <img style={{height:"500px", width:"500px"}} src="/public/img/carousel_2.jpg"/>
     </li>
     <li>
     <img style={{height:"500px", width:"500px"}} src="/public/img/carousel_3.jpg"/>
     </li>
     <li>
     <img  style={{height:"500px", width:"500px"}} src="/public/img/carousel_4.jpg"/>
     </li>
   </ol>
 </div>
)
}
})


module.exports = Carousel;
