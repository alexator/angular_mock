'use strict';

var express = require('express');
var path = require('path');

var app = express();
var port = process.env.PORT || 3000;

app.use(express.static('./src'));

//For html5mode support
app.all('/*', function(req, res) {
	res.sendFile('index.html', { root: path.join(__dirname, './src') });
});

app.listen(port);

console.log('Server is listening on ' + port);
