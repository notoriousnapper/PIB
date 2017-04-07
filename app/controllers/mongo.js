var mongoose = require('mongoose');
var configDB = require('../../app/config/database.js');
mongoose.connect(configDB.url); // connect to our database
const MongoClient = require('mongodb').MongoClient;

var db;
var dbConnected = false;
MongoClient.connect('mongodb://banesilencio:merecino_ch3rr3@ds019756.mlab.com:19756/pib', (err, database) =>{
	if (err) {
		return console.log(err);
	}
	else{
		dbConnected = true;
	  db = database;
	}
})

module.exports.set = (dbConnected) ? ()=>{} : function(app) {
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

// Test API's for returning most popular projects
app.get('/getpopular', (req, res)=>{
	console.log("Getting projects sorted by popularity");
	db.collection('projects').find().toArray((err, result)=>{
		if (err) return console.log(error);

		// Need better check.  Error occurred because projects db didn't exist at one point
		if(result === '') console.log('No DB subset instantiated');
		console.log("Getting Array!" + result);
		//renders index.ejs
		console.log("What's up boi, it worked!");

		function compare(a, b) {
		  if (a.likes > b.likes){
				console.log(a.likes + "vs. " +  b.likes);
		    return -1;
		  }
		  if (a.likes < b.likes)
				console.log(a.likes + "vs. " +  b.likes);
		    return 1;
		  };
		result.sort(compare);
		console.log("Sorted: " + result);

		res.end(JSON.stringify(result, null, 4)); // Ping back with response and data
	});
});
app.get('/getviews', (req, res)=>{
	console.log("Getting projects sorted by popularity");
	db.collection('projects').find().toArray((err, result)=>{
		if (err) return console.log(error);

		// Need better check.  Error occurred because projects db didn't exist at one point
		if(result === '') console.log('No DB subset instantiated');
		console.log("Getting Array!" + result);
		//renders index.ejs
		console.log("What's up boi, it worked!");

		function compare(a, b) {
		  if (a.views > b.views){
				console.log(a.views + "vs. " +  b.views);
		    return -1;
		  }
		  if (a.views < b.views)
				console.log(a.views + "vs. " +  b.views);
		    return 1;
		  };
		result.sort(compare);
		console.log("Sorted: " + result);

		res.end(JSON.stringify(result, null, 4)); // Ping back with response and data
	});
});


/* Update Likes, downloads, etc. */
app.put('/getone/:id/:type', (req,res)=>{
	/* Updates specific project id with specific field (like, views, etc) */
	var fields = ['views','likes', 'downloads'];
	if (!fields.every(function(elem){req.params.type === elem})){
		var name = req.params.id;
		var type = req.params.type;

		console.log("id is: " + name);
		console.log("type is: " + type);
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

}
