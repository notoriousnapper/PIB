/* Login.js */



var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var SignUp = React.createClass({
	render:function(){
		var bgStyle = {
				marginTop:"70px",
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
							<div class="container">

	<div class="col-sm-6 col-sm-offset-3">

	    <h1><span class="fa fa-sign-in"></span> Signup</h1>
	        <div class="alert alert-danger"></div>

	    <form action="/signup" method="post">
	        <div class="form-group">
	            <label>Email</label>
	            <input type="text" class="form-control" name="email"/>
	        </div>
	        <div class="form-group">
	            <label>Password</label>
	            <input type="password" class="form-control" name="password"/>
	        </div>

					<Link to={"/profile"}>
	        		<button type="submit" class="btn btn-warning btn-lg">Signup</button>
					</Link>
	    </form>

	    <hr/>

	    <p>Already have an account? <a href="/login">Login</a></p>
	    <p>Or go <a href="/">home</a>.</p>

			<a href="/signup" class="btn btn-default"><span class="fa fa-user"></span> Local Signup</a>
				<a href="/auth/facebook" class="btn btn-primary"><span class="fa fa-facebook"></span> Facebook</a>

	</div>

	</div>
              <div style={paddingStyle}></div>
  			</div>
			</div>
    );
    }
});
//	    <!-- show any messages that come back with authentication -->
/*
	    <% if (message.length > 0) { %>
	        <div class="alert alert-danger"><%= message %></div>
	    <% } %>
			*/


module.exports = SignUp;
