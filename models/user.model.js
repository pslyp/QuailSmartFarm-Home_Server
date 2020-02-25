var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    id: String,
    username: String,
    email: String,
    password: String,
    devices: [{ type: Schema.Types.ObjectId, ref: 'Device' }]
});

mongoose.model('User', userSchema);