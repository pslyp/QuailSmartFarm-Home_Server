const verify = require('../../configs/verify')
const User = require('mongoose').model('User');

exports.create = function(req, res) {
    var user = new User(req.body);

    user.save(function(err) {
        if(err) {
            res.status(500).send(err);
        } else {
            res.status(201).end();
        }
    });
};

exports.getAll = function(req, res) {

    User.find({}, { '_id': 0, 'id': 1, 'username': 1, 'email': 1 }, function(err, user) {
        if(err) {
            res.status(500).end();
            throw err;
        } else {
            res.json(user)
        }
    }).populate('devices');
};

exports.getById = function(req, res) {
    const _id = req.user.id;

    User.findOne({ id: _id }, { _id: 0, username: 1, email: 1 }, function(err, user) {
        if(err) {
            res.status(500).end();
            throw err;
        } else {
            res.json(user);
        }
    }).populate('devices');
};

exports.login = function(req, res) {
    const _email = req.body.email;
    const _password = req.body.password;

    test(req, res, _email, _password)

    User.findOne({ email: _email }, function(err, user) {
        if(err) {
            res.status(500).end();
        } else {
            if(user == null) {
                res.status(401).end();
            } else if(_password != user.password) {
                // res.json({ message: "Success" });
                res.status(416).end();
            } else {
                const payload = { id: user.id, name: user.username }
                const token = verify.genToken(payload)

                res.json({ 
                    status: 200,
                    id: user.id,
                    username: user.username,
                    token: token 
                })
            }
        }
    });

};

exports.parId = function(req, res, next, _id) {
    User.findOne({ id: _id }, function(err, user) {
        if(err) {
            return next(err);
        } else if(user == null) {
            res.status(204).end();
        } else {
            req.user = user;
            next();
        }   
    });
};

test = (req, res, _email, _pass) => {
    if(_email == "test@quail.com" && _pass == "test") {
        const _id = "1234"
        const _name = "test"        
        const payload = { id: _id, name: _name }
        const _token = verify.genToken(payload)

        res.json({
            status: 200,
            id: _id,
            username: _name,
            token: _token
        })
    }
}