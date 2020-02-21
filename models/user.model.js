var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    id: String,
    username: String,
    email: String,
    password: String,
    devices: [{
        token: String,
        name: String,
        brightness: Number,
        tempMin: Number,
        tempMax: Number,
        timeStart: String,
        timeStop: String
    }]
});

mongoose.model('User', userSchema);