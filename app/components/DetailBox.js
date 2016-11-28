/* DetailBox */

/* Proj.js */



var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var ImageComponent = require('../components/ImageComponent');



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

          var topStyle= { height:'60%' };
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

var DetailBox = React.createClass({
        /* Should request another call, etc */
        /* Server should do the filtering so traffic/ data is minimal */
        render: function(){
        var imgs = [{"logo":"../public/img/logo3.png"}, "../public/img/logo3.png"]
        var menu =['PROJECTS', 'HOME', 'ABOUT', 'CONTACT']
        var imgUrl =this.props.url;



        var containerStyle = {
          borderStyle: "solid",
          height: "80%"  ,
          // weight: "100px",
          paddingLeft:"100px"
        }



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

        var BioStyle={
            fontSize: "14px",
            fontFamily: "Roboto Condensed"
        }
        var imgStyle = {
          height: "70px",
          width: "70px"
        }
        /* Container Style */

        var BioBoxStyle = {
          width: "140px"
        }
        var TagBoxStyle = {
          // paddingTop: "20px",
          width: "140px"
        }
        var buttonStyle = {
          height: "40px",
          flex: "1"
        }

        alert("These are the project's data" + JSON.stringify(this.props.params, null, 4));

        /* Pre-process tag */

        var tags = function(){

          var res = '';
          this.props.params.tags.map(function(tag){
          res+= tag;
        })
          return res; 
        };



        return(
        		<div style={containerStyle}>	
            <TextComponent style={AboutStyle} message={this.props.params.likes + ' likes'}></TextComponent>
            <TextComponent style={AboutStyle} message={this.props.params.downloads + ' downloads'}></TextComponent>
            <TextComponent style={AboutStyle} message={this.props.params.views + ' views'}></TextComponent>
            <TextComponent style={ByStyle} message={this.props.params.author}></TextComponent>
            <ImageComponent url={this.props.params.author_picUrl}
            	style={imgStyle}/>
              <div style={BioBoxStyle}> 
                <TextComponent style={BioStyle} message={'bio: ' + this.props.params.bio}></TextComponent>
              </div>
              <div style={TagBoxStyle}> 
                <TextComponent style={BioStyle} message={'Tags: ' + this.props.params.tags}></TextComponent>
              </div>


				</div>
              )
                }
});


module.exports = DetailBox;