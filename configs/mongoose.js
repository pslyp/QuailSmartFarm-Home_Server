var mongoose = require('mongoose');
var uri = 'mongodb://localhost:27017/local';
// const uri = 'mongodb://heroku_54cbqx7k:vi7bjjbn8ln21isu6f8uafff0k@ds121834.mlab.com:21834/heroku_54cbqx7k'

module.exports = function() {
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    require('../models/user.model');
    require('../models/device.model');
}

