var express = require('express');

// var route = require('../routes/user.route');

module.exports = function() {
    const app = express();

    console.log(process.cwd());

    app.use(express.static(process.cwd() + '/public'));
    // app.use('/api', require('../routes/user.route')(app));

    require('../configs/bodyParser')(app);

    require('../routes/index.route')(app);
    require('../routes/login.route')(app);
    // require('../routes/device.route')(app);
    // require('../routes/test.route')(app);

    require('../routes/api')(app);

    return app;
}