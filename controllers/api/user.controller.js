var User = require('mongoose').model('User');

exports.create = function(req, res) {
    var user = new User(req.body);

    user.save(function(err) {
        if(err) {
            console.log('Create Fail');
            res.status(204);
            res.json({ message: "Fail" });
            res.end();
        } else {
            console.log('Create Success');
            res.status(200);
            res.json({ message: "Success" });
            res.end();
        }
    });
};

exports.findAll = function(req, res) {

    User.find({}, { '_id': 0, 'username': 1, 'email': 1, "devices": 1 }, function(err, user) {
        if(err) {
            console.log('Fail');
        } else {
            res.status(200);
            res.json(user);
        }
    });

};