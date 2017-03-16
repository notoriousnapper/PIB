/* Proj.js */
var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var ImageComponent = require('../../components/custom/ImageComponent');
var TextComponent = require('../../components/custom/TextComponent');
var DetailBox = require('../../components/projectpage/DetailBox');
var Scroll = require('../../components/projectpage/Scroll');

var IntroBox = require('../../components/IntroBox');
var Bar = require('../../components/Bar');

var Step = require('../../components/addpage/Step');

var Pad = require('../../components/Pad');
var Frame = require('../../components/Frame');

var FontAwesome = require('react-fontawesome');

var $ = require('jquery');
var devUrl ='http://localhost:3000';
var prodUrl = 'https://still-forest-90731.herokuapp.com';
var useUrl = prodUrl;

var IntroData =
'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nesciunt illo officiis expedita placeat asperiores modi obcaecati accusantium iste sed iure labore nemo iusto, id praesentium aspernatur natus, nobis ipsum.';

var Proj = React.createClass({
        getInitialState: function(){
          return ({
            data: {
            'name':'',
            'author': '',
            'authorImg': '',
            'url': '',
            'about': '',
            'instructions': '',
            'likes': '',
            'downloads': '',
            'views': '',
            'steps':[
             {
                title: '',
                url: '',
                instructions: ''
              }
            ]
            } ,
            /* Temporary fix, this should go in the data object above */
            //  steps:[
            // {
            //     title: 'beginning State',
            //     url: '/',
            //     instructions: 'sth'
            //   },
            //   {
            //     title: 'beginning State',
            //     url: '/',
            //     instructions: 'sth'
            //   },
            //   {
            //     title: 'beginning State',
            //     url: '/',
            //     instructions: 'sth'
            //   }
            // ],
            navBar: false
          })
        },
        forceAjax:function(){
          var name = this.props.params;
          console.log('query param is' + name);
           $.ajax({
                url: useUrl + '/getone/' + name,
                dataType: 'json',
                cache: true,
                success: function(res) {
                  this.setState({data: res[0]});
                }.bind(this),
                error: function(xhr, status, err) {
                  console.error(useUrl + name, status, err.toString());
                }.bind(this)
              });
        },
        updateField: function(type){
          var projectName = this.props.params;
          var field = "";
          switch(type){
            case 0:  field = 'likes'; break;
            case 1:  field = 'downloads'; break;
            case 3:  field = 'views'; break;
          }
           $.ajax({
                url: useUrl + '/getone/' + projectName + '/' + field,
                dataType: 'json',
                method: 'PUT',
                cache: true,
                success: function(res) {
                  console.log('Response is: ' + res);
                  this.forceAjax();
                }.bind(this),
                error: function(xhr, status, err) {
                  console.error(useUrl + name, status, err.toString());
                }.bind(this)
              });
        },
        updateLike:function(){
          this.updateField(0);
        },
        updateDownload:function(){
          this.updateField(1);
        },
        updateViews: function(){
          this.updateField(2);
        },
        componentDidMount: function(){
          this.forceAjax();
          this.updateViews();
          /* Updates Page Views */
        },
        /* Should request another call, etc */
        /* Server should do the filtering so traffic/ data is minimal */
        render: function(){
          var imgUrl =this.props.url;
          /* Font Styles */
          var TitleStyle ={
            fontSize: "40px",
            fontFamily: "Roboto Condensed",
            fontWeight: "570",
            textTransform: "Capitalize",
            flex:"1"
          }
          var byStyle ={
            fontSize: "16px",
            fontFamily: "Roboto Condensed",
            whiteSpace: "nowrap",
            minWidth: "200px",
            paddingTop: "13px",
            paddingLeft: "20px",
            // overflow: "hidden",
            flex:"8"
          }
          var AboutStyle ={
            fontSize: "18px",
            fontFamily: "Roboto Condensed"
          }

          var imgStyle = {
            height: "400px",
            width: "600px",
            minWidth: "300px",
            maxWidth:"100%",
            minHeight: "200px",
            margin: "auto",
            display: "block"
          }
          /* Padding */
          var containerStyle = {
            height: "400px",
            // marginTop: "40px",
            // paddingLeft:"400px",
            // paddingRight:"400px",
            paddingTop: "100px"
          }
          var flexStyle = {
            height: "100%",
            display: "flex"
          }
          var infoBoxStyle = {
            padding: "15px",
            paddingRight: "155px"

          }
          var buttonStyle = {
            width:"75px",
            height:"30px",
            verticalAlign:"middle",
            border:"0",
            borderRadius:"5px",
            padding:"0",
            margin:"0 5px",
            backgroundColor:"#DDD",
            boxShadow:"0 0 2px #222",
            color: "black"
          }
          var fillerStyle = {
            flex: "10"
          }
          var testStyle= {
            display: "flex"
          }
          var iconStyle={
            height: "30px",
            width: "30px",
          }
          // By line
          // <div style={{fontSize: "16px", fontFamily: "Roboto Condensed", whiteSpace: "nowrap", minWidth: "200px", flex:"3"}}>{'by ' + this.state.data.author}</div>
          // var Steps = this.CallSteps();
          var nameArray = this.state.data.name.split(" ");
      		var displayName = nameArray[0].charAt(0).toUpperCase() + nameArray[0].substr(1);
      		for(var i = 1; i < nameArray.length; i++){
      			var displayName = displayName + " " + nameArray[i].charAt(0).toUpperCase() + nameArray[i].substr(1);
      		}

          return(
            <div style={{display:"flex"}}>
              <div id="left" style={{flex:"0.5"}}></div>
              <div id="center" style={{display:"flex", flex: "1.5"}}>
                <div style={containerStyle} style={{width:"100%", margin:"80px auto 20px", borderRadius:"5px", backgroundColor:"white"}}>
                  <div style={{width:"100%", padding:"10px",   display:"inline-block", borderBottom: "2px solid #6C727C"}}>
                    <div style={{ width: "100%", display:"flex", flexDirection:"column", borderRadius:"5px"}}>
                      <div style={{display:"block"}}>
                        <div style={{float:"right"}}>
                          <TextComponent message={"By " + this.state.data.author} style={{fontSize:"16px"}}></TextComponent>
                          <ImageComponent url={this.state.data.authorImg} style={{height:"60px", float:"right"}}/>
                        </div>
                        <div style={{display:"inline-block"}}>
                          <TextComponent style={TitleStyle} message={displayName}></TextComponent>
                        </div>
                        <div>
                          <span>{this.state.data.views} Views</span>
                          <button onClick={this.updateLike} style={buttonStyle}>
                            <ImageComponent style={iconStyle} url={'http://res.cloudinary.com/djmk9vktk/image/upload/v1473436332/like_tb1jbs.png'}/> {this.state.data.likes}
                          </button>
                          <a onClick={this.updateDownload} href={this.state.data.name + ".pdf"}>
                            <button style={buttonStyle}>
                              <FontAwesome name="download" size="2x"/> <span style={{position:"relative", top:"-6px"}}>{this.state.data.downloads}</span>
                            </button>
                          </a>
                        </div>
                        <div style={{display:"inline-block", float: "right"}}>
                          <div style={{width:"100%", overFlow: "hidden", display:"flex", justifyContent: "space-between"}}>
                            <div style={{width:"60%"}}></div>
                            <div className={'Filler'} style={{flexGrow:"3", width:"60%" }}></div>
                            <Pad hw={['100%','20px']}/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{maxHeight:"430px", width:"100%", display: "block"}}>
                    <div id="gallery" style={{clear:"both", padding:"10px 0"}}>
                      <ImageComponent style={imgStyle} url={this.state.data.url}/>
                      <div style={{margin:"10px auto", width:"600px"}}></div>
                    </div>
                  </div>
                </div>
              </div>

            <div id="right" style={{flex:"0.5"}}> </div>
            </div>
          )
        }
      });

      // <Step url={'http://res.cloudinary.com/djmk9vktk/image/upload/v1473436332/like_tb1jbs.png'} num={1}>Hello?</Step>

module.exports = Proj;
