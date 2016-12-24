var React = require('react');
var ReactRouter = require('react-router');

var LabelCarousel = React.createClass({

getInitialState: function(){
  return {
    counter: 0
  }
},
switchLabel: function(){
  var box = document.querySelector('.carouselbox');
  var items = box.querySelectorAll('.content li');
  var amount = items.length;
  var current = items[this.state.counter];

  var direction = 1;
  if(this.state.counter == 2) {
    console.log("end");
  }
  else{
  current.classList.remove('current');
  this.state.counter = this.state.counter + direction;
  // if (direction === -1 &&
  //     this.state.counter < 0) {
  //   this.state.counter = amount - 1;
  // }
  if (direction === 1 &&
      !items[this.state.counter]) {
  }
  current = items[this.state.counter];
  current.classList.add('current');
  // this.setState({counter: this.state.counter + 1});
  }

},
render: function(){
if(this.props.checked) this.switchLabel();  // Parent notifies to switch label

return(
  <div className="carouselbox">
   <div className="active buttons">
     <button className="next active" onClick={this.switchLabel}>
       <span className="offscreen">Next</span> ▶
     </button>
   </div>
   <ol className="content active">
     <li className="current" >
        {"Stage 1"}
     </li>
     <li >
        {"Stage 2"}
     </li>
     <li >
        {"Stage 3"}
     </li>
   </ol>
 </div>
)
}
})

module.exports = LabelCarousel;
