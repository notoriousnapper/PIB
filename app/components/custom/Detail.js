var React = require('react');
var ReactRouter = require('react-router');

var Detail = React.createClass({

getInitialState: function(){
  return {
  }
},
componentDidMount: function() {
},
render: function(){
  var boxStyle = { float: "left", width: "220px", height: "440px",
    backgroundColor: "transparent", padding: "10px 20px 20px 10px", margin: "180px 0px 10px 20px",
    color: "white", borderColor:"black", borderWidth: "10px"
  };
  var featuredStyle = {
    color: "#F1C232",
    fontSize: "30px",
    textDecoration: "underline"
  };
  return <div style={boxStyle}>
        <div style={{ padding: "10px 20px 10px 20px",  backgroundColor: "#F1C232", width: "200px"}}>
          <h4 style={{color: "black", fontSize: "30px"}}> FEATURED PROJECT IN A BOX </h4>
          </div>
        <h4 style={{fontSize: "30px"}}> Quad-Copter </h4>
        <h4 style={{fontSize: "19px"}}> Multirotor helicopter that is lifted and propelled by four rotors.
        </h4>
        <button style={{borderColor:"white", backgroundColor: "Transparent", color:"white", padding: "10px 20px 10px 20px",
        height: "45px", width: "120px", fontSize: "14px"}}> See Project </button>
   </div>
}
});

module.exports = Detail;
