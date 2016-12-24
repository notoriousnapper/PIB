/* Add.js */

/* First, if project name already exists, can't input form */
var fs = require('fs');
var React = require('react');
var ReactRouter = require('react-router');
var ReactDOM = require('react-dom');
var Link = ReactRouter.Link;
var CommentForm = require('../../components/CommentForm');
// var request = require('request');
// var cloudinary = require('cloudinary');
var $ = require('jquery');   // To use JQuery
var http = require('http');
// tutorial17.js
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
      var data ={ name: "Jesse"};
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


        console.log('Full response' + JSON.stringify(res, null, 4));
        // res.setEncoding('utf8');
        res.on('data', function (chunk) {
          console.log('BODY: ' + chunk);
        });
      }).end();
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
         // document.getElementById("upload_widget_opener").addEventListener("click", function() {
         //  cloudinary.openUploadWidget({ cloud_name: 'djmk9vktk', upload_preset: 'ynhaztjo',
         //    use_filename: true},
         //    function(error, result) {
         //      console.log("What is this");
         //      console.log(error, result[0].url) });
         //      this.setState({mainurl: result[0].url });

        // }, false);
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
        var json = require('json!../../data/projects.json'); //(with path)
        var projects = json.Projects;
        var fs = require('fs');
        projects.push({ id: "Jesse", name: "Jesse"});

        return(
            <div style={{display: 'flex'}}>
                <div style={{flex:'1'}}></div>
                <div style={{flex: '3', width:"500px"}} > <CommentForm name="file" mainurl={this.state.mainurl} className={'upload_form'}/>

                    <div style={{display:'flex'}}></div>
                    <div></div>
                      <div></div>
                </div>
                <div style={{flex:'1'}}></div>

        </div>
              )
                }
});


module.exports = Add;
