var mongoose = require('mongoose');
// var uri = 'mongodb://localhost:27017/local';
const uri = 'mongodb://heroku_k0ndrzwt:1tm03bvd5v5fpc9elqhr1n2c3n@ds353378.mlab.com:53378/heroku_k0ndrzwt'

module.exports = function() {
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    require('../models/user.model');
    require('../models/device.model');
}

