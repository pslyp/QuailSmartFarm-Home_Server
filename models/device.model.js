var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var deviceSchema = new Schema({
    token: String,
    data: [{
        date: String,
        fanSta: Number,
        lampSta: Number,
        waterSta: Number,
        brightness: Number,
        temperature: Number
    }],
    created: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('Device', deviceSchema);