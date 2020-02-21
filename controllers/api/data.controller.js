const Data = require('mongoose').model('Data');

exports.create = (req, res) => {
    const data = new Data();

    data.save((err) => {
        if(err) {
            throw err;
        } else {
            res.status(201).end();
        }
    });
};

exports.getAll = (req, res) => {

    Data.find({}, { '_id': 0, '__v': 0 }, (err, data) => {
        if(err) {
            throw err;
        } else {
            res.json(data);
        }
    });
};

exports.update = (req, res) => {
    const body = req.body;
    const token = req.params.token;

    const dataVal = {
        datetime: body.datetime,
        brightness: body.brightness,
        temperature: body.temperature
    };

    Data.findOneAndUpdate({ token: token }, { $push: { data: dataVal } }, (err) => {
        if(err) {
            throw err;
        } else {
            res.status(201).end();
        }
    });
};