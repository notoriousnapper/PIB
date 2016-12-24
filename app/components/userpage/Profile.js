/* Login.js */
var React = require('react');
var Profile = React.createClass({
	render:function(){
		var bgStyle = {
			  height:  "800px",
			  maxHeight: "100%",
			  maxWidth: "100%",
			  backgroundSize: "100% 100%",
			  opacity: "0.8",
			  zIndex:"1"
		}
    var formStyle = {
      flex: "3"
    }
    var paddingStyle = {
      flex: "1"
    }
		return(
			<div style={bgStyle}>
         <div style={{display:"flex"}}>

              <div style={paddingStyle}></div>
			        <div class="col-sm-6">
			            <div class="well">
			                <h3><span class="fa fa-user"></span> Local</h3>
			                    <p>
			                    </p>
			            </div>
			            <div class="well">
			            <h3 class="text-primary"><span class="fa fa-facebook"></span> Facebook</h3>
			                   <p>
			                   </p>
			        </div>


              <div style={paddingStyle}></div>
  			</div>
			</div>
			</div>
    );
    }
});

module.exports = Profile;
