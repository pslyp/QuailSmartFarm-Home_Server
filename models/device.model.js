var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var deviceSchema = new Schema({
    token: String,
    name: String,
    brightness: Number,
    tempMin: Number,
    tempMax: Number,
    timeStart: String,
    timeStop: String,
    created: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('Device', deviceSchema);