var mongoose = require('./configs/mongoose')();
var express = require('./configs/express');
var app = express();

var ejs = require('./configs/ejs')(app);

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});

module.exports = app;