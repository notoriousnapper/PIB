var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


var Scroll = React.createClass({
        getInitialState: function(){
          return {}
        },
        render: function(){

          var boxStyle = {
            verticalAlign: "top",
            display: "inline-block",
            width: "47%",
            height: "275px",
            margin: "10px",
            backgroundColor: "grey",
            /*border: 3px solid #73AD21;*/
            textEmphasis: "center",
            padding: "20px 20px"
          };

          var boxStyle2 = {
            verticalAlign: "top",
            display: "inline-block",
            width: "99%",
            height: "275px",
            margin: "10px",
            backgroundColor: "grey",
            /*border: 3px solid #73AD21;*/
            textEmphasis: "center",
            padding: "20px 20px"
          };

          return(
        		<div style={{display: "block", width:"100%", height: "1000px", backgroundColor: "white", padding: "0px 50px 0px 50px"}}>


            <div style={boxStyle2}> {"Introduction"} </div>


            <div style={boxStyle}> {"Skills Learned"} </div>
            <div style={boxStyle}> {"Preqs"} </div>


    				</div>
              )
                }
});
module.exports = Scroll;
