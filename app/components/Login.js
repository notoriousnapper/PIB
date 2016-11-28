/* Login.js */
var React = require('react');
var Frame = require('../components/Frame');

var Login = React.createClass({
	render:function(){
		var mainStyle = {
      backgroundColor: "white",
        display: "table",
        margin: "0 auto",
        borderRadius: "25px",

        paddingTop: "20px",
        paddingBottom: "20px",
			  opacity: "0.8",
			  zIndex:"1",
				position:"absolute",
				top:"50%",
				left:"50%",
				margin:"-155px -210px"
		};
    var formStyle = {
        paddingBottom: "20px",
      flex: "3"
    };
    var paddingStyle = {
      flex: "1"
    };
    var paddingStyle = {
      flex: "1"
    };

    var paddingStyle = {
      flex: "1"
    }

    var loginStyle = {
      padding:"10px",
      marginTop:"20px",
      width:"100%",
      backgroundColor: "#FAC129",
      color: "white"
    };

    var fbStyle = {
      padding:"10px",
      marginTop:"20px",
      width:"100%",
      backgroundColor: "#3D5997",
      color: "white"
    };

									// Uncomment when ready
                  // <button style={loginStyle} type="submit">Login</button>

		return(

			<div style={mainStyle}>
      <Frame>
            <form style={formStyle} action="/login" method="post">
                  <label>Email</label>
                  <div class="form-group">
                      <input style= {{width:"400px"}} type="text" class="form-control" name="email"/>
                  </div>

                  <label>Password</label>
                  <div class="form-group">
                      <input style= {{width:"400px"}} type="password" class="form-control" name="password"/>
                  </div>


                  <button style={loginStyle} type="button"><a href="user"> Login </a></button>

                  <button style={fbStyle} type="submit" >Login</button>
              </form>
              <div style={paddingStyle}></div>
      </Frame>


			</div>
    );
    }
});

module.exports = Login;
