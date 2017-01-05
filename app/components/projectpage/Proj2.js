var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var devUrl ='http://localhost:3000';
var prodUrl = 'https://still-forest-90731.herokuapp.com';
var useUrl = prodUrl;

var $ = require('jquery');

var Proj2 = React.createClass({
        getInitialState: function(){
          return { data: []}
        },
        forceAjax:function(){
  var name = this.props.params;
  console.log('query param is' + name);
   $.ajax({
        url: useUrl + '/getone/' + name,
        dataType: 'json',
        cache: true,
        success: function(res) {
          // alert('Final Stretch' + JSON.stringify(res,null,4));
          this.setState({data: res[0]});
          var Steps = this.CallSteps();
          alert(JSON.stringify(res[0], null, 4));


        }.bind(this),
        error: function(xhr, status, err) {
          console.error(useUrl + name, status, err.toString());
        }.bind(this)
      });
      },
        componentDidMount: function(){
          this.forceAjax();
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
            minWidth: "700px"
          }
          return(
        		<div style={{display: "flex",  width:"100%", height: "1000px", padding: "0px 0px 0px 0px", marginTop: "100px"}}>
                <div id="left" style={padding}> </div>
                <div id="center" style={centerPadding}>
                          <div className="section half">

                          <div>{"Introduction"}</div>
                          <p id="desc"> {this.state.data.about} </p>

                           </div>
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
                              <div className="section" style={{display:"flex", margin: "0", borderWidth: "4px 0 0 0", borderColor: "black", borderStyle:"solid",
                                  backgroundColor:"white"}}> {"Materials"} </div>
                </div>
                <div id="right" style={padding}> </div>


    				</div>
              )
                }
});
                      // <button className="cta-button"> Click Me</button>
module.exports = Proj2;
