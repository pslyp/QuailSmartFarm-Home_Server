const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    token: String,
    data: [{
        datetime: String,
        brightness: Number,
        temperature: Number
    }],
    created: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('Data', dataSchema);