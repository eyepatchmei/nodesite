'use strict';

var http = require('http')
, express = require('express');

var app = express();

app.get('/', function(req, res){
	res.send('Hello!');
});

http.createServer(app).listen(8850, function() {
	console.log('Visit http://localhost:8123 to begin your work')
});