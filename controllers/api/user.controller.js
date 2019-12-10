var User = require('mongoose').model('User');

exports.create = function(req, res) {
    var user = new User(req.body);

    user.save(function(err) {
        if(err) {
            console.log('Create User Fail');
            console.log(err);

            res.status(500);
            res.json({ message: "fail" });
        } else {
            console.log('Create User Success');

            res.status(201);
            res.json({ message: "success" });
        }
    });
};

exports.getAllUser = function(req, res) {

    User.find({}, { '_id': 0, 'id': 1, 'username': 1, 'email': 1, "devices": 1 }, function(err, user) {
        if(err) {
            console.log('Fail');

            res.status(500);
            res.json({ message: "fail" });
        } else {
            res.json(user);
        }
    });

};

exports.getUserById = function(req, res) {

    User.findOne({ id: req.user.id }, { '_id': 0, 'username': 1, 'email': 1, 'devices': 1 }, function(err, user) {
        if(err) {
            console.log('Find One By ID Fail');

            res.status(500);
        } else {
            res.json(user);
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