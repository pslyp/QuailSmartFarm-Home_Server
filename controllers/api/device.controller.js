const Device = require('mongoose').model('Device');
const User = require('mongoose').model('User');


var userId;
function checkID(req, res, next) {
    userId = req.query.userId;

    if(userId == null) {
        res.status(400).end();
    } else {
        User.findOne({ id: userId }, function(err, user) {
            if(err)
                throw err;
            else
                if(user != null)
                    next();
                else
                    res.status(404).end();
        });
    }
};

var device;
function createDevice(req, res, next) {
    device = new Device(req.body);

    device.save(function(err) {
        if(err)
            throw err;
        else
            next();
    });
};

function updateDeviceAtUser(req, res) {
    // const userId = req.query.userId;

    User.findOneAndUpdate({ id: userId }, { $push: { devices: device._id } }, function(err) {
        if(err)
            throw err;
        else
            res.end();
    });
};

exports.create = [checkID, createDevice, updateDeviceAtUser];

exports.updateByToken = function(req, res) {
    const _token = req.params.token;
    const body = req.body;
    
    const dataVal = {
        name: body.name,
        brightness: body.brightness,
        tempMin: body.tempMin,
        tempMax: body.tempMax,
        timeStart: body.timeStart,
        timeStop: body.timeStop
    }

    Device.findOneAndUpdate({ token: _token }, dataVal, function(err) {
        if(err)
            throw err;
        else
            res.status(204).end();
    })
}

exports.getAll = function(req, res) {

    Device.find({}, { _id: 0, __v: 0 }, function(err, device) {
        if(err) {
            res.status(500).end();
        } else {
            res.json(device);
        }
    });

};

exports.getByToken = function(req, res) {
    const _token = req.params.token;
    
    Device.findOne({ token: _token }, { _id: 0, token: 0, __v: 0 }, function(err, device) {
        if(err) {
            res.status(500).end();
        } else {
            if(device != null) {
                res.json(device);
            } else {
                res.status(204).end();
            }           
        }
    });
};