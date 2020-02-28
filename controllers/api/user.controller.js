const verify = require('../../configs/verify')
const User = require('mongoose').model('User');

exports.create = function(req, res) {
    var user = new User(req.body);

    user.save(function(err) {
        if(err) {
            res.json({ status: 500 });
            throw err;
        } else {
            res.json({ status: 201 });
        }
    });
};

exports.getAll = function(req, res) {

    User.find({}, { '_id': 0, 'id': 1, 'username': 1, 'email': 1 }, function(err, user) {
        if(err) {
            res.json({ status: 500 });
            throw err;
        } else {
            res.json(user);
        }
    }).populate('devices');
};

exports.getById = function(req, res) {
    const _id = req.user.id;

    User.findOne({ id: _id }, { _id: 0, username: 1, email: 1 }, function(err, user) {
        if(err) {
            res.json({ status: 500 });
            throw err;
        } else {
            res.json(user);
        }
    }).populate('devices');
};

exports.login = function(req, res) {
    const _email = req.body.email;
    const _password = req.body.password;

    User.findOne({ email: _email }, function(err, user) {
        if(err) {
            res.json({ status: 500 });
            throw err;
        } else {
            if(user == null) {
                res.json({ status: 401 });
            } else if(_password != user.password) {
                // res.json({ message: "Success" });
                res.json({ status: 416 });
            } else {
                const payload = { id: user.id, name: user.username }
                const token = verify.genToken(payload)

                res.json({ 
                    status: 200,
                    id: user.id,
                    username: user.username,
                    token: token 
                });
            }
        }
    });

};

exports.parId = function(req, res, next, _id) {
    User.findOne({ id: _id }, function(err, user) {
        if(err) {
            return next(err);
        } else if(user == null) {
            res.json({ status: 204 });
        } else {
            req.user = user;
            next();
        }   
    });
};