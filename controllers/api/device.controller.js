var Device = require('mongoose').model('Device');

exports.create = function(req, res) {
    var device = new Device(req.body);

    device.save(function(err) {
        if(err) {
            console.log('Create device Fail');

            res.status(500);
            res.json({ message: "Fail"});
        } else {
            console.log('Create device success');

            res.json({ message: "success"});
        }
    });

};

exports.insert = function(req, res) {
    var body = req.body;
    var token = req.params.token;

    var dataArray = { 
        date: body.date,
        fanSta: body.fanSta, 
        feedSta: body.feedSta, 
        lampSta: body.lampSta, 
        waterSta: body.waterSta, 
        brightness: body.brightness,
        temperature: body.temperature
    };

    Device.findOneAndUpdate({ token: token }, { $push: { data: dataArray } }, function(err) {
        if(err) {
            console.log("Update device fail");

            res.status(500);
            res.json({ message: "Fail"} );
        } else {
            console.log("Update device success");

            res.json({ message: "Success" });
        } 
    });
};

exports.getAll = function(req, res) {

    Device.find({}, { '_id': 0, '__v': 0 }, function(err, device) {
        if(err) {
            res.status(500).end();
        } else {
            res.json(device);
        }
    });

};

exports.getByToken = function(req, res) {

    Device.findOne({ 'token': req.params.token }, { '_id': 0, 'token': 0, '__v': 0 }, function(err, device) {
        if(err) {
            console.log("Find one device fail");

            res.status(500);
        } else {
            if(device != null) {
                res.json(device);
            } else {
                res.status(204).end();
            }           
        }
    });
};