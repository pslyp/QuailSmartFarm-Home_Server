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

exports.findAll = function(req, res) {

    User.find({}, { '_id': 0, 'username': 1, 'email': 1, "devices": 1 }, function(err, user) {
        if(err) {
            console.log('Fail');

            res.status(500);
            res.json({ message: "fail" });
        } else {
            res.json(user);
        }
    });

};