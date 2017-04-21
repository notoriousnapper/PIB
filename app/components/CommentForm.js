/* Add.js */
/* First, if project name already exists, can't input form */
var React = require('react');
var $ = require('jquery');   // To use JQuery
var http = require('http');
// tutorial17.js
var CommentForm = React.createClass({
  getInitialState: function() {
    return {
      ctr: 0,
      author: '',
      text: '',
      name: '',
      about: '',
      mainurl: '',
      steps: []
    }
  },
  handleAuthorChange: function(e) {
    this.setState({author: e.target.value});
  },
  handleTextChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleNameChange: function(e) {
    this.setState({name: e.target.value});
  },
  handleInstructionsChange: function(e) {
    this.setState({instructions: e.target.value});
  },
  handleAboutChange: function(e) {
    this.setState({about: e.target.value});
  },
  handleSubmit: function(e) {

    /* Beautifully grabs a json array of the input strings,
    grabs all the values, concatenates those strings to
    string code, and then runs them with eval */
    e.preventDefault();

    // /* Next level shit right here */
    // alert("next level " + JSON.stringify(this.state.name, null, 4));
    var data = {};  // Data to send


    var author = this.state.author.trim();
    var text = this.state.text.trim();
    var name = this.state.name.trim();
    var about = this.state.about.trim();
    var instructions = this.state.instructions.trim();
    if (!text || !author) {
      return;
    }
    // TODO: send request to the server
    var data = {
      name: name,
      author: author,
      text: text,
      about: about,
      //steps: steps
    };

    alert(JSON.stringify(data, null, 4));

     /* Cleans up and erases data in state */
    this.setState({author: '', text: '', name: '', about: '', steps: []});
  },

  handleUpload: function(){

        var params = {
          api_key: 649235919964296,
          public_id: "samplepublicid",
  timestamp: 1472801795,
  cloud_name: "djmk9vktk",
  signature: "3d95e16923b2b428fc3be9c483ea9368da32f878"
  };
  var input = $('#cloudinary-input');
input.attr('data-form-data', JSON.stringify(params));
input.bind('fileuploaddone', function (e, data) {
test(data);
});
input.cloudinary_fileupload();
input.fileupload('option', 'formData').file;
input.fileupload('add', {files: document.getElementById('cloudinary-input').files});


  // public_id=samplepublicid&timestamp=147280179504wF_PSoRxl86XunCSeTuMV6TeI
  // For signature: https://usefulpiecesofcode.wordpress.com/2015/11/28/cloudinary-jquery-and-html-to-upload-image/
  // For time stamp, can also use
  // 1472801795
  // http://www.unixtimestamp.com/
  // Math.floor(Date.now() / 1000),



},

addStep: function(){
  alert(JSON.stringify(this.state.steps));

  var arr = this.state.steps;
  arr.push({
                title: 'beginning State',
                url: '/',
                instructions: 'sth'
              });

  this.setState({
    steps: arr
  });
  this.setState({ctr: this.state.ctr++});
  alert(JSON.stringify(this.state.steps) + ' & extra is : ' + this.state.ctr);
},
  render: function() {

   var ctr = 0;
   var Steps = this.state.steps.map((step)=>{

    ctr++;
    return (
      <div>
      <div style={titleStyle}> {'Step Title ' + ctr + ' :'}  </div> <input name={'title'}  style={{height: '30px'}}  type="text"  defaultValue={''} />
      <div style={titleStyle}> Instruction  </div> <textarea name={'instructions'}  style={{height: '30px'}}  type="text"   defaultValue={''} />
      <br></br>
      <br></br>
      <br></br>
      </div>
      );
  });


    var labelStyle={
      fontFamily: "'Ubuntu', sans-serif",
      fontSize: '30 pt',
      paddingBottom: '5pt',
      paddingTop: '20pt'
    }

    var titleStyle={
      fontFamily: "'bebas neue', sans-serif",
      paddingBottom: '5pt',
      textAlign: 'center',
      paddingTop: '20pt',
      fontSize: '30pt'
    }
    var buttonStyle={
            flex:'1',
            width:"180px",
            height:"50px",
            display: "flex",
            backgroundColor: "#FAC129",
            marginTop:"22px",
            borderRadius: "5px 5px 5px 5px",
            fontFamily: 'Ubuntu',
            fontSize: '30px',
            textAlign: 'right'
     };






    // var work = cloudinary.uploader.image_upload_tag('image_id', { callback: cloudinary_cors });
      // <form action="/submit" method="POST" style={    {
    // <form action="/upload" method="post"  encType="multipart/form-data">
    // <input type="file" name="image"/>
    //Temp
        // <input name="steps" type="hidden" style={{height: '30px'}}  value={'Filler'} />

    return (
      <div >
      <form action="/upload" encType="multipart/form-data" method="POST" style={    {
          display: "flex",
          flexDirection: "column",
          backgroundColor: 'white',
          padding: '20px',
          marginTop: '80px',

        }} className="commentForm">
        <div style={ titleStyle} >{'Submit a Project!'}</div>

        <div style={ labelStyle}> {'Project Title'} </div>
        <input name='name' style={{height: '30px'}} type="text" value={this.state.name} onChange={this.handleNameChange}/>


        <div style={ labelStyle}> {'Upload Title Image'} </div>
        <input type="file" name="image"/>

        <div style={labelStyle}>{'Author'}</div>
        <input name='author' style={{height: '30px'}} type="text"  value={this.state.author} onChange={this.handleAuthorChange}/>


        <div style={labelStyle}>{'Tags (separate by commas)'}</div>
        <input name='text' style={{height: '30px'}}    type="text"   value={this.state.text} onChange={this.handleTextChange}/>

        <div style={labelStyle}>{'Short Description'}</div>
        <input name='about'  style={{height: '30px'}}  type="text"   value={this.state.about} onChange={this.handleAboutChange}/>

        
        <input name="mainurl" type="hidden" style={{height: '30px'}}  value={this.props.mainurl} />
        <input name="views" type="hidden" style={{height: '30px'}}  value={0} />
        <input name="likes" type="hidden" style={{height: '30px'}}  value={0} />
        <input name="downloads" type="hidden" style={{height: '30px'}}  value={0} />




        <div style={{display:'flex'}}>
        <input id={'image_upload'} type='hidden' value={''}/>
        <div style={{flex:'1'}}></div>
        <button style={buttonStyle} type="submit"> <div style={{textAlign: 'center'}}>{'Submit'}</div> </button>
        <div style={{flex:'1'}}></div>
        </div>

      </form>
      <br/>
      <br/>
      <br/>


      </div>

    );
  }
});




module.exports = CommentForm;
