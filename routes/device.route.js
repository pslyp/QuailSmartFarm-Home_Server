module.exports = function(app) {
    const device = require('../controllers/api/device.controller');

    app.route('/device')
        .get(device.findAll)
        .post(device.create);
    app.route('/device/:token')
        .get(device.findById)
        .put(device.insert);

};