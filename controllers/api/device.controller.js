var Device = require('mongoose').model('Device');

exports.create = function(req, res) {
    var device = new Device(req.body);

    device.save(function(err) {
        if(err) {
            console.log('Create device Fail');
            res.status(204);
            res.json({ message: "Fail"});
            res.end();
        } else {
            console.log('Create device success');
            res.status(200);
            res.json({ message: "Success"});
            res.end();
        }
    });

};

exports.insert = function(req, res) {
    var token = req.params.token;

    Device.findOneAndUpdate({ token: token }, { $push: { data: req.body } }, function(err) {
        if(err) {
            res.status(400);
            res.json({ message: "Fail"} );
        } else {
            res.status(200);
            res.json({ message: "Success" });
        } 
    });
};

exports.findAll = function(req, res) {

    Device.find({}, { '_id': 0 }, function(err, device) {
        if(err) {
            console.log("Find device fail");
        } else {
            res.status(200);
            res.json(device);
        }
    });

};

exports.findById = function(req, res) {

    Device.findOne({ 'token': req.params.token }, { '_id': 0 }, function(err, device) {
        if(err) {
            console.log("Find one device fail");
        } else {
            if(device != null) {
                res.status(200);
                res.json(device);
            } else {
                res.status(204).end();
            }           
        }
    });
};