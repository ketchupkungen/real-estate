// Npm modules
var express = require('express');

// Mongoose added
var mongoose = require('mongoose');
require('mongoosefromclass')(mongoose);

//Fake JSON Data
var salesData = require('./src/data/sales-data.json');
var brokersData = require('./src/data/brokers-data.json');
var usData = require('./src/data/us-data.json');

// Mongoose added
global.mongoose = mongoose;

// Mongoose added
// Stop mongoose from using an old promise library
// (takes away the warning "mpromise is deprecated")
mongoose.Promise = Promise;

// Load classes, make them global and then convert selected ones to modules
global.Restrouter = require('./modules/restrouter.class');

global.Sale = require('./modules/sale.class');
global.Sale = mongoose.fromClass(global.Sale);

global.Broker = require('./modules/broker.class');
global.Broker = mongoose.fromClass(global.Broker);

global.Us = require('./modules/us.class');
global.Us = mongoose.fromClass(global.Us);

// Create a new express server, store in the variable app
var app = express();

// Point to folders where we have static files
// (our frontend code)
app.use(express.static('src'));
app.use(express.static('./'));

new Restrouter(app, Sale);
new Restrouter(app, Us);
new Restrouter(app, Broker);

// Never cache request starting with "/rest/"
app.use((req, res, next)=>{
	if(req.url.indexOf('/rest/') >= 0) {
		res.set("Cache-Control", "no-store, must-revalidate");
	}
	next();
});

// If no other route rule fulfilled then return index.html
app.get('*',(req, res)=>{
  res.sendFile(__dirname + '/src/index.html');
});

// Mongoose added
// Connect to mongoDB
// and when that is done start the express server
mongoose.connect('mongodb://127.0.0.1/realestate');
mongoose.connection.once('open', onceConnected);

function onceConnected() {
	// Start the server
	app.listen(3003, ()=>{
	  console.log('Express app listening on port 3003!');
	});

	// For each collection type we have JSON of
	// If the db counts 0 of either item
	// It will insert the JSON into the db.
	createFakeDataFromJSON();
}

function createFakeDataFromJSON() {
    Sale.count(function(err, count) {
      if (count === 0) {
          createDefaultSales();
      }
    });

    Broker.count(function(err, count) {
    	if (count === 0) {
    		createDefaultBrokers();
    	}
    });

    Us.count(function(err, count) {
       if (count === 0) {
           createDefaultUs();
       }
    });

	function createDefaultSales() {
		salesData.forEach(function(data) {
			new Sale(data).save();
		});
	}

	function createDefaultBrokers() {
		brokersData.forEach(function(data) {
			new Broker(data).save();
		});
	}

	function createDefaultUs() {
	 	new Us(usData).save();
	}

}
