/* Proj.js */
/* Proj.js */



var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var ImageComponent = require('../../components/custom/ImageComponent');
var TextComponent = require('../../components/custom/TextComponent');
var DetailBox = require('../../components/projectpage/DetailBox');
var IntroBox = require('../../components/IntroBox');
var Bar = require('../../components/Bar');
var Step = require('../../components/addpage/Step');

var $ = require('jquery');
var devUrl ='http://localhost:3000';
var prodUrl = 'https://proj-box.herokuapp.com';
var useUrl = prodUrl;

var Content = React.createClass({
        render: function(){
          return ( <div>
                <div style={{backgroundColor:"black", height: "500px", width: "500px"}}>
                  <Link to={"/login"} >Log In</Link>
                </div>
             </div>);
        }
      });

module.exports = Content;
