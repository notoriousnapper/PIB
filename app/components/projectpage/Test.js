var React = require('react');
var FontAwesome = require('react-fontawesome');
var $ = require('jquery');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var devUrl ='http://localhost:3000';
var prodUrl = 'https://still-forest-90731.herokuapp.com';
var useUrl = prodUrl;

var documentStrings = [
  'Main Document',
  'Schematic'
]
// Algorithm - Every 4 sentences, break it up into a chunk/ array.
// Spit chunks out with format <div>{'text'} </div> <br/>
//
// var ex = "My project is the guitar effect pedals. I began this project because I've been playing guitar since high school. When I took ECE65 I became intrigued that simple components can act as filters. Building guitar effect pedals was my way of connecting my hobbies and my area of study. There are many types of effects, all used in different types of music. Each effect is based on principles we learn in our analog circuit classes. Building guitar effects is a very rewarding experience. All you need to know is how to read a schematic. Knowing the basics on what resistors, capacitors and transistors do helps, but is not require. In the process of building, you observe the clipping circuits, the frequency filters, and oscillator circuits in action. You gain troubleshooting skills and get up close and familiar with electrical components. You get better intuition on how a circuit behaves and how you can design it.";


var Test = React.createClass({
getInitialState: function(){
  return ({
    data: {
    'name':'',
    'author': '',
    'team': [''],
    'authorImg': '',
    'url': '',
    'about': '',
    'instructions': '',
    'likes': '',
    'downloads': '',
    'views': '',
    "carouselFiles":[], // Initialized so code doesn't deal with null
    'steps':[
     {
        title: '',
        url: '',
        instructions: ''
      }
    ]
    } ,
    navBar: false,
    ctr  : 0,
    paths: [
      "http://res.cloudinary.com/djmk9vktk/image/upload/v1482991159/arcadebox_slsyln.jpg",
      "http://res.cloudinary.com/djmk9vktk/image/upload/v1483597306/StreetFighter2_kfmo3f.jpg",
      "http://res.cloudinary.com/djmk9vktk/image/upload/v1482990179/carousel_2_lvukal.jpg",
      // "http://res.cloudinary.com/djmk9vktk/image/upload/v1482990180/carousel_3_ez6iml.jpg",
      // "http://res.cloudinary.com/djmk9vktk/image/upload/v1482990180/carousel_4_gnmo2p.jpg"
      // "../public/img/carousel_2.jpg",
      // "../public/img/carousel_3.jpg",
      // "../public/img/carousel_4.jpg"
    ]
  });
},
switchSlide: function(direction){ //0 left, 1 right
  var left = (this.state.ctr == 0) ? 2 : this.state.ctr - 1;
  var right = (this.state.ctr == 2) ? 0 : this.state.ctr + 1;
  var newCtr = (direction) ? left: right;
  this.setState({
    ctr  : newCtr,
    paths: this.state.paths
  });
  $("#cf7 img").removeClass("opaque");
  $("#cf7 img").eq(newCtr).addClass("opaque");
  $("#cf7_controls span").removeClass("selected");
  $(this).addClass("selected");
},
switchSlideLeft: function(){
  this.switchSlide(0);
},
switchSlideRight: function(){
  this.switchSlide(1);
},
updateField: function(type){
  var projectName = this.props.params;
  var field = "";
  switch(type){
    case 0:  field = 'likes'; break;
    case 1:  field = 'downloads'; break;
    case 2:  field = 'views'; break;
  }
   $.ajax({
        url: useUrl + '/project/' + projectName + '/' + field,
        dataType: 'json',
        method: 'PUT',
        cache: true,
        success: function(res) {
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
forceAjax:function(){
  var name = this.props.params;
   $.ajax({
        url: useUrl + '/project/' + name,
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
componentDidMount: function() {
  this.forceAjax();
},
render: function(){
    var imgStyle = {height:"100%", padding: "0%", width:"100%"};
    var mainImgStyle = {float:"right", height: "400px", width:"400px", minHeight: "200px", minWidth:"200px"}
    var imgBoxStyle = {marginRight: "15px", height: "80px", width:"80px", cursor: "pointer"};
    var chevronStyle = {display: "inline-block", cursor: "pointer", verticalAlign: "middle", paddingTop:"50px", margin: "auto",
    height: "90px", width: "90px", verticalAlign:"center", color:"#b5b3b3"};
    var chevronContainerStyle = {display:"inline-block", height:"100%", width:"40px" };

    var split = function(str){
      var partitionSize = 3, i = 0, ctr = 0; // split into 'x' sentences
      var arr = str.split(".");
      var res = [];
      var temp =  "";
      for(i = 0; i < arr.length; i++){
        temp += arr[i] + ".";
        ctr++;
        if(ctr == partitionSize){
          ctr = 0;
          res.push(temp);
          temp =  "";
        }
      }
      if (temp!=""){
        res.push(temp);
      }
      return res;
    };
    var projectDescription = split(this.state.data.about).map(function(item){
      return (<div><div> {item }  </div> <br/></div>);
    });

    var ctr = 0;
    var self = this;
    var documentsList = documentStrings.map(function(item){
      if(ctr==0){
        ctr++;
        return <li style={{content: "-"}} > <a href={self.state.data.name + ".pdf"} style={{color:"#D74B1F"}}> {item} </a> </li>
      }
      else{
        return <li style={{content: "-"}} > <a style={{color:"#D74B1F"}}> {item} </a> </li>
      }
    });

    var ctr = 3;
    var imgBox = [(<img style={imgBoxStyle} src={this.state.data.url} />)];
    imgBox.push(this.state.data.carouselFiles.map(function(item){
      if(ctr!=1){
        ctr--;
        return <img style={imgBoxStyle} src={item} />
      }
    }));;

    var ctr = 3;
    var imgCarousel = this.state.data.carouselFiles.map(function(item){
      if(item[item.length-1]!="g"&&item!=null){
        return (<div></div>);
      }
      else if(ctr!=1){
        ctr--;
        return (<img style={imgStyle} src={item} />);
      }
    });

    var res = "";
    var team = "";
    if(this.state.data.team != null){
    team = this.state.data.team.map(function(item){
      res+= item + ", ";
    });
    }
    var team = res.substring(0, res.length-2);

    // Video
    var vidFrameStyle= {
      width: "300px",
      height: "300px",
      margin: "0 auto",
      marginTop:"20px"
      // paddingTop:"20px"
    }

    var vidFrame;
    if(this.state.data.vidUrl != null){
      vidFrame = <iframe src={this.state.data.vidUrl} style={vidFrameStyle} />;
    }

return  (
  <div style={{backgroundColor:"#192930", height: "100%", marginTop:"20px", paddingLeft:"100px", paddingRight:"100px" }} >
  <div id="bg" style={{backgroundColor:"#E2E7E9"}}>


    <div  style={{ backgroundColor:"#192930", height: "150px", marginTop:"20px", paddingLeft:"0px", paddingRight:"20px"
    ,paddingTop: "80px"}} >
      <div id="breadCrumbsBar" style={{ backgroundColor:"white", height:"50px", width:"40%", paddingTop: "13px", paddingLeft: "20px", fontSize: "18px", fontWeight:"500" }}>
        <Link to={'/projects/'} style={{color:"black", textTransform:"capitalize"}}> {'Projects'} </Link>
        {' / '}
        {'IOT'}
        {' / '}
        <Link to={'/projects/'+ this.state.data.name} style={{color:"black", textTransform:"capitalize"}}> {this.state.data.name} </Link>
      </div>
    </div>
    <div id="project-container" style={{display:"flex", paddingRight: "10px", backgroundColor:"white"}}>
      <div id="left" style={{borderWidth: "0px 2px 0px 0px", borderColor:"#D9DADF", borderStyle:"solid", backgroundColor: "none", display:"inline-block", padding: "30px",  paddingTop: "40px"}}>
       <div id="mainImg2" style={mainImgStyle}  id="cf7" className="shadow" >
           <img style={imgStyle} className='opaque' src={this.state.data.url}/>
           {imgCarousel}
         <div style={{display:"inline-block",flex:"0.3", padding: "0px", width:"30%", height:"100%"}}> </div>
       </div>
        <br/>
        <br/>
        <br/>
        <div style={{float:"right", backgroundColor: "none", margin: "0 auto", padding:"0 2%"}}>
          <div id="leftChevron" style={chevronContainerStyle}>
            <FontAwesome style={chevronStyle} onClick={this.switchSlideLeft} name="chevron-left" size="2x"/>
            </div>

          <div id="imgBox" style={{width: "300px", display:"inline-block"}}> {imgBox} </div>

          <div id="rightChevron" style={{...chevronContainerStyle,...{float:"right"}}}>
          <FontAwesome style={chevronStyle} onClick={this.switchSlideRight} name="chevron-right" size="2x"/> </div>
           </div>

       <div style={{display: "block", margin:"0 auto", marginTop: "20px", paddingTop: "20px", paddingLeft:"36px"}}  >
          {vidFrame}
          </div>


      </div>

      <div id="center" style={{flex:"1", width: "500px", paddingRight:"20px", paddingTop: "40px", paddingLeft:"40px",
         borderWidth: "0px 2px 0px 0px", borderColor:"#D9DADF", borderStyle:"solid"}}>
        <h1 style={{color: "#4C516C", padding: "0", margin:"0", paddingBottom:"5px", fontFamily:"Helvetica Neue", fontStyle:"bold", textTransform: "capitalize"}}> {this.state.data.name}</h1>
        <h3 style={{color:"#4C516C", padding: "0", margin:"0"}}>
        <div style={{display:"inline-block", fontWeight:"300", marginRight:"4px", fontSize:"20px"}}> by  </div>
        <div style={{display:"inline-block", fontWeight:"300", fontFamily:"Montserrat; Roboto", fontSize:"20px"}}> {this.state.data.author} </div> </h3>

        <div id="buttonBar"> </div>

        <div style={{display:"inline-block", marginRight: "20px"}}> {this.state.data.views + " views"} </div>
        <button onClick={this.updateLike} style={{backgroundColor:"white", borderRadius:"5px"}}>
              <img src="/public/img/hearts.png" style={{height:"20px", display:"inline-block", marginRight:"7px"}}/>  {this.state.data.likes}
        </button>

        <button onClick={this.updateDownloads} style={{backgroundColor:"white", borderRadius:"5px"}} >
              <a href={this.state.data.name + ".pdf"}> <img src="/public/img/cloud_blue.png" style={{height:"20px", display:"inline-block", marginRight:"7px"}}/> </a> {this.state.data.downloads}
        </button>


        <br/>

        <div style={{lineHeight:"175%", fontSize: "18px", color: "#4C516C", paddingRight: "30px"}} >
          <br/>


          <strong> Description: </strong>
          <div style={{textAlign:"justified"}}> {projectDescription} </div>
        </div>
       </div>

      <div id="infoBox" style={{ flexDirection: "column", backgroundColor: "#F3F2F2", flex:"0.5", padding:"0px", width: "500px", height: "800px",
         }}>
        <div style={{height:"40px", width:"100%", backgroundColor:"none", textAlign:"center", color:"#4C506D", fontSize:"20px", paddingTop:"37px", fontFamily: "Helvetica Neue"}}>
         <strong style={{color:"#4C506D"}}> Project Details </strong>
         </div>
        <div id="outerBox" style={{padding:"0px"}}>
          <div id="sectionOne" style={{flex:"1", height: "60px", borderColor:"#D9DADF", borderStyle:"solid",
              borderWidth:"0px 0px 2px 0px", paddingRight:"20px", paddingLeft:"40px", margin:"0 auto" }}>
          </div>
          <div>
          </div>
          <div id="sectionTwo" style={{display:"block", height: "100%", borderColor:"#D9DADF", borderStyle:"solid",
              borderWidth:"0px 0px 2px 0px", paddingLeft:"30px", paddingTop: "30px", margin: "0 auto", backgroundColor:"white"}}>
              <div style={{display:"block", margin:"0 auto"}}>
                <img src={this.state.data.authorImg}
                  style={{height:"100px", display:"inline-block"}}/>
              </div>
              <div style={{padding:"10px 5px"}}>
                 <strong style={{marginTop:"10px"}}> Team Members: </strong>
                 <br/>
                 {team}
              </div>
          </div>
          <div id="sectionOne" style={{flex:"1", height: "160px", borderColor:"#D9DADF", borderStyle:"solid",
              borderWidth:"0px 0px 2px 0px", paddingRight:"20px",  margin:"0 auto", textAlign:"center", paddingTop:"30px" }}>
            <strong style={{paddingLeft:"40px", fontSize:"16px", fontFamily:"Helvetica Neue", textAlign:"center"}}> Documents: </strong>
              <ul style={{textAlign: "left", listStyle:"hyphen", cursor: "pointer"}}>{documentsList} </ul>
          </div>

          <div id="sectionThree" style={{flex:"1", height: "300px"}}>
            <br/>
            <br/>

          </div>

        </div>
      </div>


   </div>
    </div>
 </div>
)
}
})

module.exports = Test;
