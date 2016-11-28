/* Add.js */


/* First, if project name already exists, can't input form */
var fs = require('fs');
var React = require('react');
var ReactRouter = require('react-router');
var ReactDOM = require('react-dom');
var Link = ReactRouter.Link;
// var request = require('request');
// var cloudinary = require('cloudinary');
var $ = require('jquery');   // To use JQuery
var http = require('http');



// tutorial17.js
var CommentForm = React.createClass({
  getInitialState: function() {
    // var input = this.props.input;
    // var init = {}; 

    // input.map(function(inp){
    //   init[eval('inp')] = '';
    // });
    // alert(JSON.stringify(init, null, 4));
    // // return { init };
    // return  init;
    return {
      author: '',
      text: '',
      name: '',
      instructions: '',
      about: '',
      mainurl: ''
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
      instructions: instructions
    };


    // var data = querystring.stringify({
    //   username: name,
    //   password: author
    // });


    // Will figure out later.

  //   //80 for HTTP and (optionally) 443 for HTTPS

  //   var options = {
  //   host: 'www.localhost:3000', // For now local, for production, change this?
  //   port: 80,
  //   path: '/submit',
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //     'Content-Length': Buffer.byteLength(data)
  //   }
  // };

  // var req = http.request(options, function(res) {
  //   res.setEncoding('utf8');
  //   res.on('data', function (chunk) {
  //     console.log("body: " + chunk);
  //   });
  // });

  // req.write(data);
  // req.end();


    // $.ajax({
    //         type: 'POST',
    //         data: JSON.stringify(data),
    //             contentType: 'application/json',
    //                     url: '/submit',            
    //                     success: function(data) {
    //                         console.log('success is the best');
    //                         console.log(JSON.stringify(data));
    //                     }
    //                 });

    /* Send Data, Add Promises Later */



     // var containerStyle={
     //      display: "flex",
     //      flexDirection: "column"
     //    }

    alert(JSON.stringify(data, null, 4));

     /* Cleans up and erases data in state */
    this.setState({author: '', text: '', name: '', about: '', instructions: ''});
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
  render: function() {


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


        <div style={labelStyle}>{'Project Author'}</div> 
        <input name='author' style={{height: '30px'}} type="text"  value={this.state.author} onChange={this.handleAuthorChange}/>


        <div style={labelStyle}>{'Text Change'}</div>
        <input name='text' style={{height: '30px'}}    type="text"   value={this.state.text} onChange={this.handleTextChange}/>

        <div style={labelStyle}>{'Short Description'}</div>
        <input name='about'  style={{height: '30px'}}  type="text"   value={this.state.about} onChange={this.handleAboutChange}/>


        <div style={labelStyle}>{'Instructions'}</div>
        <textarea name={'instructions'} style={{height: '200px'}}  type="text"placeholder="Number your instructions"value={this.state.instructions} onChange={this.handleInstructionsChange}/>


        <input name="mainurl" type="hidden" style={{height: '30px'}}  value={this.props.mainurl} />
        <div style={{display:'flex'}}>



        <input type="file" name="image"/>
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



var Add = React.createClass({


   getInitialState: function(){
      return {
        mainurl: '',
        imgUrls: []
      }
    },
    getProjects: function(){
      var user = 'Jesse';
      var pass = 'PW';
      // $.get("http://localhost:3000/get",{user: user,password: pass}, function(data){
      //       if(data==='done')
      //         {
      //           alert("login success");
      //         }
      //     });
      var data ={ name: "Jesse"};
      // $.ajax({
      //   url: "https://localhost:3000/get",
      //   contentType: "application/json; charset=utf-8",
      //   data: JSON.stringify(data, null, 4),
      //   type: "GET",
      //   success: function(result) {
      //     console.log("request might have worked");
      //     console.log(result);
      //   },
      //   error: function (err) {
      //     console.log('didn\'t work');
      //     console.log(err);
      //   }
      // }); 

      var options = {
        host: 'localhost:',
        port: 3000, //should be 80
        path: '/get',
        contentType: 'application/JSON',
        method: 'GET'
      };

      http.request(options, function(res) {
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));
        // res.setEncoding('utf8');
        res.on('data', function (chunk) {
          console.log('BODY: ' + chunk);
        });
      }).end();

      // http.get(options, function(res) {
      //   console.log('STATUS: ' + res.statusCode);
      //   console.log('HEADERS: ' + JSON.stringify(res.headers));
      //   res.setEncoding('utf8');
      //   res.on('data', function (chunk) {
      //     console.log('BODY: ' + chunk);
      //   });
      // }).end();


    },
        componentDidMount: function() {
    // Every React component has a function that exposes the
    // underlying DOM node that it is wrapping. We can use pass that 
    // DOM node to jQuery and initialize the plugin.

    // You'll find that many jQuery plugins follow this same pattern 
    // and you'll be able to pass the component DOM node to jQuery 
    // and call the plugin function.


          //   $(ReactDOM.findDOMNode(this)).append($.cloudinary.unsigned_upload_tag("ynhaztjo", 
          //     { cloud_name: 'djmk9vktk', use_filename: true, folder: 'testing' }));
          // },

        },


        openWidget: function(){
         document.getElementById("upload_widget_opener").addEventListener("click", function() {
          cloudinary.openUploadWidget({ cloud_name: 'djmk9vktk', upload_preset: 'ynhaztjo', 
            use_filename: true}, 
            function(error, result) { 
              console.log("What is this");
              console.log(error, result[0].url) });
              this.setState({mainurl: result[0].url });

        }, false);
  },
        submitForm: function(){
          alert("submitted!");
        },

        render: function(){
        var array = [
                      'name',
                      'id',
                      'url',
                      'author'
                    ];
        var inputStyle = {
          width: "100px"
        }
        /* Add try catch for circular error */
        // var func = function(array){
          var results = array.map(function(item){
            console.log(item);
            return <input style={inputStyle} type="text" value={item}/>;
          })



        // var file_content = fs.readFileSync(filename);
        // var content = JSON.pares(file_content);
        var json = require('json!../data/projects.json'); //(with path)
        var projects = json.Projects;
        var fs = require('fs');
        projects.push({ id: "Jesse", name: "Jesse"});

        //change the value in the in-memory object
        // content.val1 = 42;
        //Serialize as JSON and Write it to a file

        // Push array of functions based off of 
        // handleAuthorChange: function(e) {
        //   this.setState({author: e.target.value});
        // },


        /*
                  <form style={containerStyle}>
                  {results}
                  </form>
        */



        return(
            <div style={{display: 'flex'}}> 
                <div style={{flex:'1'}}></div>
                <div style={{flex: '3', width:"500px"}} > <CommentForm name="file" mainurl={this.state.mainurl} className={'upload_form'}/> 

                    <div style={{display:'flex'}}></div>
                    <div></div> 
                    <button href="#" id="upload_widget_opener" onClick={this.openWidget}>Upload multiple images</button>
                      <div></div>
                </div>
                <div style={{flex:'1'}}></div>


                <button className={"testAjax"} onClick={this.getProjects}> {'Get Projects'}</button>

        </div>
              )
                }
});


module.exports = Add;