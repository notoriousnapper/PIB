/* main.js */



var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var LogoComponent = React.createClass({
  render: function(){
    var logoStyle = {
      width:"87px",
    };
    var centerStyle = {
      display:"block",
      width:"87px",
      height:"50px",
      margin:"auto",
      position:"relative",
      textAlign:"center",
      fontSize:"32px",
      cursor:"pointer"
    };
    var cornerStyle = {
      width:"0",
      height:"0",
      borderLeft:"43.5px solid transparent",
      borderRight:"43.5px solid transparent",
      borderTop:"25px solid white",
      position:"absolute",
      top:"100%",
      left:"0"
    };
    var url = "../public/img/logo3.png";
    return (
      <div style={centerStyle}>
        <img src={this.props.url} style={logoStyle}/>
        <div style={cornerStyle}></div>
      </div>
    )
  }
});

var GlobalNav = React.createClass({
        render: function(){
          var navbar = {
            width:"100%",
            height:"50px",
            backgroundColor: "white",
            position:"fixed",
            top:"0",
            textTransform:"uppercase",
            zIndex:"3",
            boxShadow:"0 0 1px 1px gray"
          };
          var navList = {
            width:"calc(50% - 43.3px)",
            position:"absolute",
            left:"0",
            top:"0"
          };
          var navLink = {
            display:"block",
            float:"left",
            width:"25%",
            textAlign:"center",
            lineHeight:"50px",
            cursor:"pointer"
          };
          var fakeShadow = {
            width:"1em",
            margin:"auto",
            position:"relative",
            textShadow:"0 1px 1px gray",
            fontSize:"35px",
            lineHeight:"21px",
            transform:"scaleX(3.1)",
            color:"white",
            zIndex:"-1"
          };
          var user = {
            position:"absolute",
            top:"0",
            right:"0"
          };
          var sign = {
            height:"50px",
            padding:"10px",
            float:"right",
            lineHeight:"30px",
            cursor:"pointer",
            fontSize:"18px",
            color:"#242323"
          };

          var containerStyle= {
            // marginLeft: "100px",
            // paddingLeft:"100px",
            width:"50%",
            height:"50px",
            display: "flex"
            // boxShadow: "0px 10px 9px grey"
          };
          var containerStyleInner= {
            // marginLeft: "100px",
            // paddingLeft:"100px",
            width:"50%",
            height:"50px",
            display: "flex",
            // boxShadow: "0px 10px 9px grey",
            margin: "0 auto"
          };
          var wrapperStyle = {
            borderColor: "#E6E6E6",
            textAlign:"center",
            fontFamily: "'Bebas Neue', sans-serif",
            textDecoration: "none",
            padding: "0px 6px 0px 6px",
            width:"30%",
            minWidth: "60px"
          };
          var wrapperStyle2 = {
                  borderColor: "#E6E6E6",
                        textAlign:"center",
                          fontFamily: "'Bebas Neue', sans-serif",
                          textDecoration: "none",
                            padding: "0px 6px 0px 6px",
                                       width:"100%"};
          var topStyle= { height: '40%' };
          var bottomStyle= {
                  fontFamily: 'Helvetica',
                  height:'30%',
                  color: '#242323',
                  fontSize: '18px',
                  textDecoration:"none",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  // overflow: "hidden",

          };


          var listItems = this.props.items.map(function(item){
          		  var url = "/"+item.toLowerCase();
                  return (
                  <Link to={url} style={navLink}>
                    <div style={topStyle}></div>
                        <div style={bottomStyle} >{item}</div>
                  </Link>)
        });
          return (
            <div style={navbar}>
              <div style={navList}>
                {listItems}
              </div>
              <LogoComponent url="../public/img/logo3.png"/>
              <div style={fakeShadow}>▼</div>
              <div style={user}>
                <Link to={"/login"} style={sign}>Log In</Link>
                <Link to={"/signup"} style={sign}>Sign Up</Link>
              </div>
            </div>
          )
        }
});

var TextComponent = React.createClass({
    render: function(){
    var message = this.props.message;
    return (
            <div style={ this.props.style}>{message} </div>
            )
            }
});


var whiteOverlayStyle = {
    backgroundColor: "white"
}


var Main = React.createClass({
        render: function(){
        var imgs = [{"logo":"../public/img/logo3.png"}, "../public/img/logo3.png"]
        var menu =['HOME', 'PROJECTS', 'THE TEAM', 'ABOUT']
        var navBarStyle={
          boxShadow: "10px 10px 5px grey",
          // borderStyle:"solid",
          borderColor: "black",
          backgroundColor: "black",
          borderWidth:"100px"
        }

        var textStyle = {


        }

        return(
        		<div>
            <div>
                <GlobalNav items={menu} style={navBarStyle}/>
				{this.props.children}
				</div>
        </div>
              )
                }
});


module.exports = Main;
