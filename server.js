// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var bluebird = require("bluebird");
var mongoose = require('mongoose');
var routes = require("./routes/routes");

var PORT = process.env.PORT || 3000;
mongoose.Promise = bluebird;

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));
app.use("/", routes);

// MongoDB configuration
var db = process.env.MONGODB_URI || "mongodb://localhost/nytreact";

mongoose.connect(db, function(error){
	if(error){
		console.log("mongoose error: " + error);
	}else{
		console.log("mongoose connection is succesful!");
	}
});

// Listener 
app.listen(PORT, function() {
	console.log("App listening on port %s! ", PORT);
});