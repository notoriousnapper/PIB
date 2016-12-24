var mongoose = require('mongoose');
var configDB = require('../../app/config/database.js');
mongoose.connect(configDB.url); // connect to our database
const MongoClient = require('mongodb').MongoClient;

var db;

MongoClient.connect('mongodb://banesilencio:merecino_ch3rr3@ds019756.mlab.com:19756/pib', (err, database) =>{
	if (err) return console.log(err	)
	db = database;
})

module.exports.set = function(app) {
   // copy your routes listed in your app.js directly into here
  app.get('/get', (req,res, next)=> {
  	db.collection('projects').find().toArray((err, result)=>{
  		if (err) return console.log(error);

  		// Need better check.  Error occurred because projects db didn't exist at one point
  		if(result === '') console.log('No DB subset instantiated');
  		console.log("Getting Array!" + result);

  		//renders index.ejs
  		console.log("What's up boi, it worked!");
  		res.end(JSON.stringify(result, null, 4)); // Ping back with response and data
  	})
  });

  app.get('/get/:query', (req,res, next)=> {
  	/* Do all the ugly processing/ text changing here */
  	// var query =  new RegExp('/^' + req.params.query + '$', "i");
  	var query = req.params.query;
  	query = query.toLowerCase();
  	console.log('query url is ' + query);
  	// Have allowed tags in here.  In source code or in DB?
  	db.collection('projects').find( { $or: [ {author: new RegExp(query)}, {name:new RegExp(query)} ]}).toArray((err, result)=>{
  	// db.collection('projects').find({name: query}).toArray((err, result)=>{

  		if (err) return console.log(error);

  		// Need better check.  Error occurred because projects db didn't exist at one point
  		if(result === '') console.log('No DB subset instantiated');
  		console.log("Getting Array!" + JSON.stringify(result,null,4));

  		//renders index.ejs
  		console.log("What's up boi, it worked!");
  		res.end(JSON.stringify(result, null, 4)); // Ping back with response and data
  		// Ok to ping back an array? or just pure object (because what if there are duplicate id's?)
  	})
  });

  app.get('/getone/:name', (req,res, next	)=> {
	var name = req.params.name;
	console.log('query url is ' + name);
	db.collection('projects').find( {'name': name}).toArray((err, result)=>{
		if (err) return console.log(error);

		// Need better check.  Error occurred because projects db didn't exist at one point
		if(result === '') console.log('No DB subset instantiated');
		console.log("Getting Array!" + JSON.stringify(result,null,4));

		//renders index.ejs
		console.log("What's up boi, it worked!");
		res.end(JSON.stringify(result, null, 4)); // Ping back with response and data
		// Ok to ping back an array? or just pure object (because what if there are duplicate id's?)
	})
});

}
