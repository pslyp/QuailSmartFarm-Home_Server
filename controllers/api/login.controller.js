var User = require('mongoose').model('User');

exports.login = function(req, res) {
    var body = req.body;

    User.findOne({ 'email': body.email }, function(err, user) {
        if(err) {
            console.log('Login fail');
        } else {
            if(user == null) {
                res.status(401).end();
            } else if(body.password == user.password) {
                res.status(200);
                res.json({ message: "Success" });
            } else {
                res.status(200);
                res.json({ message: "Wrong password" });
            }
        }
    });

};