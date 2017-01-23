var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Carousel = require('../../components/custom/Carousel');

var devUrl ='http://localhost:3000';
var prodUrl = 'https://still-forest-90731.herokuapp.com';
var useUrl = devUrl;

var $ = require('jquery');

var Proj2 = React.createClass({
        getInitialState: function(){
          return { data: []}
        },
        activeOne: function(){
          $("#i2").attr('class', 'tab-pane');
          $("#i3").attr('class', 'tab-pane');
          $("#i1").attr('class', 'active');
          $("#i12").attr('class', 'tab-pane');
          $("#i13").attr('class', 'tab-pane');
          $("#i11").attr('class', 'active');
        },
        activeTwo: function(){
          $("#i3").attr('class', 'tab-pane');
          $("#i1").attr('class', 'tab-pane');
          $("#i2").attr('class', 'active');
          $("#i12").attr('class', 'tab-pane');
          $("#i13").attr('class', 'tab-pane');
          $("#i12").attr('class', 'active');
        },
        activeThree: function(){
          $("#i2").attr('class', 'tab-pane');
          $("#i1").attr('class', 'tab-pane');
          $("#i3").attr('class', 'active');
          $("#i12").attr('class', 'tab-pane');
          $("#i11").attr('class', 'tab-pane');
          $("#i13").attr('class', 'active');
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
          // var Steps = this.CallSteps();
          // alert(JSON.stringify(res[0], null, 4));
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
          }

          var centerPadding = {
            flex:"1.5", backgroundColor: "white",
            minWidth: "700px",
            borderRadius: "5px",
            marginBottom: "20px"
          };

          var descriptionStyle ={
            fontSize: "20px",
            padding: "10px 25px"
          };

          var imgStyle ={
            maxHeight: "400px !important",
            maxWidth: "400px !important"
          }


          // alert(JSON.stringify(this.state.data.materials, null, 4));
          var arr = this.state.data.links;
          var res = [];
          if(arr!= null)
          {
          res = arr.map(function(item){
            return <li style={{height:"30px !important", width: "100%"}}> {item} </li>
          });

          }


          var extraImg = [];
          var skills = [];
          var materials = [];
          var links = [];

          // alert(this.state.data.carouselFiles);
          // if(this.state.data.carouselFiles != null){
          //   return <div style={{width:"100px", height: "100px"}}>  <img src={item} /> </div>
          // });
          // }
          if(this.state.data.skills != null){
          skills = this.state.data.skills.map(function(item){
            return <div> {item} </div>
          });
          }
          if(this.state.data.materials != null){
          materials = this.state.data.materials.map(function(item){
            return <div> {item} </div>
          });
          }
          if(this.state.data.links != null){
          links = this.state.data.links.map(function(item){
            return <div> {item} </div>
          });
          }

          /* Extra images right now will be no video*/
          if(this.state.data.carouselFiles != null){
          extraImg = this.state.data.carouselFiles.map(function(item){
            if(item[item.length-1]!="g"){
              return <div></div>
            }
            else{
              return <img style={{height:"300px", width:"300px", padding: "20px"}} src={item} />
            }
          });
          }


          return(
        		<div style={{display: "flex",  width:"100%"}}>
              <div id="left" style={padding}> </div>
              <div id="center" style={centerPadding}>
                <ul className="nav nav-tabs" role="tablist" style={{backgroundColor:"#EEE", borderRadius:"5px 5px 0 0"}}>
                  <li role="presentation" className="active" style={{height:"auto"}}><a aria-controls="description" role="tab" data-toggle="tab">Overview</a></li>
                  <li role="presentation" style={{height:"auto"}}><a aria-controls="instructions" role="tab" data-toggle="tab">Pictures</a></li>
                  <li role="presentation" style={{height:"auto"}}><a aria-controls="comments" role="tab" data-toggle="tab">Resources</a></li>
                </ul>

                <div className="tab-content" style={{padding:"10px"}}>
                  <div role="tabpanel" className="tab-pane active" id="overview" style={{height:"auto"}}>
                    <div style={descriptionStyle}> {this.state.data.about} </div>
                    <h1> Skills Learned </h1>
                    <div style={descriptionStyle}> {skills} </div>
                    <h1> Materials </h1>
                    <img style={{width:"500px", height: "500px"}} src={this.state.data.partsImg} />
                    <div style={descriptionStyle}> {materials} </div>
                  </div>
                  <div role="tabpanel" className="tab-pane" id="pictures" style={{height:"auto"}}>
                    <a href={this.state.data.name + ".pdf"} />
                    <div style={{}}>{extraImg}</div>
                  </div>
                  <div role="tabpanel" className="tab-pane" id="resources" style={{height:"auto"}}>
                    <div style={{paddingLeft:"20px", paddingRight: "20px"}}> {links} </div>
                  </div>
                </div>
              </div>
              <div id="right" style={padding}> </div>
    				</div>
              )
                }
});
                      // <button className="cta-button"> Click Me</button>
module.exports = Proj2;

/*
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
*/
