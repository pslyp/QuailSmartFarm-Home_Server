module.exports = function(app) {
    // const test = require('../controllers/test.controller');

    app.use('/api/v1', function(req, res, next) {
        next();
    }, function(req, res) {
        console.log("EiEi");
    });

    app.get('/user', function(req, res) {
        console.log("EiEi");
    });
};