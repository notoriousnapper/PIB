/* main.js */



var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;



var ImageComponent = React.createClass({
        render: function(){
                        var logoStyle = {
                                width:"90px"
                              };
                        return (
                                <img src={this.props.url} style={logoStyle}/>
                               )
                }
});

var LogoComponent = React.createClass({
        render: function(){
                        var logoStyle = {
                                width:"90px",
                                zIndex:"2"
                              };
                        var containerStyle_logo = { 
                                height:"50px",
                                minWidth:"60px", 
                                width: "90px",
                                display: "block"
            };
            var url = "../public/img/logo3.png";
            return (
                    <div style={containerStyle_logo}>
                                <img src={this.props.url} style={logoStyle}/>
                                <img src={'/public/img/logo_triangle.png'} style={logoStyle}/>
                    </div>
            )
        }
});

var GlobalNav = React.createClass({
        render: function(){
          var containerStyleAll = {
            // marginLeft: "100px",
            // paddingLeft:"100px",
            margin:"0",
            padding:"0",
            width:"100%",
            height:"50px",
            display: "flex",
            boxShadow: "0px 10px 9px grey",
            backgroundColor: "white"
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
                                       width:"30%"};

          var wrapperStyle2 = {
                  borderColor: "#E6E6E6",
                        textAlign:"center",
                          fontFamily: "'Bebas Neue', sans-serif",
                          textDecoration: "none", 
                            padding: "0px 6px 0px 6px",
                                       width:"100%"};
          var topStyle= { height: '40%' };
          var bottomStyle= {
                  height:'30%',
                  color: '#242323',
                  fontSize: '18px',
                  textDecoration:"none", 
                  textAlign: "center"

          };


          var listItems = this.props.items.map(function(item){
          		  var url = "/"+item.toLowerCase();
                  return (
                  <Link to={url} style={wrapperStyle}>
                    <div style={topStyle}></div>
                        <div style={bottomStyle} >{item}</div>
                  </Link>)
        });
          return (
                  <div style={containerStyleAll}>
                      <div style={containerStyle}> 
                        <div style={containerStyleInner}> 
                        <Link to={"/works"} style={wrapperStyle2} id="Left Link" >
                             <div style={topStyle}></div>
                              <div style={bottomStyle} >{"What Is a Project-In-A-Box?"}</div>
                        </Link>
                        </div>
                      </div>
                  <LogoComponent url="../public/img/logo3.png" />
                  <div style={containerStyle}>
                    <div style={containerStyleInner}>
                      {listItems}
                      </div >
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
        var menu =['HOME', 'PROJECTS', 'THE TEAM', 'CONTACT']
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
                <GlobalNav items={menu} style={navBarStyle}/>
				{this.props.children} 
				</div>
              )
                }
});


module.exports = Main;