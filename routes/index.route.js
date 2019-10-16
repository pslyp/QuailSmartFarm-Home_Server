module.exports = function(app) {
    const index = require('../controllers/index.controller');

    app.get('/', index.render);
    // app.get('/', function(req, res) {
        // res.sendFile(process.cwd() + '/views/index.html');
        // console.log(process.cwd() + '/views/index.html');
    // });
};