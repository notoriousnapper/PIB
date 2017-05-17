var Dropzone = require('react-dropzone');
var React = require('react');
var $ = require('jquery');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var prodUrl = 'https://still-forest-90731.herokuapp.com';
var sha1 = require('sha1');
var superagent = require('superagent');

var AdminProjectDetails = React.createClass({
  getInitialState: function() {
    return {
      clicks: 0,
      data: []
    };
  },
  componentDidMount: function(){
      this.getProjects(this.props.params.id);
  },
  getProjects: function(query){
    console.log("id  " + query);
     $.ajax({
                url: '/project/' + query,
                dataType: 'json',
                cache: false,
                success: function(res) {
                  this.setState({
                    data: res,
                    clicks: this.state.clicks + 1
                  });
                }.bind(this),
                error: function(xhr, status, err) {
                  console.error(prodUrl, status, err.toString());
                }.bind(this)
              });
  },
  uploadFile: function(file){
    console.log(file);
    const image = file[0];

    const cloudName = 'dolwlauzv';
    const url = 'https://api.cloudinary.com/v1_1/dolwlauzv/image/upload';

    const timestamp = Date.now()/1000;
    const uploadPreset = 'wwiweiz2';

    const paramStr = 'timestamp'+timestamp+'&upload_preset='+uploadPreset+'9ZCo7TIVO3sC2snDP124dYDHveo';

    const signature = sha1(paramStr);

    const params = {
      'api_key': '425741974961726',
      'timestamp': timestamp,
      'upload_preset': uploadPreset,
      'signature': signature
    }

    let uploadRequest = superagent.post(url);
    uploadRequest.attach('file', image);

    uploadRequest.field('api_key', '425741974961726');
    uploadRequest.field('timestamp', timestamp);
    uploadRequest.field('upload_preset', uploadPreset);
    uploadRequest.field('signature', signature);


    uploadRequest.end((err, resp) =>{
      if(err){
        alert(err);
        return;
      }
      console.log('UPLOAD SUCCESS');
    })


  },
  render: function(){
    var id = this.props.params.id;
    var containerStyle = {
      zIndex:"1000", paddingTop: "100px", paddingLeft: "200px", paddingRight: "100px", paddingBottom: "100px", display: "flex", flexDirection: "column", height: "100%", margin: "0 auto", backgroundColor: "white"
    };
    var blockStyle = {
      border: "2px solid black",  display: "flex", padding: "10px 30px", paddingBottom: "60px"
    };
    var paddingStyle = {
      marginLeft: "50px", marginRight: "50px"
    };
    var buttonStyle = {
      border: "2px solid black", boxShadow: "3px 3px black", padding: "0 10px"
    };
    var data = this.state.data;
    console.log(data);
    return(
      <div style={containerStyle}>
          Admin Project Details
          <div style={blockStyle}>
            <Link to={'/admin'} style={buttonStyle}>Back</Link>
            <p style={paddingStyle}>Project Title: {data.name}</p>
            <p>Project Authors: {data.author}</p>
          </div>
          <div style={blockStyle}>
            <div>Main Pic</div>
            <div><Dropzone onDrop={this.uploadFile.bind(this)}/></div>
          </div>
          <div style={blockStyle}>
            All Pics

          </div>
      </div>

    )
  }
});

module.exports = AdminProjectDetails;