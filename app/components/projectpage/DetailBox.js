/* DetailBox */

/* Proj.js */



var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var ImageComponent = require('../../components/custom/ImageComponent');
var TextComponent = require('../../components/custom/TextComponent');
var Bar = require('../../components/Bar');
var DetailBox = React.createClass({
        /* Should request another call, etc */
        /* Server should do the filtering so traffic/ data is minimal */
        render: function(){
        var imgs = [{"logo":"../public/img/logo3.png"}, "../public/img/logo3.png"]
        var menu =['PROJECTS', 'HOME', 'ABOUT', 'CONTACT']
        var imgUrl =this.props.url;


        var containerStyle = {
          // borderStyle: "solid",
          height: "80%",
          // weight: "100px",
          paddingLeft:"100px",
          width: "380px"
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
        // alert("These are the project's data" + JSON.stringify(this.props.data, null, 4));
        /* Pre-process tag */

        var tags = function(){
          var res = '';
          this.props.data.tags.map(function(tag){
          res+= tag;
        })
          return res;
        };

        return(
        		<div style={containerStyle}>
              <div style={{backgroundColor:"#E2E3E5", padding: "10px"}}>
                  <Bar> <TextComponent style={{textAlign:"center"}} message={'About'}/> </Bar>
                      <TextComponent style={AboutStyle} message={this.props.data.downloads + ' downloads'}></TextComponent>
                      <TextComponent style={AboutStyle} message={this.props.data.views + ' views'}></TextComponent>
                      <TextComponent style={AboutStyle} message={'Author'}/>
                  <div style={{display:"inline-block", width: "40%"}}>
                      <TextComponent style={ByStyle} message={this.props.data.author}></TextComponent>
                      <ImageComponent url="../public/img/Faceshot.png"
                      	style={imgStyle}/>
                        <div style={BioBoxStyle}>
                          <TextComponent style={BioStyle} message={'bio: ' + this.props.data.bio}></TextComponent>
                        </div>
                    </div>
              </div>
              {this.props.children}


				</div>
              )
                }
});


module.exports = DetailBox;


// "url="../public/img/logo3.png""
// url={this.props.data.author_picUrl}
