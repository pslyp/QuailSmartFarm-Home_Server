var User = require('mongoose').model('User');

exports.create = function(req, res) {
    var user = new User(req.body);

    user.save(function(err) {
        if(err) {
            res.status(500).end();
            throw err;
        } else {
            res.status(201).end();
        }
    });
};

exports.getAll = function(req, res) {

    User.find({}, { '_id': 0, 'id': 1, 'username': 1, 'email': 1, "devices": 1 }, function(err, user) {
        if(err) {
            res.status(500).end();
            throw err;
        } else {
            res.json(user);
        }
    });
};

exports.getById = function(req, res) {

    User.findOne({ id: req.user.id }, { '_id': 0, 'username': 1, 'email': 1, 'devices': 1 }, function(err, user) {
        if(err) {
            res.status(500).end();
            throw err;
        } else {
            res.json(user);
        }
    });
};

exports.updateDevice = function(req, res) {

    var dataArr = { token: req.body.token, name: req.body.name };

    User.findOneAndUpdate({ id: req.user.id }, { $push: { devices: dataArr } }, function(err, user) {
        if(err) {
            res.status(500).end();
            throw err;
        } else {
            res.status(204).end();
        }
    });
};

exports.login = function(req, res) {
    var body = req.body;

    User.findOne({ 'email': body.email }, function(err, user) {
        if(err) {
            res.status(500).end();
        } else {
            if(user == null) {
                res.status(401).end();
            } else if(body.password == user.password) {
                // res.json({ message: "Success" });
                res.status(416).end();
            } else {
                // res.json({ message: "Wrong password" });
                res.status(417).end();
            }
        }
    });

};

exports.parId = function(req, res, next, id) {
    User.findOne({ id: id }, function(err, user) {
        if(err) {
            return next(err);
        } else {
            if(user != null) {
                req.user = user;
                next();
            } else {
                console.log('Find not found for id user');

                res.status(204);
                res.json({ message: 'Find not found for id user' });
            }
        }
    });
};