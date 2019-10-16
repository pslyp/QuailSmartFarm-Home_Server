var mongoose = require('./configs/mongoose')();
var express = require('./configs/express');
var app = express();

var ejs = require('./configs/ejs')(app);

var port = process.env.PORT || 5000;

app.listen(port, function() {
    console.log('Start server on port: ' + port);
});

module.exports = app;