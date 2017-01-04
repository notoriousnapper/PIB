var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


var Proj3 = React.createClass({
        getInitialState: function(){
          return {}
        },
        render: function(){
          var padding = {
            flex:"0.5",
            backgroundColor: "#1a2930"
          }
          var paddingRight = {
            flex:"0.5",
            backgroundColor: "white"
          }

          var centerPadding = {
            flex:"1.5", backgroundColor: "white",
            // padding: "10px 10px",
            minWidth: "700px"
          }
          return(
        		<div style={{display: "flex", width:"100%", height: "1000px", padding: "0px 50px 0px 50px", marginTop: "100px"}}>
                <div id="left" style={padding}>
                  Haha
                 </div>

                <div id="center" style={centerPadding}>
                          <div className="section" id="title">
                                <div style={{width: "100%", fontSize: "30px"}}> {"ArcadeBox"} </div>
                                <div style={{width: "100%"}}>
                                  <button className="cta-button"> Aaa </button>
                                  <button className="cta-button"> Aaa </button>
                                  <button className="cta-button"> Aaa </button>
                                </div>
                           </div>


                          <div id="blind">
                              <div className="main-img">
                                  <img src="http://res.cloudinary.com/djmk9vktk/image/upload/v1482991159/arcadebox_slsyln.jpg"/>
                              </div>
                          </div>


                          <div className="section half"> {"Introduction"} </div>
                          <div style={{display:"flex", margin: "0", borderWidth: "4px 0 0 0", borderColor: "black", borderStyle:"solid",
                              backgroundColor:"white"}}>

                              <div className="section" > {"Skills Learned"}
                                <ul>
                                  <li> Soldering </li>
                                  <li> Circuits </li>
                                  <li> C++ </li>
                                </ul>
                              </div>
                              <div className="section" > {"Preqs"}
                                <ul>
                                  <li> Soldering </li>
                                  <li> Circuits </li>
                                  <li> C++ </li>
                                </ul>
                              </div>



                          </div>
                              <div className="section-2"> {"Materials"} </div>


                </div>

                <div id="right" style={padding}> </div>


    				</div>
              )
                }
});
                      // <button className="cta-button"> Click Me</button>
module.exports = Proj3;
