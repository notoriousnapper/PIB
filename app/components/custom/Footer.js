var React = require('react');
var ReactRouter = require('react-router');

var Footer = React.createClass({
        render: function(){
          var navbar = {
            width:"100%",
            height:"60px",
            backgroundColor: "white",
            // position:"fixed",
            top:"0",
            textTransform:"uppercase",
            zIndex:"3",
            boxShadow:"0 0 1px 1px gray"
          };
          var navList = {
            width:"calc(50% - 343.3px)",
            position:"absolute",
            left:"0",
            top:"10px",
            borderRightColor: "black",
            borderRightWidth: "10px"
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
                  fontFamily: 'lucida grande, Helvetica',
                  height:'30%',
                  // color: '#242323',
                  fontSize: '16px',
                  // fontWeight: "bold",
                  textDecoration:"none",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  color: "#666666"
                  // overflow: "hidden",

          };
          // var listItems = this.props.items.map(function(item){
          // 		  var url = "/"+item.toLowerCase();
          //         return (
          //         <Link to={url} style={navLink}>
          //           <div style={topStyle}></div>
          //               <div style={bottomStyle} >{item}</div>
          //         </Link>)
        // });
          return (
            <div style={navbar}>
              <div style={navList}>
              </div>
            </div>
          )
        }
});

module.exports = Footer;
