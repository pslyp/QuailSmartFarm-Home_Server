var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var deviceSchema = new Schema({
    token: String,
    data: [{
        fanSta: Number,
        feedSta: Number,
        lampSta: Number,
        waterSta: Number,
        brightness: Number,
        temperature: Number,
        dated: String
    }],
    created: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('Device', deviceSchema);