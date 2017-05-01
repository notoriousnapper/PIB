try {
    console.log(require.resolve("react"));
} catch(e) {
    console.error("react is not found");
    process.exit(e.code);
}

// import express from 'express';
const express = require('express');
const app = express();

const url = require('url');
const path = require('path');
const webpack = require('webpack');
const config = require("./webpack.config.js");
const compiler = webpack(config);


var port     = process.env.PORT || 8080;
var passport = require('passport');
var flash    = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
// remove your routes and replace with this code
// MongoDB Module in here

// var router = express.Router();
const cloudinary =require('cloudinary');
const cors = require('cors');

// configuration ===============================================================
require('./app/config/passport')(passport); // pass passport for configuration

// set up our express application
// Make sure middleware order is correct
	app.use(morgan('dev')); // log every request to the console
	app.use(cookieParser()); // read cookies (needed for auth)
	app.use(bodyParser()); // get information from html forms
	// required for passport
	app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
	app.use(passport.initialize());
	app.use(passport.session()); // persistent login sessions
	app.use(flash()); // use connect-flash for flash messages stored in session

require('./app/config/routes.js')(app, passport); // load our routes and pass in
// routes ======================================================================
//our app and fully configured passport

console.log("pp is : " + JSON.stringify(passport,null,4));

/* Only use this middleware for development, messes up React in production/
deployment to Heroku */
 app.use(require('webpack-dev-middleware')(compiler, {
   publicPath: config.output.publicPath,
   stats: {
     colors: true
   }
 }));

app.use(cors());  // CORS Middleware
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Bring in index.js, mongo.js, etc.
var controllers = require('./app/controllers');
controllers.set(app);
// Add headers  // Because CORS Middleware ain't treatin' me right.

const fs = require('fs');
const multer = require('multer');
var upload = multer({ dest: 'uploads/' });
var db;

cloudinary.config({
  	cloud_name: 'djmk9vktk',
  	api_key: '649235919964296',
  	api_secret: '04wF_PSoRxl86XunCSeTuMV6TeI'
});
// });
// app.locals.api_key = cloudinary.config().api_key;
// app.locals.cloud_name = cloudinary.config().cloud_name;

app.use('/', express.static('dist'));
app.listen(process.env.PORT || 3000, function(){
	console.log('Let\'s begin the Pib Site!');
});

/* Handle CRUD ops here
 *
 * Uses body-parser middleware
 */
app.use(bodyParser.urlencoded({extended: true}))  // Necessary to handle HTTP requests as they come in.
// app.use(bodyParser.urlencoded({ extended: false }));
//
// // parse application/json
// app.use(bodyParser.json());


// app.use('/api', router);
// The urlencoded method within body-parser
//tells body-parser to extract data from the <form> element and add them to the body property in the request object.

// Get Mock-up of user page
app.get('/user', function(req, res) {
	  console.log("help");
    res.render('user.html');
});

app.get('*.pdf', function(req, res){
  var pattern = /%20/g;
  var filename = req.originalUrl.replace(pattern , ""); // Rid of %20
  // Need regex, or only replaces first
  console.log("parse url" + filename);
  console.log(filename);
  var file = __dirname + '/uploads/' + filename;
  res.download(file); // Set disposition and send it.
});

//Cloudinary image upload     //http://dailyjs.com/2013/02/21/cloudinary/
app.post('/upload', upload.single('image'), (req,res)=>{
	console.log('Attempting to post pictures to cloudinary');

	cloudinary.uploader.upload(req.file.path, function(result) {
  console.log(result);
  /* Add url to package and send to mongoDB */
  var imgUrl = result.url;
  // var data = { url: imgUrl};
  console.log('Server data returned is' + JSON.stringify(data,null,4));
  // Fix up input field array for instructions
  if ((req.body.instructions == null) ||(req.body.title== null)){
  	/* Do nothing if null */
  	console.log(req.body.title);
  	console.log(req.body.instructions);
  }
  else{

  	/* Error Checks, if its just a single item, its no array and returns string's length
  	 * instead of number of items, which should be 1
  	 */
  	var steps =[];
  	var ctr = 0;
  	if( typeof req.body.title === 'string' ) { // Later make more specific,
  		//say if not array to be safe
  		console.log('What' + req.body.instructions[ctr]);
  		steps.push({
  			title: req.body.title,
  			instructions: req.body.instructions,
  			url: ''
  	});
  		console.log('What' + JSON.stringify(steps, null, 4));
  	}

  	else {
  	var ctr = req.body.title.length;
  	console.log("# of steps included are: " + ctr);
  	console.log(req.body.title);
  	console.log(req.body.instructions);


  	for (var i = 0; i < ctr; i++ ){
  		console.log('What is iteration1' + JSON.stringify(req.body.instructions,null,4));
  		var item = 	{
  			title: req.body.title[i],
  			instructions: req.body.instructions[i],
  			url: ''
  		};

  		steps.push(item);
  		// steps.concat([item]); // steps.concat([{test:1}]); break;
  	}


	}
	/* No matter if single or multiple element, append to request body */
  	req.body['steps']= steps;
  	// delete req.body["title"];
  	// delete req.body["instructions"];
	console.log('Parsed data returned is' + JSON.stringify(data,null,4));

  }
//

  /* Ensure passed values are inserted as ints */
  req.body.likes = parseInt(req.body.likes);
  req.body.downloads = parseInt(req.body.downloads);
  req.body.views = parseInt(req.body.views);
	// console.log('sth here?: ' + JSON.stringify(req.file.path,null,4));
  var data = req.body;
  data.url = result.url;

  db.collection('projects').save(data, (err, result) => {
		if (err) return console.log(err)
		console.log('Successfully submitted project')
		console.log('Body includes: ' + JSON.stringify(req.body,null,4));
		res.redirect('/')
	})

  //At end, delete the uploaded file to server, only need it on cloudinary
  fs.unlink(req.file.path);
});
	// Don't uncomment this unless for multiple
	// var imageStream = fs.createReadStream(req.file.path, { encoding: 'binary' })
 //    , cloudStream = cloudinary.uploader.upload_stream(function() { res.redirect('/'); });
 //  imageStream.on('data', cloudStream.write).on('end', cloudStream.end);
});

/* Updates views, likes, or downloads of certain project ONLY */
//'/project/:id/:type'   is full
app.put('/project/:id/:type', (req,res)=>{
	/* Updates specific project id with specific field (like, views, etc) */
	var fields = ['views','likes', 'downloads'];
	if (!fields.every(function(elem){req.params.type === elem})){
		var name = req.params.id;
		var type = req.params.type;

		console.log("id is: " + name);
		var obj = {};
		obj[type] = 1;
		console.log("Object is: " + JSON.stringify(obj, null, 4));

		db.collection('projects').updateOne(
			{'name': name},
			{$inc: obj },

		function(err, doc){
			console.log(err);
		}
	);

	}
});
