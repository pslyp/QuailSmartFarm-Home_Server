const Data = require('mongoose').model('Data');

exports.create = (req, res) => {
    const b = req.body;
    const data = new Data({
        token: b.token,
        data: [{ 
            datetime: b.datetime,
            brightness: b.brightness,
            temperature: b.temperature
        }]
    });

    data.save((err) => {
        if(err) {
            throw err;
        } else {
            res.status(201).end();
        }
    });
};

exports.getAll = (req, res) => {

    Data.find({}, { _id: 0, __v: 0 }, (err, data) => {
        if(err) {
            throw err;
        } else if(data == null) {
            res.status(204).end();
        } else {
            res.json(data);
        }
    });
};

exports.getByToken = (req, res) => {
    const _token = req.params.token;

    Data.findOne({ token: _token }, { _id: 0, __v: 0 }, (err, data) => {
        if(err)
            throw err;
        else if(data == null)
            res.status(204).end();
        else 
            res.json(data);
    });
};

exports.updateByToken = (req, res) => {
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