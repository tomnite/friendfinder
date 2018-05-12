// Dependencies
const express = require('express'),
	bodyParser = require('body-parser'),
	path = require('path');

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//Routing

require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);

// Start server to begin listening 

app.listen(PORT, function(){
	console.log("Server listening on: http://localhost:" + PORT);
});
