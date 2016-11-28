/* Proj.js */



var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var ImageComponent = require('../components/ImageComponent');
var DetailBox = require('../components/DetailBox');



var LogoComponent = React.createClass({
        render: function(){
                        var logoStyle = {
                                width:"90px"
                              };
                        var containerStyle_logo = { 
                                marginLeft:"100px",
                                paddingLeft:"160px",
                                height:"50px",
                                width: "410px",
                                borderColor: "#E6E6E6",
                                borderStyle: "solid",
                                borderWidth: "0px 1px 0px 0px",
                                minWidth:"60px"
            };
            var url = "../public/img/logo3.png";
            return (
                    <div style={containerStyle_logo}>
                                <img src={this.props.url} style={logoStyle}/>
                    </div>
            )
        }
});

var GlobalNav = React.createClass({
        render: function(){
          var containerStyle = {
            marginLeft: "100px",
            paddingLeft:"100px",
            width:"60%",
            height:"50px",
            display: "flex"};

          var wrapperStyle = {
                  borderColor: "#E6E6E6",
                    borderStyle: "solid",
                      borderWidth: "0px 1px 0px 1px",
                        textAlign:"center",
                          fontFamily: "'Ubuntu', sans-serif",
                            padding: "0px 6px 0px 6px",
                                       width:"30%"};

          var topStyle= { height: '60%' };
          var bottomStyle= {
                  height:'30%',
                  color: '#242323',
                  fontSize: '13px',
                  textDecoration:"none", 
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
                  <div style={containerStyle}>
                  <LogoComponent url="../public/img/logo3.png" />
                  {listItems}
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

var Proj = React.createClass({

        /* Should request another call, etc */
        /* Server should do the filtering so traffic/ data is minimal */

        render: function(){
        var imgs = [{"logo":"../public/img/logo3.png"}, "../public/img/logo3.png"]
        var menu =['PROJECTS', 'HOME', 'ABOUT', 'CONTACT']
        var imgUrl =this.props.url;


        /* Font Styles */
        var TitleStyle ={
            fontSize: "30px",
            fontFamily: "Roboto Condensed"
        }
        var ByStyle ={
            fontSize: "20px",
            fontFamily: "Roboto Condensed"
        }
        var AboutStyle ={
            fontSize: "18px",
            fontFamily: "Roboto Condensed"
        }

        var imgStyle = {
          height: "400px",
          width: "600px",
        }

        var containerStyle = {
          height: "400px",
          borderStyle:"solid",
          paddingLeft:"200px",
          paddingRight:"200px",
        }
        var flexStyle = {
          height: "100%",
          display: "flex"
        }
        var infoBoxStyle = {
          padding: "15px",
          paddingRight: "155px",

        }
        var buttonStyle = {
          height: "40px",
          flex: "1"
        }
        var fillerStyle = {
          flex: "10"
        }


        var testStyle= {
          display: "flex"
        }

        var DescriptionStyle= {




        }
        //alert("These are the project's data" + JSON.stringify(this.props.params, null, 4));
        //alert("These are the project's data" + JSON.stringify(this.props.params, null, 4));
        return(
        		<div style={containerStyle}>	
                <div style={{paddingLeft: "10px", height: "100%", display: "flex", backgroundColor: "white" }}>
                <ImageComponent style={imgStyle} url={this.props.params.picUrl} ></ImageComponent>
                    <div>
                    <DetailBox params={this.props.params} /> 
                        <div style={testStyle}>
                            <button style={buttonStyle}> Download </button>
                            <button style={buttonStyle}> Save </button>
                        </div>
                    </div>
                </div>


            <div style={infoBoxStyle}> 
              <div style={flexStyle}> 
                    <div style={{marginBottom: "30px"}}>
                    <TextComponent style={TitleStyle} message={this.props.params.name}></TextComponent>
                    <TextComponent style={ByStyle} message={'by ' + this.props.params.author}></TextComponent>
                    </div>


                        <div style={fillerStyle}/>
                    <button style={buttonStyle}> Like </button>
                    <button style={buttonStyle}> Share </button>
              </div>


                <TextComponent style={AboutStyle} message={this.props.params.about}></TextComponent>
                  <TextComponent style={AboutStyle} message={this.props.params.instructions}></TextComponent>
            </div>







            <div className="infoBox" style={DescriptionStyle}>
              Instructions
              <TextComponent style={AboutStyle} message={this.props.params.instructions}></TextComponent>
            </div>






				</div>
              )
                }
});


module.exports = Proj;