// import express from 'express';


const express = require('express');

var router = express.Router();
const cloudinary =require('cloudinary');
const bodyParser= require('body-parser')
const cors = require('cors');


const app = express();

app.use(cors());  // CORS Middleware 
// Add headers  // Because CORS Middleware ain't treatin' me right.


const MongoClient = require('mongodb').MongoClient;
const fs = require('fs');
const multer = require('multer');
var upload = multer({ dest: 'uploads/' });
var db;



/* Configure Cloudinary Image Hosting */



// cloudinary.uploader.upload("./public/img/test.jpg", function(result) { 
//   console.log(result) 
// });


/* Configure MongoDB */
MongoClient.connect('mongodb://banesilencio:merecino_ch3rr3@ds019756.mlab.com:19756/pib', (err, database) =>{
	if (err) return console.log(err	)
	db = database;

// Having two app listens caused ---> ports to be re-used for listen, caused rror
	// app.listen(3000, () => {
	// 	console.log('listening on 3000')
	// })
})






// app.configure('development', function(){  
  // app.use(express.errorHandler());

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
	console.log('Let\' begin the Pib Site!');
});






/* Handle CRUD ops here
 *
 * Uses body-parser middleware
 */
app.use(bodyParser.urlencoded({extended: true}))  // Necessary to handle HTTP requests as they come in.



// The urlencoded method within body-parser
//tells body-parser to extract data from the <form> element and add them to the body property in the request object.




app.get('/get', (req,res, next)=> {
	db.collection('quotes').find().toArray((err, result)=>{
		if (err) return console.log(error);
		console.log("Getting Array!" + result);
		//renders index.ejs
		console.log("What's up boi, it worked!");
		res.end(JSON.stringify(result, null, 4)); // Ping back with response and data
	})
});

// app.use(function (req, res, next) { // Supposed to deal with CORS

//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     next();
// });

//Cloudinary image upload     //http://dailyjs.com/2013/02/21/cloudinary/
app.post('/upload', upload.single('image'), (req,res)=>{
	console.log('Attempting to post pictures to cloudinary');
	console.log('sth here?: ' + JSON.stringify(req.file.path,null,4));

	cloudinary.uploader.upload(req.file.path, function(result) { 
  console.log(result); 


  /* Add url to package and send to mongoDB */
  var imgUrl = result.url;
  // var data = { url: imgUrl};

  var data = req.body;
  console.log('data is' + JSON.stringify(data,null,4));
  data.url = result.url;

  db.collection('new').save(data, (err, result) => {
		if (err) return console.log(err)
		console.log('Successfully submitted project')
		console.log('Body includes: ' + JSON.stringify(req.body,null,4));
		res.redirect('/')
	})


  //At end, delete the uploaded file to server, only need it on cloudinary
  fs.unlink(req.file.path);


});

	// var imageStream = fs.createReadStream(req.file.path, { encoding: 'binary' })
 //    , cloudStream = cloudinary.uploader.upload_stream(function() { res.redirect('/'); });
 //  imageStream.on('data', cloudStream.write).on('end', cloudStream.end);

});



app.post('/quotes', (req,res)=>{
	db.collection('quotes').save(req.body, (err, result) => {
		if (err) return console.log(err)
		console.log('saved to database')
		res.redirect('/')
	})
	console.log('Helloooooooo!')
});

app.post('/submit', (req,res)=>{
	db.collection('new').save(req.body, (err, result) => {
		if (err) return console.log(err)
		console.log('Successfully submitted project')
		console.log('Body includes: ' + JSON.stringify(req.body,null,4));
		res.redirect('/')
	})
	console.log('Helloooooooo!')
});

app.get('/test', (req, res) => {
  console.log("Request contents spilled here: ");
  console.log(req.body)

  // res.send('Testing Get Request');
  // var data = getTickets(); // return a JSON
  // res.end( data );
});
