/* Proj.js */
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

        CallSteps: function(){
           var ctr = 0;
           var res = this.state.data.steps;

           if(res.length== 0){ return (<div> No Instructions Here. </div>)}
           else{

           res = res.map(function(step){
              ctr++;
              return(
                  <Step info={step.instructions}  title={step.title} url={step.url} num={ctr} />
                );
           })
              return res;
            }
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


                }.bind(this),
                error: function(xhr, status, err) {
                  console.error(useUrl + name, status, err.toString());
                }.bind(this)
              });
        },
        updateLike:function(){
          var name = this.props.params;
          console.log('query param is' + name);
           $.ajax({
                url: useUrl + '/getone/' + name + '/' + 'likes',
                dataType: 'json',
                method: 'PUT',
                cache: true,
                success: function(res) {

                  console.log('Response is: ' + res);
                  var Steps = this.CallSteps();
                }.bind(this),
                error: function(xhr, status, err) {
                  console.error(useUrl + name, status, err.toString());
                }.bind(this)
              });
        },
        componentDidMount: function(){
          this.forceAjax();
        },

        /* Should request another call, etc */
        /* Server should do the filtering so traffic/ data is minimal */
        showNav: function(){
          if(!this.state.navBar){
            // this.state.navBar.map(()=> {
              // Uncomment below when you get the chance
            // return (<a> Hello World </a>);
          // });
          }
          else{

          }


          this.state.navBar = !(this.state.navBar); // reverse
        },
        render: function(){
        var imgs = [{"logo":"../public/img/logo3.png"}, "../public/img/logo3.png"]
        var menu =['PROJECTS', 'HOME', 'ABOUT', 'CONTACT']

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
          height: "50%",
          minHeight: "200px"
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
          height: "40px",
          padding: "20px",
          flex: "1"
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
        var navBar = this.showNav();
        // By line
                              // <div style={{fontSize: "16px", fontFamily: "Roboto Condensed", whiteSpace: "nowrap", minWidth: "200px", flex:"3"}}>{'by ' + this.state.data.author}</div>
        // var Steps = this.CallSteps();
        return(
          <div style={{backgroundColor:"#1a2930"}}>
            <div style={{display:"flex"}}>


            <div id="left" style={{flex:"0.5"}}></div>


              <div id="center" style={{display:"flex", flex: "1.5"}} >
                        <div style={containerStyle}>
                          <Bar style={{width:"100%", display:"inline-block", borderBottom: "2px solid #6C727C"}}>
                            <div style={{ width: "100%", display:"flex", flexDirection:"column"}}>
                              <div style={{display:"block"}}>
                                      <div style={{display:"inline-block"}}>
                                        <TextComponent style={TitleStyle} message={this.state.data.name}></TextComponent>
                                      </div>
                                      <div style={{display:"inline-block"}}>
                                        <TextComponent style={byStyle} message={'by ' + this.state.data.author}></TextComponent>
                                      </div>
                                      <div style={{display:"inline-block", float: "right"}}>
                                            <div style={{width:"100%", overFlow: "hidden", display:"flex", justifyContent: "space-between"}}>
                                              <div style={{width:"60%"}}></div>
                                            <div className={'Filler'} style={{flexGrow:"3", width:"60%" }}></div>
                                             <div >
                                              <button onClick={this.updateLike}> <ImageComponent  style={iconStyle} url={'http://res.cloudinary.com/djmk9vktk/image/upload/v1473436332/like_tb1jbs.png'}/>
                                              </button>
                                            </div>
                                            <TextComponent style={{ width:"40px"}} message={this.state.data.likes}/>
                                              <Pad hw={['100%','20px']}/>
                                             <div>
                                              <ImageComponent style={iconStyle} url={'http://res.cloudinary.com/djmk9vktk/image/upload/v1473693376/bookmark_2_ucai4d.png'}/>
                                            </div>
                                      </div>

                              </div>
                              </div>
                            </div>
                          </Bar>

                        <Frame style={{maxHeight:"400px",    width:"100%", display: "inline-block"}}>
                            <ImageComponent style={imgStyle} url={this.state.data.url}/>
                            <DetailBox data={this.state.data} >
                                <div style={testStyle}>
                                    <form method="get" action="/download">
                                      <button type="submit">Download!</button>
                                      <input type="hidden" value={this.state.name}/>
                                    </form>
                                    <button>BookMark</button>
                                </div>
                            </DetailBox>

                      </Frame>
                          <Frame>
                          <TextComponent style={AboutStyle} message={this.state.data.about}></TextComponent>
                          </Frame>


                  </div>
                </div>


                <div id="right" style={{flex:"0.5"}}> </div>

                </div>



                </div>

              )
                }
});

                  // <Step url={'http://res.cloudinary.com/djmk9vktk/image/upload/v1473436332/like_tb1jbs.png'} num={1}>Hello?</Step>

module.exports = Proj;
